export default function FetchAndBuildCard() {
  const main = document.querySelector('[data-js="main"]');
  // FETCHING
  const urlToFetch =
    "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple"; // only 5 questions
  async function fetchQuestionsFromApi() {
    try {
      const res = await fetch(urlToFetch);
      const data = await res.json();
      const results = data.results;
      createCards(results);
    } catch (error) {
      console.error(error.message);
    }
  }

  fetchQuestionsFromApi();

  //CREATING CARDS
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
      let isBookmarked = false;

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
      divWrapper.setAttribute("data-js", "answer__container");
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
      /* Create Tags Wrapper*/
      const tagsWrapper = document.createElement("div");
      tagsWrapper.classList.add("tags");
      element.append(tagsWrapper);
      const rightAnswer = document.createElement("button");
      tagsWrapper.append(rightAnswer);
      /* Create Tags */

      let randomArray = ["", "", ""];
      const rightAnswerForArray = datensatz.correct_answer;
      randomArray.push(datensatz.incorrect_answers);
      const finishedArray = randomArray.pop();

      const randomStelle = Math.floor(Math.random() * 4);

      finishedArray.splice(randomStelle, 0, rightAnswerForArray);
      finishedArray.forEach((item) => {
        const newTag = document.createElement("button");
        newTag.innerHTML = item;
        tagsWrapper.append(newTag);
        newTag.addEventListener("click", () => {
          let criteria1 = datensatz.correct_answer;
          if (newTag.innerText === criteria1) {
            newTag.classList.toggle("rightAnswer");
          } else {
            newTag.classList.toggle("wrongAnswer");
          }
        });
      });
    });

    // SHOW ANSWERS
    const cardContainer = document.querySelectorAll(
      '[data-js="answer__container"]'
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
    // BOOKMARK
    let bookmarks = document.querySelectorAll(".bookmark-button");

    function Bookmarking(bookmarks) {
      bookmarks.addEventListener("click", () => {
        bookmarks.classList.toggle("filterBlue");
      });
    }

    bookmarks.forEach((mark) => {
      Bookmarking(mark);
    });
  }
}
