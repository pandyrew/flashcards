"use client";

import { useState } from "react";

interface Flashcard {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export default function Flashcards() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [shuffledCards, setShuffledCards] = useState<Flashcard[]>([]);
  const [initialized, setInitialized] = useState(false);

  const flashcards: Flashcard[] = [
    {
      id: 1,
      category: "Big O Notation",
      question:
        "What is the output of this code?\n\nint n = 1000;\nint total = 0;\nfor (int i=0; i<=n+1; i++){\n  total += i;\n}\ncout << total;",
      answer: "502002",
    },
    {
      id: 2,
      category: "Vectors",
      question:
        "What happens to a vector when you add a new item (with push_back()) but there are no more unused slots available in the vector?",
      answer:
        "Allocates a new array double the current size, copies the values from old storage to new storage, then deletes the old storage",
    },
    {
      id: 3,
      category: "Big O Notation",
      question:
        "What is the time complexity in Big O notation for an algorithm that does the following steps: T(n) = 4n + 2n² + 3n³ + 6",
      answer: "O(n³)",
    },
    {
      id: 4,
      category: "Code Analysis",
      question:
        "What does the following code do?\n\n#include <iostream>\nusing namespace std;\n\nint main(){\n  int myarray[] = {2,4,6,8};\n  for (int i=0; i<3; i++){\n    cout << myarray[i];\n  }\n  return 0;\n}",
      answer: "print 246",
    },
    {
      id: 5,
      category: "Array Manipulation",
      question:
        'What happens when you run this code?\n\nint myarray[] = {2,4,6,8};\nfor (int i=0; i<=8; i++){\n  cout << myarray[i] << endl;\n  cout << "id: " << &myarray[i] << endl;\n}',
      answer: "Indexes beyond the end of the array",
    },
    {
      id: 6,
      category: "Big O Notation",
      question:
        "Match the rank order of Big O measurements, from the slowest rate of growth as N increases, to the fastest rate of growth as N increases. What is the order?",
      answer:
        "1. Constant - O(1)\n2. Logarithmic - O(log n)\n3. Linear - O(n)\n4. Log Linear - O(n log n)\n5. Quadratic - O(n²)\n6. Cubic - O(n³)\n7. Exponential - O(2ⁿ)",
    },
    {
      id: 7,
      category: "Time Complexity",
      question:
        "The time complexity of a particular algorithm is O(n³). Given that it takes 4 seconds to complete the algorithm with 1000 inputs, how long would it take with 10,000 inputs?",
      answer: "4000 seconds",
    },
    {
      id: 8,
      category: "Algorithm Analysis",
      question:
        "Assume putchar() costs 2 instructions. What is T(N) for strlen(s) assuming N is the length of the string s?\n\nint strlen(char s[]) {\n  int len = 0;\n  for (int i=0; s[i] != '\\0'; ++i)\n    ++len;\n  return len;\n}",
      answer: "4N + 3",
    },
    {
      id: 9,
      category: "Big O Notation",
      question:
        "Match the Big-O notation for time complexity with the term used to describe it:\nO(1) =\nO(log N) =\nO(N) =\nO(N log N) =\nO(N²) =\nO(N³) =\nO(2^N) =\nO(N!) =",
      answer:
        "O(1) = constant time\nO(log N) = logarithmic time\nO(N) = linear time\nO(N log N) = log linear time\nO(N²) = quadratic time\nO(N³) = cubic time\nO(2^N) = exponential time\nO(N!) = factorial time",
    },
    {
      id: 10,
      category: "Big O Notation",
      question: "SELECT ALL the statements that are true about Big O notation:",
      answer:
        "• The part of T(N) that increases the fastest as n increases\n• An algorithm's efficiency in a machine-independent way",
    },
  ];

  // Initialize with shuffled cards
  if (!initialized) {
    setShuffledCards([...flashcards].sort(() => Math.random() - 0.5));
    setInitialized(true);
  }

  const cards = initialized ? shuffledCards : flashcards;
  const currentCard = cards[currentCardIndex];

  const handleNextCard = () => {
    setShowAnswer(false);
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrevCard = () => {
    setShowAnswer(false);
    setCurrentCardIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  const handleFlipCard = () => {
    setShowAnswer(!showAnswer);
  };

  const handleShuffleCards = () => {
    setShowAnswer(false);
    setShuffledCards([...cards].sort(() => Math.random() - 0.5));
    setCurrentCardIndex(0);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
          CS46 Data Structures Flashcards
        </h1>

        <div className="flex justify-between mb-4 text-sm">
          <div className="bg-blue-100 px-3 py-1 rounded-full">
            Card {currentCardIndex + 1} of {cards.length}
          </div>
          <div className="bg-purple-100 px-3 py-1 rounded-full">
            {currentCard.category}
          </div>
        </div>

        <div
          className="bg-white rounded-lg shadow-lg overflow-hidden mb-6 cursor-pointer transform transition hover:scale-[1.01]"
          style={{ minHeight: "400px" }}
          onClick={handleFlipCard}
        >
          <div className="p-6">
            {showAnswer ? (
              <div className="h-full flex flex-col">
                <div className="text-sm text-gray-500 mb-2">Answer:</div>
                <div
                  className="flex-grow whitespace-pre-wrap text-xl"
                  style={{ whiteSpace: "pre-wrap" }}
                >
                  {currentCard.answer}
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col">
                <div className="text-sm text-gray-500 mb-2">Question:</div>
                <div
                  className="flex-grow whitespace-pre-wrap text-xl"
                  style={{ whiteSpace: "pre-wrap" }}
                >
                  {currentCard.question}
                </div>
              </div>
            )}
          </div>
          <div className="bg-gray-50 px-4 py-3 text-center text-sm">
            Click to {showAnswer ? "see question" : "reveal answer"}
          </div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={handlePrevCard}
            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition"
          >
            Previous
          </button>

          <button
            onClick={handleShuffleCards}
            className="px-4 py-2 bg-yellow-400 rounded-md hover:bg-yellow-500 transition"
          >
            Shuffle
          </button>

          <button
            onClick={handleNextCard}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
