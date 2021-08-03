console.log('project is up')

// 👉 TASK 1- Select the following elements from the DOM:

// A- BUTTONS
const launchButton = document.querySelector('#launchButton');
const confirmButton = document.querySelector('#confirmButton');
const cancelButton = document.querySelector('#cancelButton');

// B- MESSAGES
const successMessage = document.querySelector('.success');
const failureMessage = document.querySelector('.failure');

// C- MODAL
const modal = document.querySelector('.modal');


// 👉 TASK 2- Demo handling click events on button#launchButton, using:
//  A- HTML inside index.html
//      - onclick=""
//  B- The DOM's element.onclick attribute
launchButton.onclick = function() {
    console.log("Only thing is...only one click event per element");
}
//  C- element.addEventListener('click', callback)
//  - Takes in 2 arguments: first is what to listen for, second what to do
launchButton.addEventListener('click', (event) => {
    console.log("We can attach as many as we want!!");
    console.log(event);
    console.log(`
    event type: ${event.type}
    even target: ${event.target.nodeName}`);
});

// document.addEventListener('click', (event) => {
//     if (event.target === launchButton) {
//         console.log("Clicked the launch button!");
//     } else {
//         console.log("Clicked somewhere else...");
//     }
// });

// 👉 TASK 3- Create a function that launches!
// It should open the confirmation modal.
// Add it as an event listener for click events on the launch button.
function launch(event) {
    modal.classList.remove('off');
}

launchButton.addEventListener('click', launch);

// 👉 TASK 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// Add it as a listener for clicks on the confirmation button.
function confirm(event) {
    modal.classList.add('off');
    successMessage.classList.remove('off');
}

confirmButton.addEventListener('click', confirm);

// 👉 TASK 5- Create a function to cancel the launch.
// It should close the modal and display a failure report.
// Add it as a listener for clicks on the cancellation button.


// 👉 TASK 6- Create a function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.


// 👉 TASK 7- Add to ALL ELEMENTS ON THE PAGE an event listener for click events.
// It should console.log the target 🎯 of the event.
// It should also console.log the CURRENT target 🧭 of the event.
// Play with stopPropagation and stopImmediatePropagation.


// 👉 TASK 8- [STRETCH] Create helper functions to make the code
// more readable in tasks 3, 4, 5, 6
function openModal() {

}

function closeModal() {

}

function killReports() {

}


// 👉 TASK 9- [STRETCH] Using the mouseover event on 'document',
// log to the console the X and Y coordinates
// of the mouse pointer, as it moves over the screen.
