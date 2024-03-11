const questions = [
  {
    question: "What is the purpose of a for loop in C++?",
    options: ["To iterate over elements in an array", "To execute a block of code repeatedly", "To define a function", "To declare variables"],
    answer: "To execute a block of code repeatedly",
    explanation: "A for loop is used to repeat a block of code a certain number of times."
  },
  {
    question: "Which of the following is a logical operator in C++?",
    options: ["&&", "++", "::", "->"],
    answer: "&&",
    explanation: "The && operator performs a logical AND operation."
  },
  {
    question: "What is an array in C++?",
    options: ["A variable that can hold only one value at a time", "A collection of elements of the same data type", "A conditional statement", "A loop construct"],
    answer: "A collection of elements of the same data type",
    explanation: "An array is a data structure that can store a fixed-size sequential collection of elements of the same type."
  },
  {
    question: "What is the purpose of using getters and setters in C++?",
    options: ["To perform arithmetic operations", "To define class methods", "To encapsulate data and control access to it", "To declare global variables"],
    answer: "To encapsulate data and control access to it",
    explanation: "Getters and setters are used to ensure the encapsulation of data within a class and to control access to that data."
  },
  {
    question: "How is a while loop different from a for loop in C++?",
    options: ["while loop requires an initialization, condition, and increment expression", "while loop is primarily used for iterating over arrays", "for loop only requires a condition expression", "for loop executes a block of code repeatedly"],
    answer: "while loop requires an initialization, condition, and increment expression",
    explanation: "A while loop requires an initialization, condition, and increment expression, whereas a for loop provides these elements in a single line."
  },
  {
    question: "Which of the following is a logical operator that performs logical OR operation in C++?",
    options: ["||", "++", "&&", "!"],
    answer: "||",
    explanation: "The || operator performs a logical OR operation."
  },
  {
    question: "What does the following statement do in C++?\nint numbers[5];",
    options: ["Declares a variable of type int", "Defines a function", "Declares an array of integers", "Creates an instance of a class"],
    answer: "Declares an array of integers",
    explanation: "This statement declares an array named 'numbers' that can hold 5 integers."
  },
  {
    question: "In C++, what is the purpose of the return keyword within a function?",
    options: ["To start the function execution", "To declare a variable", "To end the function execution and return a value", "To define a loop"],
    answer: "To end the function execution and return a value",
    explanation: "The return keyword is used to terminate the execution of a function and return a value to the caller."
  },
  {
    question: "Which of the following best describes a do-while loop in C++?",
    options: ["A loop that always executes at least once, even if the condition is false initially", "A loop that executes a block of code repeatedly until a condition becomes false", "A loop that executes a block of code repeatedly until a condition becomes true", "A loop that executes a block of code a fixed number of times"],
    answer: "A loop that always executes at least once, even if the condition is false initially",
    explanation: "A do-while loop is similar to a while loop, but it always executes the block of code at least once before checking the condition."
  },
  {
    question: "In C++, how are arrays indexed?",
    options: ["Starting from 1", "Starting from 0", "Starting from -1", "Starting from the size of the array"],
    answer: "Starting from 0",
    explanation: "In C++, array indexing starts from 0, meaning the first element of the array is at index 0."
  },
  {
    question: "What does the ++ operator do in C++?",
    options: ["Decrements a variable by 1", "Adds 1 to a variable", "Doubles a variable", "Divides a variable by 2"],
    answer: "Adds 1 to a variable",
    explanation: "The ++ operator increments the value of a variable by 1."
  },
  {
    question: "Which of the following is a valid way to declare a two-dimensional array in C++?",
    options: ["int array[rows][cols];", "int array[][];", "int array[][] = new int[];", "int array = new int[rows][cols];"],
    answer: "int array[rows][cols];",
    explanation: "This syntax declares a two-dimensional array named 'array' with 'rows' rows and 'cols' columns."
  },
  {
    question: "What is the purpose of the break statement in C++?",
    options: ["To exit a loop or switch statement", "To skip the current iteration of a loop", "To continue to the next iteration of a loop", "To jump to a specific label within a loop"],
    answer: "To exit a loop or switch statement",
    explanation: "The break statement is used to exit a loop or switch statement prematurely."
  },
  {
    question: "Which of the following is a comparison operator in C++?",
    options: ["!", "++", "==", "||"],
    answer: "==",
    explanation: "The == operator is used to compare two values for equality."
  },
  {
    question: "What does the following code do in C++?\nif (x > 10 && y < 5) {\n    // code block\n}",
    options: ["Executes the code block if both conditions are true", "Executes the code block if either condition is true", "Executes the code block if both conditions are false", "Executes the code block unconditionally"],
    answer: "Executes the code block if both conditions are true",
    explanation: "The code block is executed if both conditions (x > 10 and y < 5) are true."
  },
  {
    question: "What is the purpose of the continue statement in C++?",
    options: ["To exit a loop or switch statement", "To skip the current iteration of a loop", "To break out of a loop", "To jump to a specific label within a loop"],
    answer: "To skip the current iteration of a loop",
    explanation: "The continue statement skips the rest of the current iteration of a loop and continues with the next iteration."
  },
  {
    question: "Which of the following is the correct syntax to print the message in C++ language?",
    options: ["cout <<'Hello world!';", "Cout << Hello world! ;", "Out <<'Hello world!';", "None of the above"],
    answer: "cout <<'Hello world!';",
    explanation: "Pointers are variables that store memory addresses, allowing you to work with memory directly in C++."
  },
  {
    question: "What is the syntax for defining a setter method in C++?",
    options: ["void setVariable(int value);", "int getVariable();", "int variable;", "int variable = value;"],
    answer: "void setVariable(int value);",
    explanation: "A setter method in C++ typically takes a parameter to set the value of a class member variable."
  },
  {
    question: "What does the following C++ code do?\nint sum = 0;\nfor (int i = 1; i <= 10; ++i) {\n    sum += i;\n}",
    options: ["Calculates the sum of integers from 1 to 10", "Calculates the product of integers from 1 to 10", "Prints the integers from 1 to 10", "Calculates the factorial of 10"],
    answer: "Calculates the sum of integers from 1 to 10",
    explanation: "This code calculates the sum of integers from 1 to 10 and stores the result in the variable 'sum'."
  },
  {
    question: "What is the purpose of the static keyword in C++?",
    options: ["To specify constant values", "To declare a variable", "To define a static method or variable that belongs to the class itself rather than instances of the class", "To specify the access level of a class member"],
    answer: "To define a static method or variable that belongs to the class itself rather than instances of the class",
    explanation: "The static keyword is used to create variables and methods that belong to the class itself, rather than to instances of the class."
  }
];

