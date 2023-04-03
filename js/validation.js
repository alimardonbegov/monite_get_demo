var isFormValid;

function validate(event) {
  event.preventDefault();
  isFormValid = true;

  document.querySelectorAll("form input[data-required]").forEach(function (input) {
    var error = input.nextElementSibling;
    if (input.value.trim().length === 0) {
      if (!error || !error.classList.contains("error")) {
        error = document.createElement("p");
        error.classList.add("error");
        error.textContent = input.getAttribute("data-error-message");
        input.insertAdjacentElement("afterend", error);
      }
      isFormValid = false;
    } else if (error && error.classList.contains("error")) {
      error.remove();
    }

    if (input.type === "text" && (input.name === "email" || input.name === "phone")) {
      var regex = input.name === "email" ? /^\S+@\S+\.\S+$/ : /^[0-9]{10}$/;
      if (!regex.test(input.value.trim())) {
        error = input.nextElementSibling;
        if (!error || !error.classList.contains("error")) {
          error = document.createElement("p");
          error.classList.add("error");
          error.textContent = input.getAttribute("data-error-message");
          input.insertAdjacentElement("afterend", error);
        }
        isFormValid = false;
      } else if (error && error.classList.contains("error")) {
        error.remove();
      }
    }
  });
}

document.querySelector("form").addEventListener("submit", validate);
document.querySelector("form").addEventListener("change", validate);
document.getElementById("bookBtn").addEventListener("click", () => {
  if (isFormValid) {
    window.location.href = "thanks.html";
  }
  console.log(isFormValid);

  console.log("clicked");
});
