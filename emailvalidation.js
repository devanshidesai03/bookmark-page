function addClass(el, cl) {
  el.classList.add(cl);
}

function removeClass(el, cl) {
  el.classList.remove(cl);
}

const email = document.getElementById("form__email");
const form = document.getElementById("form");
const errorContent = document.querySelector(".newsletter__form--error");
const blankField = document.querySelector(".newsletter__blank");
const errorIcon = document.querySelector(".icon-error");

form.addEventListener("submit", function(e) {
  if (emailIsValid(email.value) === false) {
    e.preventDefault();

    addClass(errorIcon, "active");
    addClass(errorContent, "active");
    addClass(email, "error");
    errorContent.setAttribute("role", "alert");



  }
});

function emailIsValid(email) {
  return/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}