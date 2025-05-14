export interface QuizQuestion {
  id: number;
  question: string;
  type: "single" | "multiple" | "ranking";
  options: string[];
  correctAnswer: string | string[];
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
}

export const quizzes: Quiz[] = [
  {
    id: "week1",
    title: "Week 1: CS46 Data Structures",
    description: "Basic concepts of Big O notation and data structures",
    questions: [
      {
        id: 1,
        question:
          "What is the output of this code?\n\nint n = 1000;\nint total = 0;\nfor (int i=0; i<=n+1; i++){\n  total += i;\n}\ncout << total;",
        type: "single",
        options: ["1001", "1000", "1003", "999", "502002"],
        correctAnswer: "502002",
      },
      {
        id: 2,
        question:
          "What happens to a vector when you add a new item (with push_back()) but there are no more unused slots available in the vector?",
        type: "single",
        options: [
          "Overwrites the last value in the vector",
          "Allocates a new array double the current size, copies the values from old storage to new storage, then deletes the old storage",
          "Stores the new item in the next contiguous memory location to the buffer inside the vector",
          "Throws an exception",
          "Terminates the program",
        ],
        correctAnswer:
          "Allocates a new array double the current size, copies the values from old storage to new storage, then deletes the old storage",
      },
      {
        id: 3,
        question:
          "What is the time complexity in Big O notation for an algorithm that does the following steps:\n\nT(n) = 4n + 2n² + 3n³ + 6",
        type: "single",
        options: ["O(3n³ + 2n²)", "O(n³)", "O(3n³)", "O(n²)", "O(n² + n³)"],
        correctAnswer: "O(n³)",
      },
      {
        id: 4,
        question:
          "What does the following code do?\n\n#include <iostream>\nusing namespace std;\n\nint main(){\n  int myarray[] = {2,4,6,8};\n  for (int i=0; i<3; i++){\n    cout << myarray[i];\n  }\n  return 0;\n}",
        type: "single",
        options: [
          "print 2468",
          "print 246",
          "error index out of bounds",
          "print 24",
          "runtime error segfault",
        ],
        correctAnswer: "print 246",
      },
      {
        id: 5,
        question:
          'What happens when you run this code?\n\nint myarray[] = {2,4,6,8};\nfor (int i=0; i<=8; i++){\n  cout << myarray[i] << endl;\n  cout << "id: " << &myarray[i] << endl;\n}',
        type: "single",
        options: [
          "Indexes beyond the end of the array",
          "Throws an exception",
          "Dynamically increases the size of myarray",
          'Compiler message "index out of bounds"',
          "Runtime error segfault",
        ],
        correctAnswer: "Indexes beyond the end of the array",
      },
      {
        id: 6,
        question:
          "Rank the Big O measurements from the slowest rate of growth (1) to the fastest rate of growth (7) as N increases.",
        type: "ranking",
        options: [
          "O(1) - Constant",
          "O(log n) - Logarithmic",
          "O(n) - Linear",
          "O(n log n) - Log Linear",
          "O(n²) - Quadratic",
          "O(n³) - Cubic",
          "O(2ⁿ) - Exponential",
        ],
        correctAnswer: [
          "O(1) - Constant",
          "O(log n) - Logarithmic",
          "O(n) - Linear",
          "O(n log n) - Log Linear",
          "O(n²) - Quadratic",
          "O(n³) - Cubic",
          "O(2ⁿ) - Exponential",
        ],
      },
      {
        id: 7,
        question:
          "The time complexity of a particular algorithm is O(n³). Given that it takes 4 seconds to complete the algorithm with 1000 inputs, how long would it take with 10,000 inputs?",
        type: "single",
        options: [
          "400 seconds",
          "16 seconds",
          "4000 seconds",
          "40000 seconds",
          "40 seconds",
        ],
        correctAnswer: "4000 seconds",
      },
      {
        id: 8,
        question:
          "Assume putchar() costs 2 instructions. What is T(N) for strlen(s) assuming N is the length of the string s?\n\nint strlen(char s[]) {\n  int len = 0;\n  for (int i=0; s[i] != '\\0'; ++i)\n    ++len;\n  return len;\n}",
        type: "single",
        options: ["4N + 3", "3N + 3", "5N + 2", "2N + 2", "2N + 3"],
        correctAnswer: "4N + 3",
      },
      {
        id: 9,
        question:
          "Match the Big-O notation for time complexity with the term used to describe it:",
        type: "multiple",
        options: [
          "O(1) = constant time",
          "O(log N) = logarithmic time",
          "O(N) = linear time",
          "O(N log N) = log linear time",
          "O(N²) = quadratic time",
          "O(N³) = cubic time",
          "O(2^N) = exponential time",
          "O(N!) = factorial time",
        ],
        correctAnswer: [
          "O(1) = constant time",
          "O(log N) = logarithmic time",
          "O(N) = linear time",
          "O(N log N) = log linear time",
          "O(N²) = quadratic time",
          "O(N³) = cubic time",
          "O(2^N) = exponential time",
          "O(N!) = factorial time",
        ],
      },
      {
        id: 10,
        question:
          "SELECT ALL the statements that are true about Big O notation:",
        type: "multiple",
        options: [
          "The number of times an array is indexed during execution",
          "The part of T(N) that increases the fastest as n increases",
          "The number of steps or executions in an algorithm",
          "An algorithm's efficiency in a machine-independent way",
          "The number of function calls in an algorithm",
          "The number of seconds needed to execute every instruction on a benchmark machine",
        ],
        correctAnswer: [
          "The part of T(N) that increases the fastest as n increases",
          "An algorithm's efficiency in a machine-independent way",
        ],
      },
    ],
  },
  {
    id: "week2",
    title: "Week 2: Linked Lists and Complexity Analysis",
    description: "Unordered singly-linked lists and algorithm complexity",
    questions: [
      {
        id: 1,
        question:
          "For unordered singly-linked lists, where should insert() place the new item to give constant time performance?",
        type: "single",
        options: [
          "at the end",
          "anywhere, it doesn't matter",
          "in the middle",
          "at the head",
        ],
        correctAnswer: "at the head",
      },
      {
        id: 2,
        question:
          "What is the T(N) of the following statement, using the method explained in Lecture?\n\nfor (int i=0; i<N; ++i)\n  for (int j=0; j<N; ++j)\n    total += i * j;",
        type: "single",
        options: [
          "2N² + 4N + 1",
          "none of the other choices",
          "6N² + 5N + 3",
          "5N² + N + 2",
          "4N² + 3N + 1",
          "3N² + 2N + 2",
        ],
        correctAnswer: "4N² + 3N + 1",
      },
      {
        id: 3,
        question:
          "When implementing the Unordered Linked List ADT, which of the following are true?",
        type: "multiple",
        options: [
          "it will require a helper class for a list node with data and next members",
          "the linked list can be traversed with recursion",
          "the list nodes are not stored consecutively, so traversing the list must be done in sequence",
          "the linked list can be traversed with a for loop",
          "the list nodes will be stored consecutively in memory, allowing array indexing of list elements",
        ],
        correctAnswer: [
          "it will require a helper class for a list node with data and next members",
          "the linked list can be traversed with recursion",
          "the list nodes are not stored consecutively, so traversing the list must be done in sequence",
          "the linked list can be traversed with a for loop",
        ],
      },
      {
        id: 4,
        question:
          "Suppose f(N) = O(h(N)) and g(N) = O(h(N))\n\nIs f(N) + g(N) = O(h(N))?",
        type: "single",
        options: ["no", "yes"],
        correctAnswer: "yes",
      },
      {
        id: 5,
        question:
          "Assuming we have already called find() which gives us the index of an item to remove, for an unordered array list, what is the best time complexity of remove(), which removes a specific item from this list, where N is the length of this list?",
        type: "single",
        options: ["O(N²)", "O(1)", "O(N)", "O(lgN)"],
        correctAnswer: "O(1)",
      },
      {
        id: 6,
        question:
          "Suppose f(N) = O(h(N)) and g(N) = O(h(N))\n\nIs f(N) · g(N) = O(h(N))?",
        type: "single",
        options: ["yes", "no"],
        correctAnswer: "no",
      },
      {
        id: 7,
        question:
          "For an unordered linked list, what is the time complexity of find(), which searches for a specific item in this list, where N is the length of this list?",
        type: "single",
        options: ["O(lgN)", "O(N)", "O(N²)", "O(1)"],
        correctAnswer: "O(N)",
      },
      {
        id: 8,
        question:
          "For an unordered linked list, what is the time complexity of remove(), which removes a specific item from this list, where N is the length of this list?",
        type: "single",
        options: ["O(lgN)", "O(N)", "O(N²)", "O(1)"],
        correctAnswer: "O(N)",
      },
      {
        id: 9,
        question:
          "For an unordered linked list, what is the time complexity of the efficient insert(), which adds a specific item to this list, where N is the length of this list?",
        type: "single",
        options: ["O(lgN)", "O(1)", "O(N)", "O(N²)"],
        correctAnswer: "O(1)",
      },
      {
        id: 10,
        question:
          "For an unordered array list, what is the time complexity of find(), which searches for a specific item from this list, where N is the length of this list?",
        type: "single",
        options: ["O(N)", "O(lgN)", "O(1)", "O(N²)"],
        correctAnswer: "O(N)",
      },
      {
        id: 11,
        question:
          "For an unordered array list, what is the time complexity of the efficient insert(), which adds a specific item to this list, where N is the length of this list?",
        type: "single",
        options: ["O(N²)", "O(lgN)", "O(N)", "O(1)"],
        correctAnswer: "O(1)",
      },
      {
        id: 12,
        question:
          "For unordered linked lists, what algorithm must be used for find(), which finds a given element in this list?",
        type: "single",
        options: [
          "jump search",
          "sequential search",
          "interpolation search",
          "binary search",
        ],
        correctAnswer: "sequential search",
      },
    ],
  },
  {
    id: "week3",
    title: "Week 3: Searching and Sorting Algorithms",
    description: "Bubble sort, binary search, and algorithm efficiency",
    questions: [
      {
        id: 1,
        question: "What is the worst-case execution time of bubble sort?",
        type: "single",
        options: [
          "O(1)",
          "none of the other choices",
          "O(N²)",
          "O(N²lgN)",
          "O(NlgN)",
          "O(N)",
        ],
        correctAnswer: "O(N²)",
      },
      {
        id: 2,
        question:
          "Which of the following statements describe the improvement made to bubble sort in the function another_bubble below?\n\nvoid another_bubble(int a[], int N)\n{\n    int i,j,k;\n    j = N;\n    do {\n        for (i = k = 1; i < j; i++)\n            if (a[i] > a[i+1]) {\n                swap(a[i], a[i+1]);\n                k = i;\n            }\n        j = k;\n    } while (j > 1);\n}",
        type: "single",
        options: [
          "It uses std::swap(), which is faster than using three separate assignment statements.",
          "It swaps multiple values at the same time.",
          "none of the other choices",
          "It decreases the window of swapping to the highest value swapped on the previous pass",
          "It uses recursion.",
        ],
        correctAnswer:
          "It decreases the window of swapping to the highest value swapped on the previous pass",
      },
      {
        id: 3,
        question:
          "SELECT ALL: Why does it not make sense to use the binary search algorithm to find elements in a singly linked list, even if we overload operator[] to count down to the ith node in the list?",
        type: "multiple",
        options: [
          "the midpoint can not be found in constant time",
          "sequential search is O(N), whereas this binary search is O(NlgN) for singly linked list",
          "the lists may be very long",
          "the list is in reverse",
        ],
        correctAnswer: [
          "the midpoint can not be found in constant time",
          "sequential search is O(N), whereas this binary search is O(NlgN) for singly linked list",
        ],
      },
      {
        id: 4,
        question: "SELECT ALL the statements which are true of bubble sort.",
        type: "multiple",
        options: [
          "Typically, swapping two elements in an array requires a temporary storage location (an additional memory location).",
          "Exchange is an efficient operation.",
          "The total number of exchanges is important for evaluating the overall efficiency of the algorithm.",
          "In computer graphics, bubble sort is popular for its capability to detect a very small error (like swap of just two elements) in almost-sorted arrays and fix it with just linear complexity (2n).",
          "The short bubble sort variant can be efficient for the case that the array is already sorted, or mostly sorted.",
        ],
        correctAnswer: [
          "Typically, swapping two elements in an array requires a temporary storage location (an additional memory location).",
          "The total number of exchanges is important for evaluating the overall efficiency of the algorithm.",
          "In computer graphics, bubble sort is popular for its capability to detect a very small error (like swap of just two elements) in almost-sorted arrays and fix it with just linear complexity (2n).",
          "The short bubble sort variant can be efficient for the case that the array is already sorted, or mostly sorted.",
        ],
      },
      {
        id: 5,
        question:
          "What is the worst-case execution time of binary search, given that N is the number of keys in the array?",
        type: "single",
        options: [
          "O(N²)",
          "O(lgN)",
          "none of the other choices",
          "O(N)",
          "O(1)",
          "O(NlgN)",
        ],
        correctAnswer: "O(lgN)",
      },
      {
        id: 6,
        question:
          "What situation might cause binary search to degenerate in performance?",
        type: "single",
        options: [
          "if the keys are all the same value",
          "Nothing, it is O(lgN) no matter what",
          "none of the other choices",
          "if the keys are in ascending order",
          "if the keys are in descending order",
        ],
        correctAnswer: "Nothing, it is O(lgN) no matter what",
      },
      {
        id: 7,
        question:
          "SELECT ALL: Which of the following conditions may allow binary search to be used to find a specific value in the array?",
        type: "multiple",
        options: [
          "the data can be in shuffled/random order",
          "an overloaded operator[] that searches for the Nth element",
          "beforehand the data is sorted in descending order",
          "constant time indexing into the array using an integer index",
          "beforehand the data is sorted in ascending order",
        ],
        correctAnswer: [
          "beforehand the data is sorted in descending order",
          "constant time indexing into the array using an integer index",
          "beforehand the data is sorted in ascending order",
        ],
      },
      {
        id: 8,
        question:
          "SELECT ALL: For binary search, which of the following computes the midpoint between array indices low and high?",
        type: "multiple",
        options: [
          "mid = low + high/2;",
          "mid = (high + low)/2;",
          "mid = low + (high-low)/2;",
          "mid = high - low/2;",
        ],
        correctAnswer: ["mid = (high + low)/2;", "mid = low + (high-low)/2;"],
      },
      {
        id: 9,
        question:
          "SELECT ALL the statements that are true of the methods for Ordered Linked Lists (OLL), in comparison to Unordered Linked Lists (ULL).",
        type: "multiple",
        options: [
          "The search method in OLL in ascending order can be more efficient on average than ULL, because the search can stop if it reaches an item greater than the item to be found.",
          "The method that must be changed most significantly for OLL is remove.",
          "The isEmpty and size methods can be implemented the same as with unordered linked lists, since they deal only with the number of nodes in the linked list without regard to the actual item values.",
          "The add method for ULL is much faster compared to OLL, because it can add the new item where it is most efficient.",
          "The same add method for OLL will work for ULL, since we still need to find the item and then link around the node to add it.",
        ],
        correctAnswer: [
          "The search method in OLL in ascending order can be more efficient on average than ULL, because the search can stop if it reaches an item greater than the item to be found.",
          "The isEmpty and size methods can be implemented the same as with unordered linked lists, since they deal only with the number of nodes in the linked list without regard to the actual item values.",
          "The add method for ULL is much faster compared to OLL, because it can add the new item where it is most efficient.",
        ],
      },
      {
        id: 10,
        question:
          "What property of the binary search algorithm hints that its performance is O(lgN)?",
        type: "single",
        options: [
          "because it has the word binary in its title",
          "At each iteration of the loop, half the remaining possibilities are no longer considered",
          "none of the other choices",
          "because it can be implemented using either a loop or recursion",
        ],
        correctAnswer:
          "At each iteration of the loop, half the remaining possibilities are no longer considered",
      },
      {
        id: 11,
        question:
          "Suppose we implement operator[] for SortedArrayList with a time complexity of O(N), where N is the number of elements in our list. If we then implement binary search using this operator[], what is the time complexity of our binary search?",
        type: "single",
        options: ["O(lgN)", "O(N³)", "O(N)", "O(1)", "O(NlgN)"],
        correctAnswer: "O(NlgN)",
      },
    ],
  },
  {
    id: "week4",
    title: "Week 4: Stacks, Queues and Deques",
    description: "Data structures for storing and processing sequential data",
    questions: [
      {
        id: 1,
        question: "Which operations best suit the stack data structure:",
        type: "single",
        options: [
          "push(), pop(), top()",
          "enq(), deq(), next()",
          "none of the other choices",
          "push(), enq(), deq(), next()",
        ],
        correctAnswer: "push(), pop(), top()",
      },
      {
        id: 2,
        question:
          "Which data structure is appropriate for scheduling execution of threads in a real-time kernel?",
        type: "single",
        options: ["priority queue", "queue", "deque", "bag", "stack"],
        correctAnswer: "priority queue",
      },
      {
        id: 3,
        question:
          'What is the output of the following program?\n\n#include <iostream>\n#include <queue>\nusing namespace std;\n\nint main() {\n  queue<char> H;\n  for (auto c : "ABCDEFG")\n    H.push(c);\n  while (!H.empty()) {\n    cout << H.front();\n    H.pop();\n  }\n  cout << endl;\n}',
        type: "single",
        options: [
          "GFEDCBAABCDEFG",
          "GFEDCBA",
          "nothing",
          "ABCDEFG",
          "none of the other choices",
        ],
        correctAnswer: "ABCDEFG",
      },
      {
        id: 4,
        question:
          "Which describes the order items are entered and removed from a queue data structure?",
        type: "single",
        options: [
          "First In Highest Priority Out",
          "none of the other choices",
          "First In First out (FIFO)",
          "First In Random Out",
          "Last in First Out (LIFO)",
        ],
        correctAnswer: "First In First out (FIFO)",
      },
      {
        id: 5,
        question:
          "Which describes the order items are entered and removed from a stack data structure?",
        type: "single",
        options: [
          "Last in First Out (LIFO)",
          "none of the other choices",
          "First In Highest Priority Out",
          "First In Random Out",
          "First In First out (FIFO)",
        ],
        correctAnswer: "Last in First Out (LIFO)",
      },
      {
        id: 6,
        question: "Which operations best suit the queue data structure:",
        type: "single",
        options: [
          "enq(), deq(), next()",
          "push(), pop(), top()",
          "none of the other choices",
          "push(), enq(), deq(), next()",
        ],
        correctAnswer: "enq(), deq(), next()",
      },
      {
        id: 7,
        question:
          'What is the output of the following program?\n\n#include <iostream>\n#include <stack>\nusing namespace std;\n\nint main() {\n  stack<char> H;\n  for (auto c : "ABCDEFG")\n    H.push(c);\n  while (!H.empty()) {\n    cout << H.top();\n    H.pop();\n  }\n  cout << endl;\n}',
        type: "single",
        options: [
          "nothing",
          "none of the other choices",
          "ABCDEFG",
          "GFEDCBAABCDEFG",
          "GFEDCBA",
        ],
        correctAnswer: "GFEDCBA",
      },
      {
        id: 8,
        question:
          'What is the output of the following program?\n\n#include <iostream>\n#include <queue>\nusing namespace std;\n\nint main() {\n  deque<char> H;\n  for (auto c : "ABCDEFG")\n  {\n    H.push_front(c);\n    H.push_back(c);\n  }\n  while (!H.empty()) {\n    cout << H.front();\n    H.pop_front();\n  }\n  cout << endl;\n}',
        type: "single",
        options: [
          "GFEDCBA",
          "none of the other choices",
          "ABCDEFG",
          "nothing",
          "GFEDCBAABCDEFG",
        ],
        correctAnswer: "GFEDCBAABCDEFG",
      },
      {
        id: 9,
        question:
          "Which data structure is appropriate for storing requests to be processed by a web server?",
        type: "single",
        options: ["stack", "queue", "deque", "bag", "priority queue"],
        correctAnswer: "queue",
      },
      {
        id: 10,
        question:
          "If we are using a singly linked list to implement a queue, and adding a tail pointer in addition to a head pointer, which end (head or tail) of the linked list should be the front (for deque()), and which end should be the rear (for enque())?",
        type: "single",
        options: [
          "head for tail, front for back",
          "head for front, tail for back",
          "back for front, tail for head",
          "head for back, tail for front",
          "tail for front, head for back",
        ],
        correctAnswer: "head for front, tail for back",
      },
      {
        id: 11,
        question: "Which operations best suit the deque data structure:",
        type: "single",
        options: [
          "enq(), deq(), next()",
          "push(), enq(), deq(), next()",
          "none of the other choices",
          "push(), pop(), top()",
        ],
        correctAnswer: "push(), enq(), deq(), next()",
      },
      {
        id: 12,
        question:
          "Which data structure is appropriate for implementing a browser back button?",
        type: "single",
        options: ["deque", "bag", "stack", "priority queue", "queue"],
        correctAnswer: "stack",
      },
    ],
  },
  {
    id: "week5",
    title: "Week 5: Hash Tables",
    description: "Chained hash tables, open addressing, and hash functions",
    questions: [
      {
        id: 1,
        question: "What is special about a chained hash table?",
        type: "single",
        options: [
          "none of the other choices",
          "it allows multiple keys stored in a list at each table slot",
          "it has a fixed number of table slots",
          "it stores keys in an array",
          "it uses a binary search tree to store keys in each table slot",
        ],
        correctAnswer:
          "it allows multiple keys stored in a list at each table slot",
      },
      {
        id: 2,
        question:
          "What happens when the load factor of a chained hash table increases?",
        type: "single",
        options: [
          "The size of the hash table decreases",
          "none of the other choices",
          "The number of collisions decreases",
          "The number of collisions increases",
          "The size of the hash table increases",
        ],
        correctAnswer: "The number of collisions increases",
      },
      {
        id: 3,
        question:
          "Which of the following is an advantage of using a chained hash table over an open-addressed hash table?",
        type: "single",
        options: [
          "Less memory usage",
          "Faster retrieval time",
          "Lower maximum load factor",
          "No need for collision resolution",
          "none of the other choices",
        ],
        correctAnswer: "No need for collision resolution",
      },
      {
        id: 4,
        question:
          "Which of the following data structures is often used to implement the chains in a chained hash table?",
        type: "single",
        options: [
          "Array",
          "Linked list",
          "Binary search tree",
          "none of the other choices",
          "Stack",
        ],
        correctAnswer: "Linked list",
      },
      {
        id: 5,
        question:
          "What is a collision in the context of hash functions for string keys?",
        type: "single",
        options: [
          "none of the other choices",
          "when sorting strings in lexicographic order",
          "when counting duplicate characters in a string",
          "when multiple keys map to the same integer value",
          "when multiple integer values map to the same string key",
        ],
        correctAnswer: "when multiple keys map to the same integer value",
      },
      {
        id: 6,
        question:
          "Which distribution of keys from a hash function will give the best performance in a hash table?",
        type: "single",
        options: ["random", "poisson", "uniform", "chi-squared", "normal"],
        correctAnswer: "uniform",
      },
      {
        id: 7,
        question:
          "What is the average time complexity for inserting a key in a chained hash table (given n is the number of keys and m is the table size)?",
        type: "single",
        options: [
          "O(m)",
          "none of the other choices",
          "O(log n)",
          "O(1)",
          "O(n)",
        ],
        correctAnswer: "O(1)",
      },
      {
        id: 8,
        question:
          "Why is a string hash function that multiplies all the ASCII codes together a poor choice?",
        type: "single",
        options: [
          "expensive to compute",
          "common factors result in excessive collisions at non-prime table slots",
          "strings with common prefixes will hash to the same table slot",
          "none of the other choices",
        ],
        correctAnswer:
          "common factors result in excessive collisions at non-prime table slots",
      },
      {
        id: 9,
        question:
          "What is an advantage of using open addressing with linear probing for a hash table compared to using a chained hash table?",
        type: "multiple",
        options: [
          "uses less memory",
          "none of the other answers",
          "simpler to implement",
          "works well when the table is sufficiently large",
        ],
        correctAnswer: [
          "uses less memory",
          "simpler to implement",
          "works well when the table is sufficiently large",
        ],
      },
      {
        id: 10,
        question:
          "Which of the following is an advantage of using a chained hash table over an array-only implementation?",
        type: "single",
        options: [
          "Lower memory usage",
          "none of the other choices",
          "No clustering of keys",
          "Faster retrieval time",
          "Easier implementation",
        ],
        correctAnswer: "No clustering of keys",
      },
      {
        id: 11,
        question:
          "Which of the following factors can affect the quality of a hash function for keys that are character strings?",
        type: "multiple",
        options: [
          "Common prefixes in the strings",
          "The strings being too short",
          "Common suffixes in the strings",
          "none of the other choices",
        ],
        correctAnswer: [
          "Common prefixes in the strings",
          "The strings being too short",
          "Common suffixes in the strings",
        ],
      },
      {
        id: 12,
        question:
          "What is the load factor of a chained hash table with n keys and m slots?",
        type: "single",
        options: ["m * n", "n/m", "none of the other choices", "n^m", "m/n"],
        correctAnswer: "n/m",
      },
      {
        id: 13,
        question:
          "Which of the following is an advantage of using a hash table for strings over a sequential search?",
        type: "single",
        options: [
          "Faster worst-case time complexity",
          "Better handling of duplicate strings",
          "Lower memory usage",
          "Easier implementation",
          "none of the other choices",
        ],
        correctAnswer: "Faster worst-case time complexity",
      },
      {
        id: 14,
        question:
          "Why are prime number table sizes used for hash table using open addressing?",
        type: "single",
        options: [
          "to avoid bias when wrapping the table size with modulo",
          "none of the other choices",
          "hash functions are faster to compute with prime numbers",
          "to keep the tables smaller than necessary",
        ],
        correctAnswer: "to avoid bias when wrapping the table size with modulo",
      },
      {
        id: 15,
        question:
          "What is the space complexity of a chained hash table with n keys and m slots?",
        type: "single",
        options: [
          "O(n * m)",
          "O(n + m)",
          "O(n)",
          "none of the other choices",
          "O(m)",
        ],
        correctAnswer: "O(n + m)",
      },
      {
        id: 16,
        question: "What is a hash function for strings?",
        type: "single",
        options: [
          "A function that sorts strings in lexicographic order",
          "A function that maps strings to integers",
          "A function that searches for patterns in strings",
          "none of the other choices",
          "A function that counts the number of characters in a string",
        ],
        correctAnswer: "A function that maps strings to integers",
      },
      {
        id: 17,
        question:
          "What is the worst-case time complexity for searching a key in a chained hash table where n is the number of keys and m is the number of slots in the table?",
        type: "single",
        options: [
          "O(m)",
          "O(log n)",
          "none of the other choices",
          "O(1)",
          "O(n)",
        ],
        correctAnswer: "O(n)",
      },
      {
        id: 18,
        question:
          "Which of the following is a requirement for a good hash function for strings?",
        type: "single",
        options: [
          "It should always map a given string to same integer",
          "It should map different strings to the same integer value",
          "It should map similar strings to the same integer values",
          "none of the other choices",
          "It should be case-sensitive",
        ],
        correctAnswer: "It should always map a given string to same integer",
      },
      {
        id: 19,
        question:
          "Which of the following is/are disadvantage(s) of using open addressing with linear probing for a hash table compared to using a chained hash table?",
        type: "multiple",
        options: [
          "uses more memory",
          "none of the other choices",
          "harder to implement",
          "degrades with primary clustering",
        ],
        correctAnswer: ["degrades with primary clustering"],
      },
      {
        id: 20,
        question:
          "Which of the following can cause a chained hash table to degenerate in performance?",
        type: "single",
        options: [
          "hash table too small for the number of keys",
          "hash table too large for the number of keys",
          "a table of size equal to N/10 where N is the estimate of the most keys ever inserted",
          "none of the other choices",
        ],
        correctAnswer: "hash table too small for the number of keys",
      },
    ],
  },
];
