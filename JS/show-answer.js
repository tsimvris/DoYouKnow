// Show Answer
let answerButton = document.querySelector('[data-js="showAnswer"]');

let answer = document.querySelector('[data-js="answer"]');

function revealAnswer() {
  answer.classList.toggle("showAnswer");
}
answerButton.addEventListener("click", revealAnswer);
