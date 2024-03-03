document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector("#registrationForm");
    const errorMessages = document.querySelector('.error-messages');

    const displayErrorMessage = message => {
        errorMessages.textContent = message;
    };

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const fname = document.querySelector('#fname').value.trim();
        const lname = document.querySelector('#lname').value.trim();
        const email = document.querySelector('#email').value.trim();
        const password = document.querySelector('#password').value.trim();
        const confirmPassword = document.querySelector('#confirmPassword').value.trim();

        const validateForm = () => {
            if (!fname || !lname || !email || !password || !confirmPassword) {
                displayErrorMessage('Please fill in all fields');
                return false;
            }
            if (!/\S+@\S+\.\S+/.test(email)) {
                displayErrorMessage('Please enter a valid email address');
                return false;
            }
            if (password.length < 8 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
                displayErrorMessage('Password must be at least 8 characters long and contain both letters and numbers');
                return false;
            }
            if (password !== confirmPassword) {
                displayErrorMessage('Passwords do not match');
                return false;
            }
            displayErrorMessage('');
            return true;
        };

        if (validateForm()) {
            alert('Form submitted successfully');
        }
    });
});
