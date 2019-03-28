// Variables
const sendBtn = document.getElementById('sendBtn'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message'),
      resetBtn = document.getElementById('resetBtn'),
      sendEmailForm = document.getElementById('email-form');


// EventListener
eventListeners();

function eventListeners() {
    // app init
    document.addEventListener('DOMContentLoaded', appInit);

    // validate the form
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);

    // send email & reset button
    sendEmailForm.addEventListener('submit', sendEmail);
    resetBtn.addEventListener('click', resetForm);
}

// Functions 

// App Initialization 
function appInit() {
    sendBtn.disabled = true;
};

// function send email
function sendEmail(e) {
    e.preventDefault();

    // show the spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'block';

    // show the image  
    const sendEmailImg = document.createElement('img');
    sendEmailImg.src = 'img/mail.gif';
    sendEmailImg.style.display = 'block';

    // hide spinner than show the send image 
    setTimeout(function(){
        // hide the spinner
        spinner.style.display = 'none';
        if(spinner.style.display == 'none') {
            let loader = document.getElementById('loaders');
            loader.appendChild(sendEmailImg);
        }
        // after 5 seconds, hide the image and reset the form
        setTimeout(function(){
            sendEmailForm.reset();
            sendEmailImg.remove();
        }, 5000);
    }, 3000);
}

// validate the fields
function validateField() {
    let errors;

    // validate the length of the field
    validateLength(this);

    // validate the email
    if(this.type === 'email') {
        validateEmail(this);
    }

    // both will return errors, then check if there're any errors 
    errors = document.querySelectorAll('.error');

    // check that the inputs are not empty
    if(email.value !== '' && subject.value !== '' && message.value !== '') {
        if(errors.length === 0) {
            // the button should enabled 
            sendBtn.disabled = false;
        }
    }
}

// Validate the Length of the fields 
function validateLength(field) {
    if(field.value.length > 0) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

// validate email (checks for @ in the value)
function validateEmail(field) {
    let emailText = field.value;
    // check if the emailText contains the @ sign
    if(emailText.indexOf('@') != -1) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

// reset the form
function resetForm(){
    sendEmailForm.reset();
}

// const proba = {
//     name: 'Juan',
//     balance: 1000,
//     membership: function() {
//         let upLvl;

//         if(this.balance > 1000){
//             upLvl = 'Platinum';
//         } else if(this.balance > 500){
//             upLvl = 'Gold';
//         } else {
//             upLvl = 'Silver';
//         }
//         return upLvl;
//     }
// }
// console.log(proba);
// console.log(proba.name);
// console.log(proba.balance);
// console.log(proba.membership());