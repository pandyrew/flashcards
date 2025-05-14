"use client";

import { useState, useEffect } from "react";
import { quizzes, Quiz, QuizQuestion } from "./data/quizData";

export default function Home() {
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [rankedOptions, setRankedOptions] = useState<string[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Initialize questions when quiz is selected
  useEffect(() => {
    if (selectedQuiz) {
      const shuffledQuestions = [...selectedQuiz.questions].sort(
        () => Math.random() - 0.5
      );
      setQuestions(shuffledQuestions);
      setCurrentQuestionIndex(0);
      setSelectedOptions([]);
      setRankedOptions([]);
      setShowExplanation(false);
      setIsCorrect(null);
      setScore({ correct: 0, total: 0 });
      setQuizCompleted(false);
    }
  }, [selectedQuiz]);

  // Reset state when moving to a new question
  useEffect(() => {
    if (
      questions.length > 0 &&
      questions[currentQuestionIndex]?.type === "ranking"
    ) {
      // For ranking questions, initialize with unranked options
      setRankedOptions([]);
    }
  }, [currentQuestionIndex, questions]);

  // Get current question
  const currentQuestion = questions[currentQuestionIndex];

  // Handle option selection
  const handleOptionSelect = (option: string) => {
    if (showExplanation) return; // Prevent selection after answering

    if (currentQuestion.type === "single") {
      setSelectedOptions([option]);
    } else if (currentQuestion.type === "multiple") {
      // For multiple selection
      if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter((item) => item !== option));
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    }
  };

  // Handle ranking option selection
  const handleRankingSelect = (option: string) => {
    if (showExplanation) return; // Prevent selection after answering

    // If option is already in ranked list, remove it
    if (rankedOptions.includes(option)) {
      setRankedOptions(rankedOptions.filter((item) => item !== option));
      return;
    }

    // Add option to ranked list
    setRankedOptions([...rankedOptions, option]);
  };

  // Move an item up in the ranking
  const moveItemUp = (index: number) => {
    if (index <= 0 || showExplanation) return;
    const newRankedOptions = [...rankedOptions];
    [newRankedOptions[index], newRankedOptions[index - 1]] = [
      newRankedOptions[index - 1],
      newRankedOptions[index],
    ];
    setRankedOptions(newRankedOptions);
  };

  // Move an item down in the ranking
  const moveItemDown = (index: number) => {
    if (index >= rankedOptions.length - 1 || showExplanation) return;
    const newRankedOptions = [...rankedOptions];
    [newRankedOptions[index], newRankedOptions[index + 1]] = [
      newRankedOptions[index + 1],
      newRankedOptions[index],
    ];
    setRankedOptions(newRankedOptions);
  };

  // Check answer
  const checkAnswer = () => {
    const correctAnswer = currentQuestion.correctAnswer;
    let correct = false;

    if (currentQuestion.type === "single") {
      correct = selectedOptions[0] === correctAnswer;
    } else if (currentQuestion.type === "multiple") {
      // For multiple selection, all correct options must be selected and no incorrect options
      const correctAnswers = correctAnswer as string[];
      correct =
        selectedOptions.length === correctAnswers.length &&
        selectedOptions.every((option) => correctAnswers.includes(option));
    } else if (currentQuestion.type === "ranking") {
      // For ranking, the order must be exactly correct
      const correctOrder = correctAnswer as string[];
      correct =
        rankedOptions.length === correctOrder.length &&
        rankedOptions.every((option, index) => option === correctOrder[index]);
    }

    setIsCorrect(correct);
    setShowExplanation(true);

    if (correct) {
      setScore((prev) => ({ ...prev, correct: prev.correct + 1 }));
    }
    setScore((prev) => ({ ...prev, total: prev.total + 1 }));
  };

  // Move to next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex === questions.length - 1) {
      setQuizCompleted(true);
      return;
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedOptions([]);
    setRankedOptions([]);
    setShowExplanation(false);
    setIsCorrect(null);
  };

  // Restart quiz
  const restartQuiz = () => {
    if (selectedQuiz) {
      const shuffledQuestions = [...selectedQuiz.questions].sort(
        () => Math.random() - 0.5
      );
      setQuestions(shuffledQuestions);
      setCurrentQuestionIndex(0);
      setSelectedOptions([]);
      setRankedOptions([]);
      setShowExplanation(false);
      setIsCorrect(null);
      setScore({ correct: 0, total: 0 });
      setQuizCompleted(false);
    }
  };

  // Return to quiz selection
  const returnToQuizSelection = () => {
    setSelectedQuiz(null);
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setSelectedOptions([]);
    setRankedOptions([]);
    setShowExplanation(false);
    setIsCorrect(null);
    setScore({ correct: 0, total: 0 });
    setQuizCompleted(false);
  };

  // Format question text with code highlighting and math formatting
  const formatQuestionText = (text: string) => {
    // Split the text into parts, separating code blocks from regular text
    const parts = text.split(/(\n\n)/);

    return parts.map((part, index) => {
      // Check if part is likely a code block (has multiple lines with code-like syntax)
      const isCodeBlock =
        part.includes("{") &&
        part.includes("}") &&
        (part.includes("int") ||
          part.includes("for") ||
          part.includes("return") ||
          part.includes("#include"));

      // Check if part contains mathematical expressions
      const hasMathExpression =
        (part.includes("O(") && part.includes(")")) ||
        (part.includes("T(") && part.includes(")")) ||
        part.match(/[a-z]\^[0-9]/);

      if (isCodeBlock) {
        return (
          <pre
            key={index}
            className="bg-gray-800 text-white p-4 rounded-md my-4 overflow-x-auto font-mono text-base leading-relaxed"
          >
            {part.split("\n").map((line, i) => (
              <div key={i} className="whitespace-pre">
                {line}
              </div>
            ))}
          </pre>
        );
      } else if (hasMathExpression) {
        // Format math expressions with special styling
        let formattedText = part;

        // Replace Big O notations
        formattedText = formattedText.replace(/O\(([^)]+)\)/g, (match, p1) => {
          return `<span class="font-mono font-bold">O(${p1})</span>`;
        });

        // Replace T(n) function
        formattedText = formattedText.replace(/T\(([^)]+)\)/g, (match, p1) => {
          return `<span class="font-mono font-bold">T(${p1})</span>`;
        });

        // Format superscripts (like n²)
        formattedText = formattedText.replace(
          /(\d?)n(\d|²|³)/g,
          (match, p1, p2) => {
            const prefix = p1 || "";
            let superscript = p2;
            if (p2 === "2") superscript = "²";
            if (p2 === "3") superscript = "³";
            return `${prefix}<span class="font-mono font-bold">n<sup>${superscript}</sup></span>`;
          }
        );

        return (
          <div
            key={index}
            className="text-slate-800 my-2 p-2 bg-blue-50 rounded-md font-medium"
            dangerouslySetInnerHTML={{ __html: formattedText }}
          />
        );
      }

      // For regular text
      return <span key={index}>{part}</span>;
    });
  };

  // Format option text to support math notation
  const formatOptionText = (text: string) => {
    let formattedText = text;

    // Replace Big O notations
    formattedText = formattedText.replace(/O\(([^)]+)\)/g, (match, p1) => {
      return `<span class="font-mono font-bold">O(${p1})</span>`;
    });

    // Format superscripts (like n²)
    formattedText = formattedText.replace(
      /(\d?)n(\d|²|³)/g,
      (match, p1, p2) => {
        const prefix = p1 || "";
        let superscript = p2;
        if (p2 === "2") superscript = "²";
        if (p2 === "3") superscript = "³";
        return `${prefix}<span class="font-mono">n<sup>${superscript}</sup></span>`;
      }
    );

    return <span dangerouslySetInnerHTML={{ __html: formattedText }} />;
  };

  // Render ranking options section
  const renderRankingQuestion = () => {
    const unrankedOptions = currentQuestion.options.filter(
      (option) => !rankedOptions.includes(option)
    );

    return (
      <div className="flex flex-col space-y-4 mb-4">
        {/* Ranked options section */}
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="font-bold text-lg mb-2 text-blue-800">
            Your Ranking (Top to Bottom):
          </h3>
          {rankedOptions.length === 0 ? (
            <div className="text-blue-500 italic">
              Click items below to add them to your ranking
            </div>
          ) : (
            <div className="space-y-2">
              {rankedOptions.map((option, index) => (
                <div
                  key={index}
                  className="bg-white p-3 rounded border border-blue-300 flex items-center justify-between"
                >
                  <span className="font-bold mr-2 text-blue-700">
                    {index + 1}.
                  </span>
                  <span className="flex-grow text-slate-700">
                    {formatOptionText(option)}
                  </span>
                  <div className="flex space-x-1">
                    <button
                      onClick={() => moveItemUp(index)}
                      disabled={index === 0 || showExplanation}
                      className={`p-1 rounded ${
                        index === 0 || showExplanation
                          ? "text-gray-400"
                          : "text-blue-700 hover:bg-blue-100"
                      }`}
                    >
                      ↑
                    </button>
                    <button
                      onClick={() => moveItemDown(index)}
                      disabled={
                        index === rankedOptions.length - 1 || showExplanation
                      }
                      className={`p-1 rounded ${
                        index === rankedOptions.length - 1 || showExplanation
                          ? "text-gray-400"
                          : "text-blue-700 hover:bg-blue-100"
                      }`}
                    >
                      ↓
                    </button>
                    <button
                      onClick={() => handleRankingSelect(option)}
                      disabled={showExplanation}
                      className={`p-1 rounded ${
                        showExplanation
                          ? "text-gray-400"
                          : "text-red-700 hover:bg-red-100"
                      }`}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Unranked options section */}
        <div className="mt-4">
          <h3 className="font-bold text-lg mb-2 text-slate-800">
            Available Items:
          </h3>
          <div className="grid grid-cols-1 gap-2">
            {unrankedOptions.map((option, index) => (
              <div
                key={index}
                onClick={() => handleRankingSelect(option)}
                className={`p-3 border rounded-lg cursor-pointer transition-all text-slate-700 ${
                  showExplanation
                    ? "border-gray-200 bg-gray-50 cursor-not-allowed"
                    : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                }`}
              >
                {formatOptionText(option)}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
 
  // Quiz selection screen
  if (!selectedQuiz) {
    return (
      <main className="h-screen overflow-hidden bg-slate-50 flex flex-col py-4 px-4">
        <div className="max-w-4xl mx-auto w-full flex flex-col h-full">
          <h1 className="text-3xl font-bold text-center text-slate-800 mb-6">
            ICS 46 Data Structures Quizzes
          </h1>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 p-6 flex flex-col flex-1">
            <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">
              Select a Quiz
            </h2>

            <div className="grid gap-4 overflow-y-auto pr-2 flex-1">
              {quizzes.map((quiz) => (
                <button
                  key={quiz.id}
                  onClick={() => setSelectedQuiz(quiz)}
                  className="p-6 bg-blue-50 hover:bg-blue-100 text-left rounded-lg border border-blue-200 transition-all hover:shadow-md"
                >
                  <h3 className="text-xl font-bold text-blue-800 mb-2">
                    {quiz.title}
                  </h3>
                  <p className="text-slate-700">{quiz.description}</p>
                  <div className="mt-3 text-blue-600 font-medium">
                    {quiz.questions.length} questions
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Loading state
  if (questions.length === 0) {
    return (
      <main className="h-screen overflow-hidden bg-slate-50 flex items-center justify-center">
        <div className="text-2xl">Loading quiz...</div>
      </main>
    );
  }

  // Quiz completed screen
  if (quizCompleted) {
    const percentage = Math.round((score.correct / score.total) * 100);
    let resultMessage = "You need more practice!";
    let resultColor = "text-red-600";
    let bgColor = "bg-red-50";
    let borderColor = "border-red-100";

    if (percentage >= 90) {
      resultMessage = "Outstanding! You're a CS master!";
      resultColor = "text-green-600";
      bgColor = "bg-green-50";
      borderColor = "border-green-100";
    } else if (percentage >= 70) {
      resultMessage = "Good job! Your understanding is solid.";
      resultColor = "text-blue-600";
      bgColor = "bg-blue-50";
      borderColor = "border-blue-100";
    } else if (percentage >= 50) {
      resultMessage = "Not bad! Keep studying to improve.";
      resultColor = "text-yellow-600";
      bgColor = "bg-yellow-50";
      borderColor = "border-yellow-100";
    }

    return (
      <main className="h-screen overflow-hidden bg-slate-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <h1 className="text-3xl font-bold text-center text-slate-800 mb-6">
            Quiz Completed!
          </h1>

          <div
            className={`${bgColor} rounded-xl shadow-lg overflow-hidden p-6 border ${borderColor}`}
          >
            <h2 className="text-2xl font-bold mb-4 text-center text-slate-800">
              Your Score
            </h2>
            <div className="text-6xl font-bold text-center mb-3 text-slate-800">
              {score.correct} / {score.total}
            </div>
            <div className="text-2xl font-bold text-center mb-4 flex justify-center">
              <span
                className={`px-4 py-1 rounded-full ${bgColor} ${resultColor} border ${borderColor}`}
              >
                {percentage}%
              </span>
            </div>
            <p className={`text-xl ${resultColor} text-center font-bold mb-6`}>
              {resultMessage}
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={restartQuiz}
                className="w-full py-3 bg-blue-600 text-white font-bold text-lg rounded-lg shadow hover:bg-blue-700 transition-all"
              >
                Restart Quiz
              </button>
              <button
                onClick={returnToQuizSelection}
                className="w-full py-3 bg-slate-200 text-slate-800 font-bold text-lg rounded-lg shadow hover:bg-slate-300 transition-all"
              >
                Back to Quiz Selection
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Quiz questions screen
  return (
    <main className="h-screen overflow-hidden bg-slate-50 flex flex-col py-4 px-4">
      <div className="max-w-4xl mx-auto w-full flex flex-col h-full">
        <h1 className="text-3xl font-bold text-center text-slate-800 mb-3">
          {selectedQuiz.title}
        </h1>

        <div className="flex justify-between mb-3 text-base">
          <div className="bg-blue-100 px-3 py-1 rounded-full text-blue-800 font-bold shadow-sm text-center">
            Question {currentQuestionIndex + 1} of {questions.length}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-3 border border-gray-100 flex-1 flex flex-col">
          <div className="p-4 sm:p-6 flex flex-col flex-1 overflow-hidden">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-slate-800 mb-2">
                {currentQuestion.type === "multiple"
                  ? "Select all that apply:"
                  : currentQuestion.type === "ranking"
                  ? "Rank the options:"
                  : "Select one:"}
              </h2>
              <div className="text-lg text-slate-700 whitespace-pre-wrap leading-relaxed max-h-[25vh] overflow-y-auto pr-2">
                {formatQuestionText(currentQuestion.question)}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              {currentQuestion.type === "ranking" ? (
                renderRankingQuestion()
              ) : (
                <div className="space-y-2 mb-4">
                  {currentQuestion.options.map((option, index) => (
                    <div
                      key={index}
                      onClick={() => handleOptionSelect(option)}
                      className={`p-3 border-2 rounded-lg cursor-pointer transition-all ${
                        selectedOptions.includes(option)
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-blue-300"
                      } ${
                        showExplanation &&
                        ((Array.isArray(currentQuestion.correctAnswer) &&
                          currentQuestion.correctAnswer.includes(option)) ||
                          currentQuestion.correctAnswer === option)
                          ? "border-green-500 bg-green-50"
                          : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-6 h-6 flex-shrink-0 rounded-full border-2 flex items-center justify-center ${
                            selectedOptions.includes(option)
                              ? "border-blue-500 bg-blue-500 text-white"
                              : "border-gray-400 bg-white"
                          }`}
                        >
                          {currentQuestion.type === "multiple"
                            ? selectedOptions.includes(option)
                              ? "✓"
                              : ""
                            : selectedOptions.includes(option)
                            ? "•"
                            : ""}
                        </div>
                        <div className="text-base font-medium text-slate-700">
                          {formatOptionText(option)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {!showExplanation ? (
              <button
                onClick={checkAnswer}
                disabled={
                  currentQuestion.type === "single" ||
                  currentQuestion.type === "multiple"
                    ? selectedOptions.length === 0
                    : rankedOptions.length !== currentQuestion.options.length
                }
                className={`w-full py-3 text-white font-bold text-base rounded-lg shadow transition-all ${
                  currentQuestion.type === "single" ||
                  currentQuestion.type === "multiple"
                    ? selectedOptions.length === 0
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                    : rankedOptions.length !== currentQuestion.options.length
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                Check Answer
              </button>
            ) : (
              <div>
                <div
                  className={`mb-3 p-3 rounded-lg ${
                    isCorrect
                      ? "bg-green-100 text-green-800 border border-green-200"
                      : "bg-red-100 text-red-800 border border-red-200"
                  }`}
                >
                  <p className="font-bold text-base mb-1">
                    {isCorrect ? "✓ Correct!" : "✗ Incorrect!"}
                  </p>
                </div>
                <button
                  onClick={handleNextQuestion}
                  className="w-full py-3 bg-blue-600 text-white font-bold text-base rounded-lg shadow hover:bg-blue-700 transition-all"
                >
                  {currentQuestionIndex === questions.length - 1
                    ? "Show Results"
                    : "Next Question"}
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-between text-center mb-1">
          <div className="px-3 py-1 bg-blue-100 rounded-full text-blue-800 font-bold shadow-sm">
            Score: {score.correct}/{score.total}
          </div>
          <div className="flex gap-2">
            <button
              onClick={returnToQuizSelection}
              className="px-3 py-1 bg-slate-200 text-slate-800 font-bold rounded-full hover:bg-slate-300 transition-all"
            >
              Back
            </button>
            <button
              onClick={restartQuiz}
              className="px-3 py-1 bg-slate-200 text-slate-800 font-bold rounded-full hover:bg-slate-300 transition-all"
            >
              Restart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
