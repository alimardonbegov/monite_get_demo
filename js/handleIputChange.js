const inputs = document.querySelectorAll(".form__input");
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
