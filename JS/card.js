export default function FetchCard() {
  const main = document.querySelector('[data-js="main"]');

  const urlToFetch = "https://opentdb.com/api.php?amount=5"; // only 5 questions
  function fetchQuestionsFromApi() {
    fetch(urlToFetch)
      .then((response) => response.json())
      .then((data) => {
        createCards(data.results);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
  fetchQuestionsFromApi();

  function createCards(data) {
    data.forEach((datensatz) => {
      const element = document.createElement("div");
      element.classList.add("card");
      main.append(element);

      /* create card header*/
      const header = document.createElement("div");
      header.classList.add("card-top");
      element.append(header);

      /* create card header h3*/
      const cardHeader = document.createElement("h3");
      cardHeader.innerText = "Question:";
      header.append(cardHeader);

      /* create card header bookmark button */
      const headerButton = document.createElement("button");
      headerButton.classList.add("bookmark-button");
      header.append(headerButton);
      headerButton.setAttribute("data-js", "bookmark-button");

      /* create card header bookmark button image */
      const bookmarkImage = document.createElement("img");
      bookmarkImage.classList.add("booky", "filter-orange");
      bookmarkImage.setAttribute("data-js", "bookmark");
      bookmarkImage.src = "../assets/bookmark.svg";
      headerButton.append(bookmarkImage);

      /* add question on P */
      const oneQuestion = document.createElement("p");
      element.append(oneQuestion);
      oneQuestion.innerHTML = datensatz.question;

      /* create show answer button and answer container*/
      const divWrapper = document.createElement("div");
      divWrapper.classList.add("button-container");
      element.append(divWrapper);
      divWrapper.setAttribute("data-js", "card__container");
      /* create show answer button */
      const showAnswerButton = document.createElement("button");
      showAnswerButton.classList.add("answer");
      showAnswerButton.setAttribute("data-js", "showAnswer");
      showAnswerButton.innerText = "Show answer";
      divWrapper.append(showAnswerButton);

      /* Create Answer */
      const oneAnswer = document.createElement("p");
      oneAnswer.classList.add("showAnswer");
      oneAnswer.setAttribute("data-js", "answer");
      oneAnswer.innerHTML = datensatz.correct_answer;
      divWrapper.append(oneAnswer);

      const tagsWrapper = document.createElement("div");
      tagsWrapper.classList.add("tags");
      element.append(tagsWrapper);
      const rightAnswer = document.createElement("button");
      tagsWrapper.append(rightAnswer);
      rightAnswer.innerText = datensatz.correct_answer;
      rightAnswer.addEventListener("click", () => {
        rightAnswer.classList.toggle("rightAnswer");
      });
      datensatz.incorrect_answers.forEach((tag) => {
        const newTag = document.createElement("button");
        newTag.innerText = tag;
        tagsWrapper.append(newTag);
        newTag.addEventListener("click", () => {
          newTag.classList.toggle("wrongAnswer");
        });
      });
    });
  }
}
