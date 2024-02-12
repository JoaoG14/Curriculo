function checkStyle() {
  html.id = themeSelected;
  selected.innerHTML = themeSelected;
}

window.onload = checkStyle;

const selected = document.querySelector(".selected-style");
const themesContainer = document.querySelector(".options-container");
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