const quizForm = document.getElementById('quizForm');
const questionsContainer = document.getElementById('questions');
const resultContainer = document.getElementById('result');
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');

let timeLeft;

function buildQuiz() {
  questions.forEach((question, index) => {
    const li = document.createElement('li');
    const optionsHtml = question.options.map(option => `<label><input type="radio" name="question${index}" value="${option}">${option}</label>`).join('');
    li.innerHTML = `
      <div>${question.question}</div>
      <div>${optionsHtml}</div>
    `;
    questionsContainer.appendChild(li);
  });
}

function showResult() {
  const answers = Array.from(document.querySelectorAll('input:checked')).map(input => input.value);
  let correctCount = 0;

  questions.forEach((question, index) => {
    const selectedAnswer = answers[index];
    const correctAnswer = question.answer;
    const explanation = question.explanation;

    const li = questionsContainer.children[index];
    const div = li.querySelector('div');
    div.classList.remove('incorrect');
    div.classList.remove('correct');

    if (selectedAnswer === correctAnswer) {
      div.classList.add('correct');
      correctCount++;
    } else {
      div.classList.add('incorrect');
      div.innerHTML += `<p>Correct Answer: ${correctAnswer}</p>`;
      div.innerHTML += `<p>Explanation: ${explanation}</p>`;
    }
  });

  const percentage = (correctCount / questions.length) * 100;
  resultContainer.innerHTML = `You got ${correctCount} out of ${questions.length} correct (${percentage}%).`;

  // Stop the timer when the quiz is submitted
  clearInterval(timerInterval);
  timeLeft = 600; // Reset the timer
  updateTimer(); // Update timer display
}

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  timerDisplay.textContent = `${minutes}:${seconds}`;
}

let timerInterval;

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    localStorage.setItem('timeLeft', timeLeft);
    updateTimer();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      quizForm.submit();
    }
  }, 1000);
}

startButton.addEventListener('click', function() {
  startButton.style.display = 'none';
  quizForm.style.display = 'block';
  startTimer();
});

quizForm.addEventListener('submit', function(event) {
  event.preventDefault();
  showResult();
  localStorage.removeItem('timeLeft'); // Remove timeLeft from localStorage upon quiz submission
});

// Load the remaining time from localStorage if the quiz is not submitted
if (!localStorage.getItem('quizSubmitted')) {
  const storedTimeLeft = localStorage.getItem('timeLeft');
  if (storedTimeLeft) {
    timeLeft = parseInt(storedTimeLeft, 10);
  } else {
    timeLeft = 600; // 10 minutes in seconds
  }
  buildQuiz();
  updateTimer();
}

// Set the quizSubmitted flag in local storage when the quiz is submitted
quizForm.addEventListener('submit', function() {
  localStorage.setItem('quizSubmitted', true);
});

// Clear the timer when the user exits the website
window.addEventListener('beforeunload', function() {
  clearInterval(timerInterval);
});
