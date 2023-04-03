function validate(event) {
  event.preventDefault();
  //Validate each form input
  document.querySelectorAll("form input[data-required]").forEach(function (input) {
    var error = input.nextElementSibling;
    if (input.value.trim().length === 0) {
      if (!error || !error.classList.contains("error")) {
        error = document.createElement("p");
        error.classList.add("error");
        error.textContent = input.getAttribute("data-error-message");
        input.insertAdjacentElement("afterend", error);
      }
    } else if (error && error.classList.contains("error")) {
      error.remove();
    }

    //Validate email format
    if (input.type === "text" && input.name === "email") {
      var emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(input.value.trim())) {
        error = input.nextElementSibling;
        if (!error || !error.classList.contains("error")) {
          error = document.createElement("p");
          error.classList.add("error");
          error.textContent = input.getAttribute("data-error-message");
          input.insertAdjacentElement("afterend", error);
        }
      } else if (error && error.classList.contains("error")) {
        error.remove();
      }
    }
  });
}

document.querySelector("form").addEventListener("submit", validate);
document.querySelector("form").addEventListener("change", validate);
