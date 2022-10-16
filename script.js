// Reusable Variables

// targeting the checkbox to find the checked element
const checkbox = document.querySelectorAll('input[type=checkbox]');

// targeting the button to enable it when a condition is met
const button = document.getElementById('check-button');

// targeting the inputs with text fields
const textInput = document.querySelectorAll('input[type=text]');

// targeting the selction options, to add interactivity
const options = document.querySelectorAll('option');

//targeting the textarea to be able to enable it
const textarea = document.querySelector('textarea');

// creating an array to store the selections from index checklist
const userSelectionArr = [];


// looping through the checkbox element to find out if the checkboxes are checked or not and adding it to the array if it is checked, and removing if a checkbox is unchecked 

// Index page checklist js functionality, using a forEach loop and adding an eventListener to enable checking of each input selected
checkbox.forEach(element => {
    element.addEventListener('input', function() {
        if (element.checked === true) {
            userSelectionArr.push(element.checked);
            if (checkbox.length === userSelectionArr.length) {
                button.disabled = false;
            }
        } else if (element.checked === false) {
            userSelectionArr.pop(element.checked);
            if (checkbox.length != userSelectionArr.length) {
                button.disabled = true;
            }
        }
    });
});


// CONTACT US JAVASCRIPT

options.forEach(option => {
    option.addEventListener('click', function() {
        if (option.value === 'other') {
            textarea.disabled = false;
        } else {
            textarea.disabled = true;
        }
    });
});