import { setAccessToken } from "../accessToken.mjs";
import { LOGIN_API_URL } from "../constants.mjs";
import { doFetch } from "../fetch.mjs";

const form = document.querySelector("#form-login");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  loginUser();
});

async function loginUser() {
  // Get the elements
  const emailField = document.querySelector("#email");
  const passwordField = document.querySelector("#password");

  // Create an object with the values
  const userValues = {
    email: emailField.value,
    password: passwordField.value,
  };

  const fetchOptions = {
    method: "POST",
    body: JSON.stringify(userValues),
  };

  // Do the POST request
  try {
    const result = await doFetch(LOGIN_API_URL, fetchOptions);

    const accessToken = result.accessToken;

    setAccessToken(accessToken);
    setTimeout(() => {
      window.location.href = "/feed.html";
    }, 3000);
  } catch (error) {
    console.log(error);
  }
}
