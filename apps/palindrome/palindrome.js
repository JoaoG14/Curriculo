const result = document.getElementById("result");
const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");

function palindrome(str) {
  let normalized = str.toLowerCase().replace(/[^0-9a-z]/gi, '');
  let reversed = str.split("").reverse().join(" ").toLowerCase().replace(/[^0-9a-z]/gi, '');
  if (normalized === reversed) return true;
  return false;
}

palindrome("racecar");


checkButton.addEventListener("click", () => {
  const inputString = textInput.value;
  if (palindrome(inputString)) {
    result.innerHTML = `${textInput.value} is a palindrome`
  } else {
    result.innerHTML = `${textInput.value} is not a palindrome`
  }
})