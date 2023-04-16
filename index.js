// create an event listener to console log the text value from id="input-fields" when id="add-button" is clicked
const inputField = document.getElementById("input-field")
const addButton = document.getElementById("add-button")

addButton.addEventListener("click", function() {
    let inputValue = inputField.value;
    console.log(inputValue);
})
