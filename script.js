const checkbox = document.querySelectorAll('input[type=checkbox]');
// console.log(checkbox.checked);

const form = document.querySelector('form');

console.log(form);

const userSelectionArr = [];

checkbox.forEach(element => {
    element.addEventListener('input', function() {
        console.log(element.checked);
        if (element.checked === true) {
            userSelectionArr.push(element.checked);
        } else {
            console.log('nothings happening');
        }
    });
});


