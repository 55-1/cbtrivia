import { shuffleQuestions, filteredQuestions } from './utils.js';

const ELEMENT_IDS = ["options","bgImage", "bgImage2", "chapter", "question", "choices", "score", "continue"];
const [optionsElement, bgImage, bgImage2, chapterElement, questionElement, choiceElement, scoreElement, continueLink] = ELEMENT_IDS.map(id => document.getElementById(id));

const quizLength = localStorage.getItem('quizLength') || 15;
let score = 0;
let currentQuestionIndex = 0;

function displayTrivia() {
	const currentQuestion = filteredQuestions[currentQuestionIndex];

	if (!currentQuestion) {questionElement.innerText = "There are no questions available. Select a chapter to begin.";	return;}

	questionElement.innerText = currentQuestion.question;
	chapterElement.innerText = currentQuestion.chapter;
	chapterElement.addEventListener("click", function() {
    const chapter = this.innerText;
    const url = `https://www.biblegateway.com/passage/?search=${chapter}&version=ERV`;
    window.open(url, '_blank');
});
	

	currentQuestion.answers.forEach((answer, index) => {
		const radioButton = document.createElement("input");
		radioButton.type = "radio";
		radioButton.name = "answer";
		radioButton.value = answer.text;
		radioButton.id = `answer-${index}`;
		if (answer.correct) {radioButton.dataset.correct = answer.correct;}
		radioButton.addEventListener("click", selectAnswer);
		choiceElement.appendChild(radioButton);

		const label = document.createElement("label");
		label.innerText = answer.text;
		label.htmlFor = radioButton.id;
		choiceElement.appendChild(label);

	});
}

function selectAnswer(event) {
	const selectedButton = event.target;
	const correct = selectedButton.dataset.correct === "true";

	if (correct) {score++;} updateScore(correct);

	questionElement.innerHTML = "";
	choiceElement.innerHTML = "";
	nextQuestion();
}

function updateScore(correct) {
	if (correct) {scoreElement.innerText = `Correct! Your Score is: ${score}`;}
	else {scoreElement.innerText = `Incorrect! Your Score is: ${score}`;}
	scoreElement.style.opacity = ".6";
}

function nextQuestion() {
	currentQuestionIndex++;
	if (currentQuestionIndex >= quizLength) {endGame();}
	else {
		hideQuestions();
		setTimeout(() => {displayTrivia();}, 150);
		showQuestions();
	}
}

function endGame() {
	if (Number(score) === Number(quizLength)) {
		scoreElement.innerHTML = `Your Score is ${score} out of ${quizLength}!<br>Wow, you're a trivia master!`;
	}  else if (score / quizLength > 0.7) {
		scoreElement.innerText = `Your Score is ${score} out of ${quizLength}! Great job!`;
	} else if (score / quizLength >= 0.5) {
		scoreElement.innerText = `Your Score is ${score} out of ${quizLength}! Not bad!`;
	} else if (score === 0) {
		scoreElement.innerText = `You got all questions wrong! Impressive!`;
	} else {
		scoreElement.innerText = `Your Score is ${score} out of ${quizLength}! Keep trying!`;
	}
	
	optionsElement.style.opacity = "0";
	setTimeout(function() {optionsElement.style.display = 'none';}, 1000);
	
	continueLink.style.opacity = ".1";
	setTimeout(function() {
			continueLink.style.display = 'block';
			setTimeout(function() {continueLink.style.opacity = ".7";}, 50);
	}, 1000);

	continueLink.addEventListener('click', continueGame);

	bgImage.style.opacity = "0";
	bgImage2.style.opacity = ".5";
	hideQuestions();
}

function continueGame() {
	currentQuestionIndex = 0;
	score = 0;
	scoreElement.style.opacity = "0";
	setTimeout(() => {displayTrivia();}, 150);

	continueLink.removeEventListener('click', continueGame);
	continueLink.style.opacity = "0";
	setTimeout(function() {continueLink.style.display = 'none';}, 1000);

	optionsElement.style.opacity = ".1";
	setTimeout(function() {
		optionsElement.style.display = 'block';
			setTimeout(function() {	optionsElement.style.opacity = ".7";}, 50);
	}, 1000);

	bgImage.style.opacity = ".9";
	bgImage2.style.opacity = "0";

	shuffleQuestions(filteredQuestions);
	showQuestions();
}

function hideQuestions() {questionElement.style.opacity = "0"; choiceElement.style.opacity = "0"; chapterElement.style.opacity = "0";}
function showQuestions() {questionElement.style.opacity = ".7"; choiceElement.style.opacity = ".7"; chapterElement.style.opacity = ".7";}

displayTrivia();
showQuestions();
bgImage.style.opacity = ".9";
scoreElement.style.opacity = ".7";