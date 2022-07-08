export default function Answer() {
  const answerButtons = document.querySelectorAll(".answer");
  const answers = document.querySelectorAll(".showAnswer");

  answerButtons.forEach((button) => {
    button.addEventListener("click", () => {
      answers.forEach((answer) => {
        answer.classList.toggle("showAnswer");
        if (button.innerHTML === "Show Answer") {
          button.innerHTML = "Hide Answer";
        } else {
          button.innerHTML = "Show Answer";
        }
      });
    });
  });
}
