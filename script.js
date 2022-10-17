// Reusable Variables

// targeting the checkbox to find the checked element
const checkbox = document.querySelectorAll('input[type=checkbox]');

// targeting the button to enable it when a condition is met
const button = document.getElementById('check-button');

// targeting the inputs with text fields
const textInput = document.querySelectorAll('input[type=text]');

// targeting the select element by id, to listen for a change event in the form
const selectReason = document.getElementById('reason');

//targeting the textarea to be able to enable it
const textarea = document.querySelector('textarea');

// creating an array to store the selections from index checklist
const userSelectionArr = [];

// Index Javascript

// looping through the checkbox element to find out if the checkboxes are checked or not and adding it to the array if it is checked, and removing if a checkbox is unchecked 
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


// Contact Javascript

selectReason.addEventListener('change', function() {
    if (this.value === 'other') {
        textarea.disabled = false;
    } else {
        textarea.disabled = true;
    }
})