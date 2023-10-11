"use strict";

window.addEventListener("DOMContentLoaded", () => {
  // Select items from DOM
  const pLength = document.querySelector("#length");
  const slide = document.querySelector("#slide");
  const lower = document.querySelector("#lower");
  const upper = document.querySelector("#upper");
  const number = document.querySelector("#number");
  const symbol = document.querySelector("#symbols");
  const generate = document.querySelector("#generate");
  let password = document.querySelector("#password");

  // Sync input and slide
  pLength.value = slide.value;

  slide.oninput = function () {
    pLength.value = this.value;
  };

  pLength.oninput = function () {
    slide.value = this.value;
  };

  // Password Characters
  const selectLower = "abcdefghijklmnopqrstuvwxyz";
  const selectUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const selectNum = "0123456789";
  const selectSym = "!@#$%^&*()[]{}+-*/=;:<>,.?~`|\\_'\"";

  // Generate the password
  generate.addEventListener("click", () => {
    let selected = "";

    // Check if checkbox is checked
    lower.checked ? (selected += selectLower) : "";
    upper.checked ? (selected += selectUpper) : "";
    number.checked ? (selected += selectNum) : "";
    symbol.checked ? (selected += selectSym) : "";

    let result = "";
    for (let i = 0; i < pLength.value; i++) {
      // Create random numbers from 'selected'
      const calc = Math.round(Math.random() * selected.length - 1);

      // Select charcters at index of the random numbers
      result += selected.charAt(Math.abs(calc));
    }

    // Display result in the DOM
    password.innerText = result;
  });
});
