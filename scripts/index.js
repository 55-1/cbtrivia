import { shuffleQuestions, filteredQuestions } from './utils.js';

const ELEMENT_IDS = ["options","bgImage", "bgImage2", "chapter", "question", "choices", "score", "continue"];
const [optionsElement, bgImage, bgImage2, chapterElement, questionElement, choiceElement, scoreElement, continueLink] = ELEMENT_IDS.map(id => document.getElementById(id));

chapterElement.addEventListener("click", function() {
	const [bookName, chapterNumber] = this.innerText.split(' ');
	const bookNumber = getBookNumber(bookName);
	const chapter = chapterNumber.split(':')[0]; 
	const url = `https://ajbodev.github.io/Bible.html#/${bookNumber}/${chapter}`;
	window.open(url, '_blank');
});

const quizLength = localStorage.getItem('quizLength') || 15;
let score = 0;
let currentQuestionIndex = 0;

function getBookNumber(bookName) {
	const bookNames = ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi", "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Philemon", "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John", "Jude", "Revelation"];
	return bookNames.indexOf(bookName) + 1;
}

function displayTrivia() {
	const currentQuestion = filteredQuestions[currentQuestionIndex];

	if (!currentQuestion) {
			questionElement.innerText = "There are no questions available. Select a chapter to begin.";	
			return;
	}

	let questionText = currentQuestion.question;
	if (questionText.length > 30) { // Adjust this length as per your requirement
			let midPoint = Math.floor(questionText.length / 2);
			const beforeMidPoint = questionText.lastIndexOf(' ', midPoint);
			const afterMidPoint = questionText.indexOf(' ', midPoint);

			if (beforeMidPoint === -1 || (afterMidPoint !== -1 && midPoint - beforeMidPoint >= afterMidPoint - midPoint)) {
					midPoint = afterMidPoint;
			} else {
					midPoint = beforeMidPoint;
			}

			questionText = [questionText.slice(0, midPoint), '\n', questionText.slice(midPoint)].join('');
	}

	questionElement.innerText = questionText;
	chapterElement.innerText = currentQuestion.chapter;

	

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
    let answerText = answer.text;
    if (answerText.length > 30) { // Adjust this length as per your requirement
        let midPoint = Math.floor(answerText.length / 2);
        const beforeMidPoint = answerText.lastIndexOf(' ', midPoint);
        const afterMidPoint = answerText.indexOf(' ', midPoint);

        if (beforeMidPoint === -1 || (afterMidPoint !== -1 && midPoint - beforeMidPoint >= afterMidPoint - midPoint)) {
            midPoint = afterMidPoint;
        } else {
            midPoint = beforeMidPoint;
        }

        answerText = [answerText.slice(0, midPoint), '\n', answerText.slice(midPoint)].join('');
    }
    label.innerText = answerText;
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