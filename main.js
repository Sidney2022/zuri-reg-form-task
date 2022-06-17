const form = document.getElementById('form');
const first_name = document.getElementById('first_name');
const last_name = document.getElementById('last_name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const mainf =document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});



function checkInputs() {
    // Get Value
   const first_nameValue = first_name.value.trim();
   const last_nameValue = last_name.value.trim();
   const emailValue = email.value.trim();
   const passwordValue = password.value.trim();

   if(first_nameValue === '') {
    setError(first_name, 'First Name cannot be empty');
   } else {
    // Add success class
    setSuccess(first_name)
   }

   if(last_nameValue === '') {
    setError(last_name, 'Last Name cannot be empty');
   } else {
    // Add success class
    setSuccess(last_name)
   }

   if(emailValue === '') {
    setError(email, 'Email Name cannot be empty');
   } else {
    // Add success class
    setSuccess(email)
   }

   if(passwordValue === '') {
    setError(password, 'password field cannot be empty');
   } else {
    // Add success class
    setSuccess(password)
   }
}

function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccess(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
