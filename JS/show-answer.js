// Show Answer
let answerButton = document.querySelector('[data-js="showAnswer"]');

let answer = document.querySelector('[data-js="answer"]');

function revealAnswer() {
  answer.classList.toggle("showAnswer");
  if (answerButton.innerHTML === "Show Answer") {
    answerButton.innerHTML = "Hide Answer";
  } else {
    answerButton.innerHTML = "Show Answer";
  }
}
answerButton.addEventListener("click", revealAnswer);
