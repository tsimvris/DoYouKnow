// Show Answer
let answerButton = document.querySelector('[data-js="showAnswer"]');

let answer = document.querySelector('[data-js="answer"]');

function revealAnswer() {
  answer.classList.toggle("showAnswer");
}
answerButton.addEventListener("click", revealAnswer);
// Bookmark
let bookmark = document.querySelector('[data-js="bookmark"]');
let bmButton = document.querySelector('[data-js="bookmark-button"]');
function isBookmarked() {
  bookmark.classList.toggle("filterBlue");
}
bmButton.addEventListener("click", isBookmarked);
