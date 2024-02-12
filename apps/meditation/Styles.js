function checkStyle() {
  styleToggle.id = styleSelected;
  selectedStyle.innerHTML = themeSelected;

  if (styleSelected === "slider") {
    document.querySelector("#sliderContainer").style.display = "flex";
    document.querySelector(".time-btns").style.display = "none";
  }

  if (styleSelected === "buttons") {
    document.querySelector(".time-btns").style.display = "inline";
    document.querySelector("#sliderContainer").style.display = "none";
  }
}



const selectedStyle = document.querySelector(".selected-style");
const stylesContainer = document.querySelector(".options-container-styles");
const styleToggle = document.querySelector(".style-toggler");

let styleSelected = localStorage.getItem("styleSelected");

const stylesList = document.querySelectorAll(".style-option");

selectedStyle.addEventListener("click", () => {
  stylesContainer.classList.toggle("active");
});

stylesList.forEach((o) => {
  o.addEventListener("click", () => {
    selectedStyle.innerHTML = o.querySelector("label").innerHTML;
    stylesContainer.classList.remove("active");
    styleSelected = o.querySelector("label").innerHTML;
    styleToggle.id = o.querySelector("label").innerHTML;
    localStorage.setItem("styleSelected", o.querySelector("label").innerHTML);
  });
});
