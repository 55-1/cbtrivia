import questions from './questions.js';

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const scoreElement = document.getElementById("score");
const retryButton = document.getElementById("retry");


retryButton.style.display = "none";
bgimage.style.opacity = "1";
questionElement.style.opacity = ".9";
choicesElement.style.opacity = ".6";


let currentQuestionIndex = 0;

let score = 0;
let remainingQuestions = [];

const quizLength = 15;

function startGame() {
  remainingQuestions = questions.slice().sort(() => Math.random() - 0.5).slice(0, quizLength);
  currentQuestionIndex = 0;
  score = 0;

  showQuestion();
  bgimage.style.opacity = "1";
  var all = document.querySelectorAll("#choices button");
  for (let choiceBtn of all) { choiceBtn.disabled = false; }

  questionElement.style.opacity = ".9";
  choicesElement.style.opacity = ".6";


  retryButton.style.display = "none";
  scoreElement.innerText = "";

}

function showQuestion() {
  const question = remainingQuestions[currentQuestionIndex];
  questionElement.innerText = question.question;
  choicesElement.innerHTML = "";
  question.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("choice");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    choicesElement.appendChild(button);
  });
}

function selectAnswer(event) {
  const selectedButton = event.target;
  const correct = selectedButton.dataset.correct === "true";
  if (correct) {
    score++;
    scoreElement.innerText = `Correct! Your Score is: ${score}`;
  } else {
    scoreElement.innerText = `Incorrect! Your Score is: ${score}`;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex >= quizLength) {
    if (correct) {
      scoreElement.innerText = `Correct! Your Score is ${score} out of ${quizLength}`;
    } else {
      scoreElement.innerText = `Incorrect! Your Score is ${score} out of ${quizLength}`;
    }
    endGame();


  } else {
    showQuestion();
  }
}

function endGame() {
  bgimage.style.opacity = "0";

  var all = document.querySelectorAll("#choices button");
  for (let choiceBtn of all) { choiceBtn.disabled = true; }


  questionElement.style.opacity = "0";
  choicesElement.style.opacity = "0";

  retryButton.style.display = "block";
  retryButton.addEventListener("click", startGame);
}

startGame();

