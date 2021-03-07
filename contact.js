const form = document.getElementById('form');
const msgContainer = document.querySelector('.msg-container');
const msg = document.getElementById('new');

let isValid = false;

function validateForm() {
    //Using Constraint API
    isValid = form.checkValidity();
    
    //Style main message
    if(isValid) {
    msg.textContent = 'Sign Up Complete!';
    msg.style.color = 'slateblue';
    msg.style.fontSize = '20px';
    msgContainer.style.borderColor = 'green';
    }
}


function storeFormData () {
    const user = {
        name: form.name.value,
        email: form.email.value,
        password: form.password.value
    };
    //Do something with user data
    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    //Validate Form
    validateForm();
    //Submit Data if Valid
    if (isValid) {
        storeFormData();
    }
}

// Event Listener
form.addEventListener('submit', processFormData);