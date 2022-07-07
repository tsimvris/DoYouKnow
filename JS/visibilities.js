export default function OnePage() {
  // GET BUTTONS
  const homeButton = document.querySelector(".gg-home");
  const bookmarkButton = document.querySelector(".gg-bookmark");
  const createButton = document.querySelector(".gg-menu-boxed");
  const profileButton = document.querySelector(".gg-profile");
  const loginButton = document.querySelector('[data-js="login"]');
  const logoutButton = document.querySelector('[data-js="logout"]');
  // GET PAGES
  const homePage = document.querySelector('[data-js="main"]');
  const bookmarkPage = document.querySelector('[data-js="bookmarkPage"]');
  const createPage = document.querySelector('[data-js="create"]');
  const profilePage = document.querySelector('[data-js="profile"]');
  const loginPage = document.querySelector('[data-js="loginPage"]');

  // NAV BAR BUTTONS
  homeButton.addEventListener("click", () => {
    homePage.classList.remove("showMain");
    bookmarkPage.classList.add("showBookmarks");
    createPage.classList.add("showCreate");
    profilePage.classList.add("showProfile");
  });
  bookmarkButton.addEventListener("click", () => {
    homePage.classList.add("showMain");
    bookmarkPage.classList.remove("showBookmarks");
    createPage.classList.add("showCreate");
    profilePage.classList.add("showProfile");
  });
  createButton.addEventListener("click", () => {
    homePage.classList.add("showMain");
    bookmarkPage.classList.add("showBookmarks");
    createPage.classList.remove("showCreate");
    profilePage.classList.add("showProfile");
  });
  profileButton.addEventListener("click", () => {
    homePage.classList.add("showMain");
    bookmarkPage.classList.add("showBookmarks");
    createPage.classList.add("showCreate");
    profilePage.classList.remove("showProfile");
  });

  loginButton.addEventListener("click", () => {
    homePage.classList.remove("showMain");
    loginPage.classList.add("hideLogin");
  });

  logoutButton.addEventListener("click", () => {
    profilePage.classList.add("showProfile");
    loginPage.classList.remove("hideLogin");
  });
}
