export default function Bookmark() {
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
