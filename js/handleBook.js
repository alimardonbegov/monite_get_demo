const form = document.querySelector("#myForm");
const saveBtn = document.querySelector("#bookBtn");
const title = document.querySelector("#title");

let dataBook = {};

saveBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const formData = new FormData(form); //save data
  for (let [key, value] of formData.entries()) {
    dataBook[key] = value;
  }
  window.location.href = "submit.html"; //redirect to second page

  //print result in console
  for (const [name, value] of formData.entries()) {
    console.log(name, value);
  }
});
