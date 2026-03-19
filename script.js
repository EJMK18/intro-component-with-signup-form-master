"use strict";

// Select ALL input fields
const inputFields = document.querySelectorAll("input");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const submitBtn = document.getElementById("submit-btn");

firstName.classList.add("error");

// Object of types of error messages
const errors = {
  firstName: "First Name cannot be empty",
  lastName: "Last Name cannot be empty",
  email: "Looks like this is not an email",
  password: "Password cannot be empty",
};

// Create a database to validate user logins - Add value Section
