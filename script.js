"use strict";

// Select ALL input fields
const form = document.querySelector("form");
const allInputs = document.querySelectorAll("input");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorMessageArr = document.querySelectorAll(".error-message");
const submitBtn = document.getElementById("submit-btn");

// Object of types of error messages
const errors = {
  firstName: "First Name cannot be empty",
  lastName: "Last Name cannot be empty",
  email: "Looks like this is not an email",
  password: "Password cannot be empty",
};

// Add event to the submit button
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let formValid = false;

  allInputs.forEach((el) =>
    el.value === "" ? el.classList.add("error") : el.classList.remove("error"),
  );

  errorMessageArr.forEach((el) => {
    if (el.previousElementSibling.classList.contains("error")) {
      if (el.previousElementSibling.getAttribute("id") === "email") {
        email.classList.add("email-placeholder");
        email.placeholder = "example@email.com";
      }

      el.style.display = "block";
      el.textContent =
        errors[`${el.previousElementSibling.getAttribute("id")}`];
    } else {
      el.style.display = "none";
      form.submit;
    }
  });

  if (!email.checkValidity()) {
    email.classList.add("error");
    email.nextElementSibling.style.display = "block";
  }

  Array.from(allInputs).some((input) => {
    input.classList.contains("error")
      ? (formValid = false)
      : (formValid = true);
  });

  formValid ? form.submit("Form Submitted") : "";
});
