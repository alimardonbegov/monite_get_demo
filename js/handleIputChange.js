const inputs = document.querySelectorAll(".form__input");
const errorMessage = document.querySelector(".error-message");
const hidden = document.getElementsByClassName("hidden");

inputs.forEach((input) => {
  input.addEventListener("input", function () {
    if (this.value) {
      this.classList.add("filled");
      hidden[0].classList.add("shown");
    } else {
      this.classList.remove("filled");
    }
  });
});

input.addEventListener("input", function () {
  if (this.value.trim() === "") {
    errorMessage.classList.add("active");
  } else {
    errorMessage.classList.remove("active");
  }
});
