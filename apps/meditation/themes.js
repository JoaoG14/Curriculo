function checkTheme() {
  html.id = themeSelected;
  selected.innerHTML = themeSelected;
}

window.onload = checkTheme;

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const html = document.documentElement;
const settin = document.querySelector("#focus");

let themeSelected = localStorage.getItem("themeSelected");

const optionsList = document.querySelectorAll(".option");



selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach((o) => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
    themeSelected = o.querySelector("label").innerHTML;
    html.id = o.querySelector("label").innerHTML;
    console.log(themeSelected);
    localStorage.setItem("themeSelected", o.querySelector("label").innerHTML);
  });
});
