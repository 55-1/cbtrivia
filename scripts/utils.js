import { allQuestions } from "../questions/questions.js";
let memoizedFilteredQuestions = null;

export function filterQuestions() {
  if (memoizedFilteredQuestions !== null) {return memoizedFilteredQuestions;}

  const filteredQuestions = [];
  for (const book in allQuestions) {
    let bookItem = localStorage.getItem(book);
    if (bookItem === null) {
      localStorage.setItem(book, 'true');
      bookItem = 'true';
    }
    if (bookItem === "true") {filteredQuestions.push(...allQuestions[book]);}
  }
  shuffleQuestions(filteredQuestions);
  shuffleAnswers(filteredQuestions);

  memoizedFilteredQuestions = filteredQuestions;
  return filteredQuestions;
}

export function shuffleQuestions(filteredQuestions) {
  for (let i = filteredQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filteredQuestions[i], filteredQuestions[j]] = [filteredQuestions[j], filteredQuestions[i]];
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function shuffleAnswers(filteredQuestions) {
  filteredQuestions.forEach((question) => {shuffleArray(question.answers);});
}

export const filteredQuestions = filterQuestions();