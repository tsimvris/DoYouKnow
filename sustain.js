let questionCards = [
  {
    question: "Where did Harry Potter Studied?",
    answer: "Hogwarts",
    tags: ["Fantasy", "Harry Potter", "Films", "Hollywood"],
    isBookmarked: false,
  },
  {
    question: "Who Killed Dumbledore?",
    answer: "Prof. Snape",
    tags: ["Harry Potter", "Films", "Fantasy", "Hollywood"],
    isBookmarked: false,
  },
];
questionCards.forEach((card) => {
  /* create card */
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
  oneQuestion.innerText = card.question;

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
  oneAnswer.innerText = card.answer;
  divWrapper.append(oneAnswer);

  /* create tags wrapper */
  const tagsWrapper = document.createElement("div");
  tagsWrapper.classList.add("tags");
  element.append(tagsWrapper);

  card.tags.forEach((tag) => {
    const newTag = document.createElement("button");
    newTag.innerText = tag;
    tagsWrapper.append(newTag);
  });
});
