const form = document.querySelector("#myForm");
const saveBtn = document.querySelector("#saveBtn");

saveBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  for (const [name, value] of formData.entries()) {
    console.log(name, value);
  }
});
