export default function NewQuestion() {
  const form = document.querySelector('[data-js="form"]');
  let fragenArray = [];
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // disables page refresh
    // Get our Form Values
    const neuFrage = form.elements.question.value;
    const neuAntwort = form.elements.answer.value;
    const neuTags = form.elements.tags.value;

    const neuFrageCard = {
      question: neuFrage,
      answer: neuAntwort,
      tags: neuTags,
    };
    fragenArray.push(neuFrageCard);
    form.reset();
    form.focus();
    console.log(fragenArray);
  });
}
