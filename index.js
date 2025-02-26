const RESULT = document.querySelector("#result");
const PLUS = document.querySelector("#increase");
const MINUS = document.querySelector("#decrease");

let counter = 0;

PLUS.addEventListener("click", () => {
  counter++;
  RESULT.textContent = counter;
});

MINUS.addEventListener("click", () => {
  counter--;
  RESULT.textContent = counter;
});
