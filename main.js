const form = document.getElementById('form');
const first_name = document.getElementById('first_name');
const last_name = document.getElementById('last_name');
const email = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('submit', (evt) => {
    evt.preventDefault();

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
    setError(email, 'Email cannot be empty');
   } else if (!validEmail(emailValue)) {
    setError(email, 'Looks like this is not an email');
   } else {
    // Add success class
    setSuccess(email)
   }

   if(passwordValue === '') {
    setError(password, 'password field cannot be empty');
   } else if (passwordValue.length < 8 ) {
    setError(password, 'Password is too short')
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
    formControl.style.marginBottom = '1.2rem';
}

function setSuccess(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    formControl.style.marginBottom = '0';

}

function validEmail(email) {
    return /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)
}



