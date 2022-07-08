export default function Bookmark() {
  let bookmarks = document.querySelectorAll(".booky");

  function Bookmark(bookmarks) {
    bookmarks.addEventListener("click", () => {
      bookmarks.classList.toggle("filterBlue");
    });
  }

  bookmarks.forEach((element) => {
    Bookmark(element);
  });
}
