import "./index.css";

const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    // If the form is valid
    // reset the content of error messsage
    emailError.textContent = ""; // reset error message
    emailError.className = "error"; // reset error visual
  } else {
    ShowError();
  }
});

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    ShowError();
    event.prevenDefault();
  }
});

function ShowError() {
  // if there is a value mismatch, i.e if the field is empty
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered 
    ${email.value.length}`;
  }
  emailError.className = "error active";
}
