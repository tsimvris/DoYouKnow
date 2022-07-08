export default function Answer() {
  let answerButton = document.querySelector('[data-js="showAnswer"]');

  let answer = document.querySelector('[data-js="answer"]');

  answerButton.addEventListener("click", () => {
    answer.classList.toggle("showAnswer");
    if (answerButton.innerHTML === "Show Answer") {
      answerButton.innerHTML = "Hide Answer";
    } else {
      answerButton.innerHTML = "Show Answer";
    }
  });
}
