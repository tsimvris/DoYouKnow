export default function Bookmark() {
  let bookmarks = document.querySelectorAll(".booky");
  let bookmarkButton = document.querySelectorAll(".bookmark-button");

  bookmarkButton.forEach(bookmarkButton, () => {
    bookmarkButton.addEventListener("click", () => {
      bookmarks.classList.toggle("filterBlue");
    });
  });
}
