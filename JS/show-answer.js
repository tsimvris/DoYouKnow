export default function Answer() {
  const cardContainer = document.querySelectorAll(
    '[data-js="card__container"]'
  );
  cardContainer.forEach((card) => {
    const button = card.querySelector('[data-js="showAnswer"]');
    const answer = card.querySelector('[data-js="answer"]');

    button.addEventListener("click", () => {
      answer.classList.toggle("showAnswer");
      if (button.innerHTML === "Show Answer") {
        button.innerHTML = "Hide Answer";
      } else {
        button.innerHTML = "Show Answer";
      }
    });
  });
}
/* const answerButtons = document.querySelectorAll(".answer");
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
  });*/
