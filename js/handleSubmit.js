const form = document.querySelector("#myForm");
const saveBtn = document.querySelector("#submitBtn");

let dataSubmit = {};

saveBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const formData = new FormData(form); //save data
  for (let [key, value] of formData.entries()) {
    dataSubmit[key] = value;
  }
  window.location.href = "thanks.html"; //redirect to second page

  //print result in console
  for (const [name, value] of formData.entries()) {
    console.log(name, value);
  }
});
