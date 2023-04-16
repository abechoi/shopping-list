import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

import { getDbUrl } from "./env.js";

const appSettings = {
    databaseURL: getDbUrl()
  }

  const app = initializeApp(appSettings);
  const database = getDatabase(app);
  const moviesInDB = ref(database, 'movies');

  // create an event listener to console log the text value from id="input-fields" when id="add-button" is clicked
  const inputField = document.getElementById("input-field")
  const addButton = document.getElementById("add-button")

  addButton.addEventListener("click", function() {
    let inputValue = inputField.value;
    push(moviesInDB, inputValue)
    console.log(`${inputValue} added to database!`);
  })