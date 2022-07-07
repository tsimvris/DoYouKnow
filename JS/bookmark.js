export default function Bookmark() {
  let bookmark = document.querySelector('[data-js="bookmark"]');
  let bookmarkButton = document.querySelector('[data-js="bookmark-button"]');

  function isBookmarked() {
    bookmark.classList.toggle("filterBlue");
  }

  bookmarkButton.addEventListener("click", isBookmarked);
}
