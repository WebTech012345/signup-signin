document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const forms = document.querySelectorAll('.box');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const targetForm = this.getAttribute('data-target');
            if (targetForm) {
                toggleForm(targetForm);
            } else {
                togglePassword(this.previousElementSibling.id);
            }
        });
    });

    const lastSelectedForm = localStorage.getItem('lastSelectedForm');
    if (lastSelectedForm) {
        toggleForm(lastSelectedForm);
    } else {
        toggleForm('signin');
    }

    function toggleForm(targetForm) {
        forms.forEach(form => {
            if (form.id === targetForm + '-form') {
                form.classList.remove('is-hidden');
            } else {
                form.classList.add('is-hidden');
            }
        });
        localStorage.setItem('lastSelectedForm', targetForm);
    }
});

function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
    input.setAttribute('type', type);
}

function validateSignIn() {
    var input = document.getElementById('signin-email-phone').value.trim();
    var errorSpan = document.getElementById('signin-error');

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneRegex = /^[0-9]{10}$/;

    if (emailRegex.test(input) || phoneRegex.test(input)) {
        errorSpan.textContent = '';
        return true;
    } else {
        errorSpan.textContent = 'Please enter a valid email or phone number.';
        return false;
    }
}

function validateSignUp() {
    var password = document.getElementById('signup-password').value;
    var confirmPassword = document.getElementById('signup-confirm-password').value;
    var passwordMatchError = document.getElementById('password-match-error');

    if (password !== confirmPassword) {
        passwordMatchError.textContent = "Passwords do not match.";
        return false;
    } else {
        passwordMatchError.textContent = "";
        return true;
    }
}
