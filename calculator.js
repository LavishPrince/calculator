const userInput = document.querySelector(".input");

userInput.addEventListener("click", (event) => {
  alert(event.target.textContent);
});
