export default function CreateQuestion() {
  const form = document.querySelector('[data-js="form"]');
  let fragenArray = [];
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // disables page refresh
    // Get our Form Values
    const newQuestion = form.elements.question.value;
    const newAnswer = form.elements.answer.value;
    const newTags = form.elements.tags.value.split(","); // split tags, seperated by COMMA

    const tagsWithoutWhitespaces = newTags.map((tag) => tag.trim()); // delete whitespaces

    const neuFrageCard = {
      question: newQuestion,
      answer: newAnswer,
      tags: tagsWithoutWhitespaces,
    };
    fragenArray.push(neuFrageCard);
    form.reset();
    form.focus();
    console.log(fragenArray);
  });
}
