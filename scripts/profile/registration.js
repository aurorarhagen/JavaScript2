import { REGISTER_API_URL } from "../constants.mjs";
import { doFetch } from "../fetch.mjs";

const form = document.querySelector("form-registration");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  registerUser();
});

async function registerUser() {
  // Get information from input fields
  const emailField = document.querySelector("#emailReg");
  const nameField= document.querySelector("#nameReg");
  const passwordField = document.querySelector("#passwordReg");

  // Create an object with the values
  const userInput = {
    email: emailField.value,
    name: nameField.value,
    password: passwordField.value,
  };

  const fetchOptions = {
    method: "POST",
    body: JSON.stringify(userInput),
  };

  // Do the POST request
  const result = await doFetch(REGISTER_API_URL, fetchOptions);
  console.log("---result", result);
}
