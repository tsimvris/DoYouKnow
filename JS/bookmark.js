export default function Bookmark() {
  let bookmarks = document.querySelectorAll(".booky");
  let bookmarkButton = document.querySelectorAll(".bookmark-button");

  /*bookmarkButton.forEach(bookmarkButton, () => {
    bookmarkButton.addEventListener("click", () => {
      bookmarks.classList.toggle("filterBlue");
    });
  });

*/

  function Bookmark(bookmarks) {
    bookmarks.addEventListener("click", () => {
      bookmarks.classList.toggle("filterBlue");
    });
  }

  bookmarks.forEach((element) => {
    Bookmark(element);
  });
}
