const menu = document.querySelector(".hamburger-menu");
const nav = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  nav.classList.toggle("change");
});
