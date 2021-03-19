const menu = document.querySelector(".hamburger-menu");
const nav = document.querySelector(".navbar");
const submit = document.querySelector("#submit");

menu.addEventListener("click", () => {
  nav.classList.toggle("change");
});

submit.addEventListener("click", () => {
  alert("Form submission is under construction !!");
});
