function checkTheme() {
  html.id = themeSelected;
  selected.innerHTML = themeSelected;
}

window.onload = checkTheme;

const selected = document.querySelector(".selected-theme");
const themesContainer = document.querySelector(".options-container-theme");
const html = document.documentElement;

let themeSelected = localStorage.getItem("themeSelected");

const themesList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  themesContainer.classList.toggle("active");
});

themesList.forEach((o) => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    themesContainer.classList.remove("active");
    themeSelected = o.querySelector("label").innerHTML;
    html.id = o.querySelector("label").innerHTML;
    console.log(themeSelected);
    localStorage.setItem("themeSelected", o.querySelector("label").innerHTML);
  });
});
