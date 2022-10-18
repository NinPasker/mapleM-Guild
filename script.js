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

//targeting the specific input checkbox in contact section
const termsCheckBox = document.getElementById('terms');

//targeting the form to be able to reset it on page exit
const contactForm = document.getElementById('guildRequestForm')

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
                checkInitialValue();
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
// created function to check if the selection option was changed, if not the button does not become enabled
// this function is used in the checkbox foreach loop above
const checkInitialValue = () => {
    if (selectReason.value === 'initial') {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}

// adding a change eventlistener to find out if other was selected to open up the text area.
selectReason.addEventListener('change', function() {
    if (this.value === 'other') {
        textarea.disabled = false;
    } else {
        textarea.disabled = true;
    }

    if (termsCheckBox.checked === true) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
})

addEventListener('beforeunload', function(e) {
    e.preventDefault();
    contactForm.reset();
})