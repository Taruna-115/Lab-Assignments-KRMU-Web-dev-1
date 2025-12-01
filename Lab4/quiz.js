// Simple Quiz Game (Web Dev I - Lab 4)

// Array of questions:
// Each item has a question and the correct answer.
const quizQuestions = [
  { question: "What is the capital of India?", answer: "New Delhi" },
  { question: "Which language is used for web styling?", answer: "CSS" },
  { question: "What does JS stand for (short)?", answer: "javascript" },
  { question: "Which tag is used for a paragraph in HTML?", answer: "p" },
  { question: "Which symbol starts a single-line comment in JavaScript?", answer: "//" }
];

// Function to run the quiz:
function runQuiz() {
  let score = 0; // initialize score

  // Loop through each question
  for (let i = 0; i < quizQuestions.length; i++) {
    // Take user input
    const userInput = prompt(quizQuestions[i].question); // ask question

    // Check answer (case-insensitive and trimmed)
    if (userInput && userInput.toLowerCase().trim() === quizQuestions[i].answer.toLowerCase().trim()) {
      alert("Correct!");
      score++;
    } else {
      alert(`Wrong. Correct answer: ${quizQuestions[i].answer}`);
    }
  }

  // Show final score
  alert(`Quiz over! Your score is ${score} out of ${quizQuestions.length}`);
}

runQuiz();

