const menus = document.querySelectorAll(".collapsed");
const info = document.querySelectorAll(".sub-menu li");
menus[0].addEventListener("click", () => {
  info[0].classList.toggle("block");
  info[1].classList.toggle("block");
  info[2].classList.toggle("block");
  info[3].classList.toggle("block");
  info[4].classList.toggle("block");
  info[5].classList.toggle("block");
  info[6].classList.toggle("block");
  info[7].classList.toggle("block");
  menus[0].classList.toggle("sus");
});
let main = document.querySelector(".menu-list");
const btn = document.querySelector(".toggle-btn");
btn.addEventListener("click", () => {
  main.classList.toggle("block");
});
