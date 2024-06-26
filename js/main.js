document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const forms = document.querySelectorAll('.box');

    // Function to toggle visibility of forms
    toggleButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const targetForm = this.getAttribute('data-target');
            toggleForm(targetForm);
        });
    });

    // Check localStorage for last selected form and display it
    const lastSelectedForm = localStorage.getItem('lastSelectedForm');
    if (lastSelectedForm) {
        toggleForm(lastSelectedForm);
    } else {
        // Default to sign-in form if no last selected form found
        toggleForm('signin');
    }

    // Function to toggle form visibility based on target
    function toggleForm(targetForm) {
        forms.forEach(form => {
            if (form.id === targetForm + '-form') {
                form.classList.remove('is-hidden');
            } else {
                form.classList.add('is-hidden');
            }
        });
        // Store the last selected form in localStorage
        localStorage.setItem('lastSelectedForm', targetForm);
    }
});

// Function to toggle password visibility
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
    input.setAttribute('type', type);
}

// Function to validate sign-in form
function validateSignIn() {
    var input = document.getElementById('signin-email-phone').value.trim();
    var errorSpan = document.getElementById('signin-error');

    // Regular expressions to validate email and phone number
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneRegex = /^[0-9]{10}$/;

    // Check if input matches email or phone number pattern
    if (emailRegex.test(input) || phoneRegex.test(input)) {
        errorSpan.textContent = '';
        return true;
    } else {
        errorSpan.textContent = 'Please enter a valid email or phone number.';
        return false;
    }
}

// Function to validate sign-up form
function validateSignUp() {
    var password = document.getElementById('signup-password').value;
    var confirmPassword = document.getElementById('signup-confirm-password').value;
    var passwordMatchError = document.getElementById('password-match-error');

    // Check if passwords match
    if (password !== confirmPassword) {
        passwordMatchError.textContent = "Passwords do not match.";
        return false;
    } else {
        passwordMatchError.textContent = "";
        return true;
    }
}
