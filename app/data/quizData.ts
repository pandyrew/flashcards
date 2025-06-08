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
    id: "practiceProblems",
    title: "Practice Problems",
    description:
      "Code tracing, error detection, hashing, and time complexity exercises",
    questions: [
      {
        id: 1,
        question:
          "What will be the output of this code?\n\n#include <iostream>\nusing namespace std;\n\nint main() {\n  int arr[] = {1, 2, 3, 4, 5};\n  int* ptr = arr;\n  *(ptr + 3) = 9;\n  cout << arr[3] << ' ' << *(ptr + 2);\n  return 0;\n}",
        type: "single",
        options: ["9 3", "4 3", "9 9", "4 9", "3 9"],
        correctAnswer: "9 3",
      },
      {
        id: 2,
        question:
          "What will be the output of this code?\n\n#include <iostream>\nusing namespace std;\n\nint main() {\n  int n = 5;\n  int sum = 0;\n  for (int i = 1; i <= n; i++) {\n    for (int j = 1; j <= i; j++) {\n      sum++;\n    }\n  }\n  cout << sum;\n  return 0;\n}",
        type: "single",
        options: ["5", "15", "25", "10", "20"],
        correctAnswer: "15",
      },
      {
        id: 3,
        question:
          "What error exists in this hash table implementation?\n\nclass HashTable {\nprivate:\n  static const int TABLE_SIZE = 10;\n  list<int> table[TABLE_SIZE];\n\npublic:\n  int hashFunction(int key) {\n    return key % TABLE_SIZE;\n  }\n\n  void insertItem(int key) {\n    int index = hashFunction(key);\n    table[index].push_back(key);\n  }\n\n  void deleteItem(int key) {\n    int index = hashFunction(key);\n    table[index].remove(key);\n  }\n\n  bool searchItem(int key) {\n    int index = hashFunction(key);\n    for (int x : table[index]) {\n      if (x == key)\n        return true;\n    }\n    return false;\n  }\n};",
        type: "single",
        options: [
          "The hashFunction is not using a prime number for modulo",
          "The table size is too small for efficient hashing",
          "The searchItem function should return the index, not a boolean",
          "The deleteItem function doesn't check if the key exists before removing it",
          "There is no error in this implementation",
        ],
        correctAnswer:
          "The hashFunction is not using a prime number for modulo",
      },
      {
        id: 4,
        question:
          'What will be the output of this code?\n\n#include <iostream>\n#include <stack>\nusing namespace std;\n\nint main() {\n  stack<int> s;\n  s.push(1);\n  s.push(2);\n  s.push(3);\n  s.pop();\n  s.push(4);\n  s.push(5);\n  s.pop();\n  \n  while (!s.empty()) {\n    cout << s.top() << " ";\n    s.pop();\n  }\n  \n  return 0;\n}',
        type: "single",
        options: ["1 2 3 4", "4 2 1", "5 4 3 2 1", "1 2 4", "4 3 2 1"],
        correctAnswer: "4 2 1",
      },
      {
        id: 5,
        question:
          "What is the time complexity of the following function?\n\nint countElements(vector<int>& arr, int target) {\n  int count = 0;\n  for (int i = 0; i < arr.size(); i++) {\n    for (int j = i + 1; j < arr.size(); j++) {\n      if (arr[i] + arr[j] == target) {\n        count++;\n      }\n    }\n  }\n  return count;\n}",
        type: "single",
        options: ["O(n)", "O(n log n)", "O(n²)", "O(2n)", "O(n³)"],
        correctAnswer: "O(n²)",
      },
      {
        id: 6,
        question:
          "What will be the output of this code?\n\n#include <iostream>\n#include <queue>\nusing namespace std;\n\nint main() {\n  queue<char> q;\n  q.push('A');\n  q.push('B');\n  q.push('C');\n  q.pop();\n  q.push('D');\n  q.push('E');\n  q.pop();\n  \n  while (!q.empty()) {\n    cout << q.front();\n    q.pop();\n  }\n  \n  return 0;\n}",
        type: "single",
        options: ["ABCDE", "CDE", "ABC", "EDCBA", "BCDE"],
        correctAnswer: "CDE",
      },
      {
        id: 7,
        question:
          "What is wrong with this code for a binary search?\n\nint binarySearch(int arr[], int size, int target) {\n  int left = 0;\n  int right = size;\n  \n  while (left <= right) {\n    int mid = (left + right) / 2;\n    \n    if (arr[mid] == target)\n      return mid;\n    \n    if (arr[mid] < target)\n      left = mid + 1;\n    else\n      right = mid - 1;\n  }\n  \n  return -1;\n}",
        type: "single",
        options: [
          "The calculation of mid can cause integer overflow for large arrays",
          "The initial value of right should be size-1, not size",
          "The while condition should be left < right, not left <= right",
          "The right = mid - 1 statement should be right = mid",
          "The left = mid + 1 statement should be left = mid",
        ],
        correctAnswer: "The initial value of right should be size-1, not size",
      },
      {
        id: 8,
        question:
          "What is the time complexity of inserting a node at the beginning of a singly linked list?",
        type: "single",
        options: ["O(1)", "O(n)", "O(log n)", "O(n log n)", "O(n²)"],
        correctAnswer: "O(1)",
      },
      {
        id: 9,
        question:
          'What will be the output of this code?\n\n#include <iostream>\nusing namespace std;\n\nint main() {\n  int array[5] = {10, 20, 30, 40, 50};\n  int *p = array;\n  \n  cout << *p++ << " ";\n  cout << *p << " ";\n  cout << *(p+2) << " ";\n  p = array + 4;\n  cout << *p-- << " ";\n  cout << *p << " ";\n  \n  return 0;\n}',
        type: "single",
        options: [
          "10 20 40 50 40",
          "10 20 30 50 40",
          "10 50 40 40 50",
          "10 20 40 40 30",
          "20 30 50 50 40",
        ],
        correctAnswer: "10 20 40 50 40",
      },
      {
        id: 10,
        question:
          "Which of the following hash functions for strings would provide the most uniform distribution for table slots?",
        type: "single",
        options: [
          "Return the sum of ASCII values of all characters",
          "Return the ASCII value of the first character",
          "Return the product of ASCII values of all characters",
          "Return the sum of ASCII values multiplied by powers of a prime number (polynomial rolling hash)",
          "Return the ASCII value of the last character",
        ],
        correctAnswer:
          "Return the sum of ASCII values multiplied by powers of a prime number (polynomial rolling hash)",
      },
      {
        id: 11,
        question:
          'What will be the output of this code?\n\n#include <iostream>\nusing namespace std;\n\nvoid modify(int arr[], int size) {\n  for (int i = 0; i < size; i++) {\n    arr[i] = arr[i] * 2;\n  }\n  size = size - 1;\n}\n\nint main() {\n  int numbers[] = {1, 2, 3, 4, 5};\n  int size = 5;\n  \n  modify(numbers, size);\n  \n  cout << "Size: " << size << endl;\n  for (int i = 0; i < size; i++) {\n    cout << numbers[i] << " ";\n  }\n  \n  return 0;\n}',
        type: "single",
        options: [
          "Size: 4\n2 4 6 8",
          "Size: 5\n2 4 6 8 10",
          "Size: 4\n1 2 3 4",
          "Size: 5\n1 2 3 4 5",
          "Size: 4\n2 4 6 8 10",
        ],
        correctAnswer: "Size: 5\n2 4 6 8 10",
      },
      {
        id: 12,
        question:
          "What is the error in this bubble sort implementation?\n\nvoid bubbleSort(int arr[], int n) {\n  for (int i = 0; i < n - 1; i++) {\n    for (int j = 0; j < n - 1; j++) {\n      if (arr[j] > arr[j + 1]) {\n        int temp = arr[j];\n        arr[j] = arr[j + 1];\n        arr[j + 1] = temp;\n      }\n    }\n  }\n}",
        type: "single",
        options: [
          "The swap implementation is incorrect",
          "The inner loop should run for (n-i-1) iterations instead of (n-1)",
          "The outer loop should run for n iterations instead of (n-1)",
          "The if condition should be arr[j] < arr[j+1] for ascending order",
          "There is no error in this implementation",
        ],
        correctAnswer:
          "The inner loop should run for (n-i-1) iterations instead of (n-1)",
      },
      {
        id: 13,
        question:
          "What is the load factor of a hash table with 120 elements and 200 slots?",
        type: "single",
        options: ["0.6", "1.67", "0.4", "1.2", "2.0"],
        correctAnswer: "0.6",
      },
      {
        id: 14,
        question:
          "What is the error in this function that is supposed to find the maximum value in an array?\n\nint findMax(int arr[], int size) {\n  int max = 0;\n  \n  for (int i = 0; i < size; i++) {\n    if (arr[i] > max) {\n      max = arr[i];\n    }\n  }\n  \n  return max;\n}",
        type: "single",
        options: [
          "The loop should start from index 1, not 0",
          "The max variable should be initialized to arr[0], not 0",
          "The function returns the index of the maximum value, not the value itself",
          "The loop condition should be i <= size instead of i < size",
          "There is no error in this implementation",
        ],
        correctAnswer:
          "The max variable should be initialized to arr[0], not 0",
      },
      {
        id: 15,
        question:
          "SELECT ALL that represent valid implementations of a hash table to handle collisions:",
        type: "multiple",
        options: [
          "Chaining (linked lists at each slot)",
          "Linear probing",
          "Quadratic probing",
          "Double hashing",
          "Binary search trees",
        ],
        correctAnswer: [
          "Chaining (linked lists at each slot)",
          "Linear probing",
          "Quadratic probing",
          "Double hashing",
          "Binary search trees",
        ],
      },
      {
        id: 16,
        question:
          "What time complexity does hash table search have in the average case?",
        type: "single",
        options: ["O(1)", "O(n)", "O(log n)", "O(n log n)", "O(n²)"],
        correctAnswer: "O(1)",
      },
      {
        id: 17,
        question:
          "What will be the output of this code?\n\n#include <iostream>\nusing namespace std;\n\nint main() {\n  int count = 0;\n  int n = 64;\n  \n  while (n > 0) {\n    n = n / 2;\n    count++;\n  }\n  \n  cout << count;\n  return 0;\n}",
        type: "single",
        options: ["6", "7", "8", "5", "32"],
        correctAnswer: "7",
      },
      {
        id: 18,
        question:
          "Which of the following will cause a time complexity of O(n²) in a hash table with n elements?",
        type: "single",
        options: [
          "Using a hash function that distributes keys uniformly",
          "Having a load factor of 0.5",
          "Using linear probing with a poor hash function causing clustering",
          "Using chaining with linked lists",
          "Resizing the hash table when the load factor exceeds 0.75",
        ],
        correctAnswer:
          "Using linear probing with a poor hash function causing clustering",
      },
      {
        id: 19,
        question:
          'What will be the output of this code?\n\n#include <iostream>\n#include <deque>\nusing namespace std;\n\nint main() {\n  deque<int> dq;\n  dq.push_back(10);\n  dq.push_front(20);\n  dq.push_back(30);\n  dq.pop_front();\n  dq.push_front(40);\n  \n  cout << dq.front() << " " << dq.back() << " " << dq.size();\n  return 0;\n}',
        type: "single",
        options: ["40 30 3", "10 30 3", "20 30 3", "40 10 3", "10 40 3"],
        correctAnswer: "40 30 3",
      },
      {
        id: 20,
        question:
          "What is the worst-case time complexity for finding an element in a singly linked list with n nodes?",
        type: "single",
        options: ["O(1)", "O(n)", "O(log n)", "O(n log n)", "O(n²)"],
        correctAnswer: "O(n)",
      },
    ],
  },
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
  {
    id: "week6",
    title: "Week 6: Binary Search Trees and AVL Trees",
    description: "Traversals, balancing, and operations on BSTs and AVL trees",
    questions: [
      {
        id: 1,
        question:
          "In which traversal does the node visitation order follow the pattern 'left subtree - right subtree - root'?",
        type: "single",
        options: [
          "Pre-order traversal",
          "In-order traversal",
          "Post-order traversal",
          "none of the other choices",
        ],
        correctAnswer: "Post-order traversal",
      },
      {
        id: 2,
        question:
          "In which traversal does the node visitation order follow the pattern 'left subtree - root - right subtree'?",
        type: "single",
        options: [
          "Post-order traversal",
          "none of the other choices",
          "In-order traversal",
          "Pre-order traversal",
        ],
        correctAnswer: "In-order traversal",
      },
      {
        id: 3,
        question:
          "What is the worst-case time complexity for inserting a node into a simple unbalanced binary search tree with n nodes?",
        type: "single",
        options: ["O(2^n)", "O(n^2)", "O(log n)", "O(n)"],
        correctAnswer: "O(n)",
      },
      {
        id: 4,
        question:
          "What is a common cause of a binary search tree becoming unbalanced and degrading in performance?",
        type: "single",
        options: [
          "Inserting new nodes at random positions in the tree",
          "Inserting nodes in a pre-order traversal instead of an in-order traversal",
          "none of the other choices",
          "Inserting nodes with values that are already present in the tree",
          "Inserting nodes with values that are sorted in ascending or descending order",
        ],
        correctAnswer:
          "Inserting nodes with values that are sorted in ascending or descending order",
      },
      {
        id: 5,
        question:
          "What is the worst-case time complexity for finding a node in an AVL self-balancing binary search tree with n nodes?",
        type: "single",
        options: [
          "O(log n)",
          "O(2^n)",
          "O(n^2)",
          "O(n)",
          "none of the other choices",
        ],
        correctAnswer: "O(log n)",
      },
      {
        id: 6,
        question:
          "What is a common technique for improving the performance of a binary search tree that has become unbalanced?",
        type: "single",
        options: [
          "Rebuilding the tree from scratch",
          "none of the other choices",
          "Adding more nodes with values that are already present in the tree",
          "Removing nodes with values that are already present in the tree",
          "Rotating a group of nodes in the tree to balance it out",
        ],
        correctAnswer:
          "Rotating a group of nodes in the tree to balance it out",
      },
      {
        id: 7,
        question:
          "When removing a node with two children in a binary search tree, what is the standard approach for replacing it?",
        type: "single",
        options: [
          "Remove the node and its two children, and add the children to the parent node's children list",
          "none of the other choices",
          "Replace the node with its in-order successor, and recursively remove the successor node from its original position",
          "Replace the node with its left child, and attach its right subtree as the left child's right subtree",
          "Replace the node with its right child, and attach its left subtree as the right child's left subtree",
        ],
        correctAnswer:
          "Replace the node with its in-order successor, and recursively remove the successor node from its original position",
      },
      {
        id: 8,
        question:
          "Which traversal is commonly used for evaluating arithmetic expressions represented by binary trees?",
        type: "single",
        options: [
          "none of the other choices",
          "Post-order traversal",
          "In-order traversal",
          "Pre-order traversal",
          "Level-order traversal",
        ],
        correctAnswer: "Post-order traversal",
      },
      {
        id: 9,
        question:
          "When inserting a new node into a binary search tree, where should the new node be placed?",
        type: "single",
        options: [
          "none of the other choices",
          "To the right of a node with a smaller value, and to the left of a node with a larger value",
          "At the leftmost empty spot in the tree",
          "Always as the root of the tree",
          "To the left of a node with a larger key, and to the right of a node with a smaller key",
        ],
        correctAnswer:
          "To the left of a node with a larger key, and to the right of a node with a smaller key",
      },
      {
        id: 10,
        question:
          "What is the height difference limit between the left and right subtrees of any node in an AVL tree?",
        type: "single",
        options: ["0", "2", "3", "none of the other choices", "1"],
        correctAnswer: "1",
      },
      {
        id: 11,
        question:
          "What operation is used to rebalance an AVL tree after an insertion or deletion operation?",
        type: "multiple",
        options: [
          "Double left rotation",
          "Double right rotation",
          "none of the other choices",
          "Right rotation",
          "Left rotation",
        ],
        correctAnswer: [
          "Double left rotation",
          "Double right rotation",
          "Right rotation",
          "Left rotation",
        ],
      },
      {
        id: 12,
        question:
          "Which traversal is commonly used for calculating the height of a binary tree?",
        type: "single",
        options: [
          "none of the other choices",
          "Post-order traversal",
          "In-order traversal",
          "Pre-order traversal",
          "Level-order traversal",
        ],
        correctAnswer: "Post-order traversal",
      },
      {
        id: 13,
        question:
          "In which traversal does the node visitation order follow the pattern 'root - left subtree - right subtree'?",
        type: "single",
        options: [
          "none of the other choices",
          "Pre-order traversal",
          "In-order traversal",
          "Post-order traversal",
        ],
        correctAnswer: "Pre-order traversal",
      },
      {
        id: 14,
        question:
          "In a binary search tree, how is a node found with a specific key?",
        type: "single",
        options: [
          "none of the other choices",
          "Start at the root and traverse the tree in a post-order traversal until the node is found",
          "Start at the root and traverse the tree in a pre-order traversal until the node is found",
          "Start at the root and traverse the tree in a random order until the node is found",
          "Start at the root and traverse the tree down a path using less than and greater than to compare key with a node's key until the node is found",
        ],
        correctAnswer:
          "Start at the root and traverse the tree down a path using less than and greater than to compare key with a node's key until the node is found",
      },
      {
        id: 15,
        question:
          "What is the worst-case time complexity for inserting a node into a self-balancing binary tree with n nodes?",
        type: "single",
        options: [
          "O(n)",
          "none of the other choices",
          "O(2^n)",
          "O(n^2)",
          "O(log n)",
        ],
        correctAnswer: "O(log n)",
      },
    ],
  },
  {
    id: "week7",
    title: "Week 7: Sorting Algorithms",
    description: "Sorting algorithms, properties, and time complexities.",
    questions: [
      {
        id: 1,
        question: "Quick Sort has a worst-case time complexity of O(n²) when:",
        type: "single",
        options: [
          "The input array is very large",
          "The input array is randomly shuffled",
          "none of the other choices",
          "The pivot element chosen during partitioning always divides the array into two sub-arrays of extremely uneven size",
          "The input array contains many duplicate elements",
        ],
        correctAnswer:
          "The pivot element chosen during partitioning always divides the array into two sub-arrays of extremely uneven size",
      },
      {
        id: 2,
        question:
          "What is an advantage of Quick Sort over other sorting algorithms?",
        type: "single",
        options: [
          "It is the fastest general purpose sort in practice",
          "It is more memory efficient than Heap Sort",
          "It is a stable sorting algorithm",
          "It is easy to implement and understand",
          "none of the other choices",
        ],
        correctAnswer: "It is the fastest general purpose sort in practice",
      },
      {
        id: 3,
        question: "Merge Sort is a sorting algorithm that:",
        type: "single",
        options: [
          "Divides the input array into two nearly equal subarrays, recursively sorts them, and then merges the sorted subarrays to produce a sorted output",
          "none of the other choices",
          "Uses extra space of O(n²)",
          "Is an in-place sorting algorithm",
        ],
        correctAnswer:
          "Divides the input array into two nearly equal subarrays, recursively sorts them, and then merges the sorted subarrays to produce a sorted output",
      },
      {
        id: 4,
        question:
          "One reason why Quick Sort can have a variable time complexity is that:",
        type: "single",
        options: [
          "none of the other choices",
          "It has a non-deterministic runtime behavior that depends on the hardware and software environment",
          "It depends on the initial order of the input array and the pivot selection strategy",
          "It is an adaptive sorting algorithm that changes its strategy based on the input array",
        ],
        correctAnswer:
          "It depends on the initial order of the input array and the pivot selection strategy",
      },
      {
        id: 5,
        question: "Selection Sort is a sorting algorithm that:",
        type: "single",
        options: [
          "Repeatedly finds the smallest element in the unsorted portion of the array and moves it to the end of the sorted portion",
          "Is an in-place sorting algorithm",
          "none of the other choices",
          "Always has a worst-case time complexity of O(n log n)",
          "Is a stable sorting algorithm",
        ],
        correctAnswer:
          "Repeatedly finds the smallest element in the unsorted portion of the array and moves it to the end of the sorted portion",
      },
      {
        id: 6,
        question: "Shell Sort is particularly effective when:",
        type: "single",
        options: [
          "The input array is partially sorted or nearly sorted",
          "The input array contains a lot of duplicate elements",
          "The input array is already sorted",
          "The input array is very large",
          "none of the other choices",
        ],
        correctAnswer: "The input array is partially sorted or nearly sorted",
      },
      {
        id: 7,
        question:
          "To mitigate the risk of Quick Sort having a worst-case time complexity of O(n²), one can:",
        type: "single",
        options: [
          "Sort small sub-arrays using Insertion Sort instead of Quick Sort",
          "Increase the number of recursive calls to the sorting function",
          "Use a stable sorting algorithm instead of Quick Sort",
          "none of the other choices",
          "Use randomized or median-of-three pivot selection",
        ],
        correctAnswer: "Use randomized or median-of-three pivot selection",
      },
      {
        id: 8,
        question: "Bubble Sort is a sorting algorithm that:",
        type: "single",
        options: [
          "Is often the default sort routine in many programming languages",
          "Is one of the fastest sorts",
          "none of the other choices",
          "Swaps adjacent elements that are out of order",
          "Always has a worst-case time complexity of O(n log n)",
        ],
        correctAnswer: "Swaps adjacent elements that are out of order",
      },
      {
        id: 9,
        question: "What is the worst-case time complexity of Merge Sort?",
        type: "single",
        options: [
          "O(1)",
          "O(n)",
          "O(n log n)",
          "O(n²)",
          "none of the other choices",
        ],
        correctAnswer: "O(n log n)",
      },
      {
        id: 10,
        question:
          "When selecting the median of three to use as the pivot in Quick Sort, the three elements should be chosen:",
        type: "single",
        options: [
          "From the middle and two adjacent elements in the partition",
          "none of the other choices",
          "Randomly from the partition",
          "From the beginning, middle, and end of the partition",
          "From the largest, smallest, and middle values in the partition",
        ],
        correctAnswer: "From the beginning, middle, and end of the partition",
      },
      {
        id: 11,
        question:
          "Insertion Sort is generally considered an efficient sorting algorithm when:",
        type: "single",
        options: [
          "The input array is very large",
          "none of the other choices",
          "The input array is reverse sorted",
          "The input array contains a lot of duplicate elements",
          "The input array is partially sorted or nearly sorted",
        ],
        correctAnswer: "The input array is partially sorted or nearly sorted",
      },
      {
        id: 12,
        question: "Insertion Sort is a sorting algorithm that:",
        type: "single",
        options: [
          "Always has a worst-case time complexity of O(n log n)",
          "Is an in-place sorting algorithm",
          "none of the other choices",
          "Builds the final sorted array one item at a time by inserting each unsorted element into its proper place",
          "Is a stable sorting algorithm",
        ],
        correctAnswer:
          "Builds the final sorted array one item at a time by inserting each unsorted element into its proper place",
      },
      {
        id: 13,
        question: "In-place sorting algorithms are useful in situations where:",
        type: "single",
        options: [
          "The input array is already sorted",
          "The input array is very large",
          "Memory usage is limited",
          "none of the other choices",
          "The input array is very small",
        ],
        correctAnswer: "Memory usage is limited",
      },
      {
        id: 14,
        question:
          "When would you choose a stable sorting algorithm over an unstable sorting algorithm?",
        type: "single",
        options: [
          "When you need to sort data in parallel",
          "When you need to sort data in reverse order",
          "none of the other choices",
          "When you need to sort large data sets quickly",
          "When you need to maintain the relative order of equal elements in the sorted output",
        ],
        correctAnswer:
          "When you need to maintain the relative order of equal elements in the sorted output",
      },
      {
        id: 15,
        question: "Quick Sort is a sorting algorithm that:",
        type: "single",
        options: [
          "none of the other choices",
          "Always has a worst-case time complexity of O(n log n)",
          "Is an in-place sorting algorithm",
          "Is based on the Divide and Conquer paradigm and partitions the input array into smaller sub-arrays to sort",
          "Is a stable sorting algorithm",
        ],
        correctAnswer:
          "Is based on the Divide and Conquer paradigm and partitions the input array into smaller sub-arrays to sort",
      },
      {
        id: 16,
        question:
          "Which of the following sorting algorithms is NOT a stable sorting algorithm?",
        type: "single",
        options: [
          "Bubble Sort",
          "Quick Sort",
          "none of the other choices",
          "Merge Sort",
        ],
        correctAnswer: "Quick Sort",
      },
      {
        id: 17,
        question: "Shell Sort is a sorting algorithm that:",
        type: "single",
        options: [
          "Always has a worst-case time complexity of O(n log n)",
          "Is based on the Insertion Sort algorithm but divides the input array into smaller subarrays before sorting",
          "none of the other choices",
          "Is rarely used because it has a strange name",
        ],
        correctAnswer:
          "Is based on the Insertion Sort algorithm but divides the input array into smaller subarrays before sorting",
      },
      {
        id: 18,
        question: "What is the worst-case time complexity of Bubble Sort?",
        type: "single",
        options: [
          "O(n)",
          "none of the other choices",
          "O(1)",
          "O(n log n)",
          "O(n²)",
        ],
        correctAnswer: "O(n²)",
      },
      {
        id: 19,
        question:
          "Selection Sort is generally not considered an efficient sorting algorithm because:",
        type: "single",
        options: [
          "It always takes O(n²) space to sort an array",
          "It requires extra memory to store intermediate results",
          "It is slow even for small arrays",
          "none of the other choices",
          "It is not a stable sorting algorithm",
        ],
        correctAnswer: "It is slow even for small arrays",
      },
      {
        id: 20,
        question:
          "In Quick Sort, selecting the pivot element as the median of three randomly chosen elements in the array can help to:",
        type: "single",
        options: [
          "Guarantee that the algorithm will sort the array in descending order",
          "Ensure that the pivot element is always the largest element in the array",
          "Avoid O(n²) worst-case time complexity scenarios",
          "Reduce the memory usage of the algorithm",
          "none of the other choices",
        ],
        correctAnswer: "Avoid O(n²) worst-case time complexity scenarios",
      },
      {
        id: 21,
        question:
          "Which of the following sorting algorithms has a worst-case time complexity of O(n log n)?",
        type: "single",
        options: [
          "Bogo Sort",
          "Selection Sort",
          "Heap Sort",
          "Stooge Sort",
          "none of the other choices",
        ],
        correctAnswer: "Heap Sort",
      },
      {
        id: 22,
        question:
          "What is a disadvantage of Quick Sort compared to other sorting algorithms?",
        type: "single",
        options: [
          "It is not an in-place sorting algorithm",
          "none of the other choices",
          "It requires additional memory proportional to the size of the input array",
          "It may have a worst-case time complexity of O(n²) if the input array is already sorted or nearly sorted",
          "It is not suitable for large datasets",
        ],
        correctAnswer:
          "It may have a worst-case time complexity of O(n²) if the input array is already sorted or nearly sorted",
      },
      {
        id: 23,
        question:
          "Which of the following sorting algorithms is an in-place sorting algorithm?",
        type: "single",
        options: [
          "Radix Sort",
          "Merge Sort",
          "Quick Sort",
          "Counting Sort",
          "none of the other choices",
        ],
        correctAnswer: "Quick Sort",
      },
      {
        id: 24,
        question:
          "Merge Sort is generally preferred over other sorting algorithms when:",
        type: "single",
        options: [
          "The input array contains many duplicate elements",
          "none of the other choices",
          "The input array is already sorted",
          "The input array is partially sorted or nearly sorted",
          "Teaching CS students about recursion",
        ],
        correctAnswer: "Teaching CS students about recursion",
      },
      {
        id: 25,
        question: "What is the worst-case time complexity of Bubble Sort?",
        type: "single",
        options: [
          "O(n²)",
          "none of the other choices",
          "O(n log n)",
          "O(1)",
          "O(n)",
        ],
        correctAnswer: "O(n²)",
      },
    ],
  },
  {
    id: "week8",
    title: "Week 8: Graphs",
    description: "Graph theory, representations, and algorithms",
    questions: [
      {
        id: 1,
        question:
          "Which of the following scenario(s) best exemplify(ies) the application of Topological Sort?",
        type: "multiple",
        options: [
          "Routing wire in a house",
          "none of the other choices",
          "Playing two-player chess",
          "Prerequisite course selection",
          "Pancake preparation",
          "Module coding and testing",
        ],
        correctAnswer: [
          "Prerequisite course selection",
          "Pancake preparation",
          "Module coding and testing",
        ],
      },
      {
        id: 2,
        question:
          "When is it better to use an Adjacency Matrix representation rather than an Adjacency List representation to represent a graph?",
        type: "single",
        options: [
          "When the graph has a small number of vertices.",
          "none of the other choices",
          "When the graph is sparse and has relatively few edges.",
          "When efficient edge traversal is a primary concern.",
          "When the graph is dense and has many edges.",
        ],
        correctAnswer: "When the graph is dense and has many edges.",
      },
      {
        id: 3,
        question:
          "A fundamental part of a graph, also called a node, may have a name called the 'key,' and other information called the 'payload' is more commonly called what?",
        type: "single",
        options: [
          "none of the other choices",
          "Weight",
          "Vertex",
          "Edge",
          "Path",
          "Cycle",
        ],
        correctAnswer: "Vertex",
      },
      {
        id: 4,
        question:
          "Kruskal's algorithm for minimum spanning tree requires an efficient Disjoint Set data structure. What does it use this for?",
        type: "single",
        options: [
          "To keep track of visited vertices during traversal.",
          "To determine the order in which edges are added to the spanning tree.",
          "To calculate the weights of the edges in the graph.",
          "To detect and prevent cycles in the graph.",
          "To allow adding an edge that joins two currently disconnected subtrees together",
        ],
        correctAnswer:
          "To allow adding an edge that joins two currently disconnected subtrees together",
      },
      {
        id: 5,
        question: "Which of the following can be viewed as a graph problem?",
        type: "multiple",
        options: [
          "planning which courses to take and the order to take them in to complete a CS major",
          "scheduling all airline flights from airport to airport across the globe",
          "scheduling university courses to time slots and rooms for a given term so as to allow students to take courses they are likely to need to take together",
          "using a GPS to navigate driving directions from your current location to the closest airport",
          "two player chess",
          "routing wire in a house to deliver electricity to each outlet using minimum amount of wire",
        ],
        correctAnswer: [
          "planning which courses to take and the order to take them in to complete a CS major",
          "scheduling all airline flights from airport to airport across the globe",
          "scheduling university courses to time slots and rooms for a given term so as to allow students to take courses they are likely to need to take together",
          "using a GPS to navigate driving directions from your current location to the closest airport",
          "two player chess",
          "routing wire in a house to deliver electricity to each outlet using minimum amount of wire",
        ],
      },
      {
        id: 6,
        question:
          "When is it better to use an Adjacency List representation rather than an Adjacency Matrix representation to represent a graph?",
        type: "single",
        options: [
          "When the graph is dense and has many edges.",
          "When the graph has a small number of vertices.",
          "When efficient edge traversal is a primary concern.",
          "none of the other choices",
          "When the graph is sparse and has relatively few edges.",
        ],
        correctAnswer: "When the graph is sparse and has relatively few edges.",
      },
      {
        id: 7,
        question:
          "What is the name for a sequence of vertices that are connected by edges?",
        type: "single",
        options: [
          "Weight",
          "Path",
          "none of the other choices",
          "Cycle",
          "Vertex",
          "Edge",
        ],
        correctAnswer: "Path",
      },
      {
        id: 8,
        question:
          "What is a value that represents the cost to travel from one graph node to another?",
        type: "single",
        options: [
          "Weight",
          "Edge",
          "Cycle",
          "Path",
          "none of the other choices",
          "Vertex",
        ],
        correctAnswer: "Weight",
      },
      {
        id: 9,
        question:
          "What connects two nodes to show that there is a relationship between them and may have a cost associated with it?",
        type: "single",
        options: [
          "Path",
          "Cycle",
          "Edge",
          "Vertex",
          "none of the other choices",
          "Weight",
        ],
        correctAnswer: "Edge",
      },
      {
        id: 10,
        question:
          "What is a name for a path in a graph that starts and ends at the same vertex?",
        type: "single",
        options: [
          "Vertex",
          "Edge",
          "Path",
          "none of the other choices",
          "Cycle",
          "Weight",
        ],
        correctAnswer: "Cycle",
      },
    ],
  },
  {
    id: "week9",
    title: "Week 9: Dijkstra's and Prim's Algorithms",
    description: "Shortest paths, minimum spanning trees, and priority queues",
    questions: [
      {
        id: 1,
        question:
          "Based on the given analysis, what is the worst-case time complexity of Dijkstra's algorithm?",
        type: "single",
        options: [
          "none of the other choices",
          "O(n²)",
          "O(n log n)",
          "O(n)",
          "O(1)",
        ],
        correctAnswer: "O(n²)",
      },
      {
        id: 2,
        question:
          "What is the time complexity for building the min-heap priority queue in Dijkstra's algorithm where n is the number of vertices?",
        type: "single",
        options: ["O(n)", "O(1)", "O(log n)", "O(n log n)"],
        correctAnswer: "O(n log n)",
      },
      {
        id: 3,
        question:
          "What is the time complexity for each call to decreaseKey in Dijkstra's algorithm?",
        type: "single",
        options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
        correctAnswer: "O(log n)",
      },
      {
        id: 4,
        question:
          "Which data structure is used to control the order of vertices in Dijkstra's algorithm?",
        type: "single",
        options: [
          "none of the other choices",
          "Linked List",
          "Queue",
          "Stack",
          "Binary Heap Priority Queue",
        ],
        correctAnswer: "Binary Heap Priority Queue",
      },
      {
        id: 5,
        question:
          "What is the time complexity for each call to delMin in Dijkstra's algorithm?",
        type: "single",
        options: [
          "O(1)",
          "O(n log n)",
          "O(log n)",
          "O(n)",
          "none of the other choices",
        ],
        correctAnswer: "O(log n)",
      },
      {
        id: 6,
        question:
          "How many times is the while loop executed in Dijkstra's algorithm?",
        type: "single",
        options: [
          "log n times",
          "Once",
          "n times",
          "none of the other choices",
          "n log n times",
        ],
        correctAnswer: "n times",
      },
      {
        id: 7,
        question:
          "What determines the priority of vertices in the priority queue used in Dijkstra's algorithm?",
        type: "single",
        options: [
          "The distance to the vertex.",
          "The order in which the vertices were added to the graph.",
          "The weight of the vertex.",
          "The number of connections a vertex has.",
          "none of the other choices",
        ],
        correctAnswer: "The distance to the vertex.",
      },
      {
        id: 8,
        question:
          "What is the key step in Prim's algorithm to find an edge that is safe to add to the tree?",
        type: "single",
        options: [
          "Finding the edge with the highest weight",
          "Finding the longest edge",
          "Finding the shortest edge",
          "Finding the edge with the lowest weight",
          "none of the other choices",
        ],
        correctAnswer: "Finding the edge with the lowest weight",
      },
      {
        id: 9,
        question:
          "Which algorithm(s) is(are) used to construct a minimum weight spanning tree for a graph?",
        type: "multiple",
        options: [
          "Bellman-Ford algorithm",
          "Prim's algorithm",
          "Kruskal's algorithm",
          "none of the other choices",
          "Dijkstra's algorithm",
        ],
        correctAnswer: ["Prim's algorithm", "Kruskal's algorithm"],
      },
      {
        id: 10,
        question:
          "Why is Dijkstra's algorithm not commonly used for routing messages through the Internet?",
        type: "single",
        options: [
          "It only works for undirected graphs.",
          "It is too slow for large-scale networks.",
          "It requires a complete representation of the graph, which is impractical for network routers.",
          "It cannot handle negative weights in the graph.",
          "none of the other choices",
        ],
        correctAnswer:
          "It requires a complete representation of the graph, which is impractical for network routers.",
      },
      {
        id: 11,
        question:
          "What data structure is used in Prim's algorithm to select the next vertex to add to the growing graph?",
        type: "single",
        options: [
          "Queue",
          "Stack",
          "none of the other choices",
          "Set",
          "Priority queue",
        ],
        correctAnswer: "Priority queue",
      },
      {
        id: 12,
        question: "What is the definition of a minimum spanning tree?",
        type: "single",
        options: [
          "tree with the maximum weight of edges",
          "none of the other choices",
          "tree with the minimum number of edges",
          "A tree that connects all the vertices in a graph",
          "tree that includes all the vertices and minimizes the sum of edge weights",
        ],
        correctAnswer:
          "tree that includes all the vertices and minimizes the sum of edge weights",
      },
      {
        id: 13,
        question:
          "What is the time complexity for the for loop in Dijkstra's algorithm?",
        type: "single",
        options: [
          "none of the other choices",
          "O(1)",
          "O(n log n)",
          "O(log n)",
          "O(n)",
        ],
        correctAnswer: "O(n)",
      },
      {
        id: 14,
        question:
          "What is the importance of updating the predecessor links in Prim's algorithm?",
        type: "single",
        options: [
          "It ensures message delivery to all listeners.",
          "It prevents cycles in the spanning tree.",
          "none of the other choices",
          "It reduces the number of unnecessary messages.",
          "It speeds up the algorithm's execution.",
        ],
        correctAnswer: "It prevents cycles in the spanning tree.",
      },
      {
        id: 15,
        question: "What is the main purpose of Dijkstra's algorithm?",
        type: "single",
        options: [
          "To determine the shortest path between any two vertices in a graph.",
          "none of the other choices",
          "To determine the average path length in a graph.",
          "To determine the longest path in a graph.",
          "To determine the shortest path from a single starting vertex to all other vertices in a graph.",
        ],
        correctAnswer:
          "To determine the shortest path from a single starting vertex to all other vertices in a graph.",
      },
      {
        id: 16,
        question:
          "Which of the following best describes the purpose of the priority queue in Dijkstra's algorithm?",
        type: "single",
        options: [
          "To keep track of visited vertices.",
          "To store all the vertices in the graph.",
          "To determine the order in which vertices are explored.",
          "To store the distances between vertices.",
          "none of the other choices",
        ],
        correctAnswer: "To determine the order in which vertices are explored.",
      },
      {
        id: 17,
        question:
          "In Dijkstra's algorithm, what does the 'dist' variable in the Vertex class represent?",
        type: "single",
        options: [
          "The distance between the vertex and its nearest neighbor vertex.",
          "The number of times the vertex has been visited.",
          "none of the other choices",
          "The sum total of the edge weights from the start vertex to that vertex.",
          "The number of connections the vertex has.",
        ],
        correctAnswer:
          "The sum total of the edge weights from the start vertex to that vertex.",
      },
      {
        id: 18,
        question:
          "What is the purpose of the 'decreaseKey' method in Dijkstra's algorithm?",
        type: "single",
        options: [
          "To update the position of a vertex in the priority queue because its distance has changed.",
          "none of the other choices",
          "To add a new vertex to the priority queue.",
          "To remove a vertex from the priority queue.",
          "To increase the distance to a vertex in the priority queue.",
        ],
        correctAnswer:
          "To update the position of a vertex in the priority queue because its distance has changed.",
      },
      {
        id: 19,
        question:
          "What happens if a negative weight is introduced to one of the edges in the graph in Dijkstra's algorithm?",
        type: "single",
        options: [
          "The algorithm continues running normally.",
          "The algorithm never exits.",
          "none of the other choices",
          "The algorithm exits immediately.",
        ],
        correctAnswer: "The algorithm continues running normally.",
      },
      {
        id: 20,
        question:
          "What is the overall time complexity for the combined running time of Dijkstra's algorithm, based on the given analysis?",
        type: "single",
        options: [
          "O(n² log n)",
          "O(n²)",
          "none of the other choices",
          "O(n)",
          "O(n log n)",
        ],
        correctAnswer: "O(n²)",
      },
    ],
  },
];
