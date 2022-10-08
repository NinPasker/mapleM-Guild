// targeting the checkbox to find the checked element

const checkbox = document.querySelectorAll('input[type=checkbox]');

console.log(checkbox.length);

// targeting the button to enable it when a condition is met

const button = document.getElementById('check-button');

console.log(button);

// creating an array to store the selections

const userSelectionArr = [];

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