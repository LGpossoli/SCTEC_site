const button = document.getElementById("hamburger");
const menu = document.getElementById("menu");

button.addEventListener("click", function () {
  menu.classList.toggle("ativa");
});

/* fecha o menu ao clicar num item */
const links = menu.querySelectorAll("a");
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    menu.classList.remove("ativa");
  });
}