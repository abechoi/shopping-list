import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
import { getDatabase, ref, push } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'

import { getEnv } from "./env.js"
const env = getEnv()
const appSettings = {
    databaseURL: env.DB_URL
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingRef = ref(database, 'shopping-list');

// create an event listener to console log the text value from id="input-fields" when id="add-button" is clicked
const inputField = document.getElementById("input-field")
const addButton = document.getElementById("add-button")
const shoppingList = document.getElementById("shopping-list")

function clearInputField() {
    inputField.value = "";
}

function addItem(item) {
    shoppingList.innerHTML += `<li>${item}</li>`
}

addButton.addEventListener("click", function() {
    let inputValue = inputField.value
    push(shoppingRef, inputValue)
    console.log(`${inputValue} added to the database`)

    addItem(inputValue)
    console.log(`${inputValue} added to the ui`)

    clearInputField()
})
