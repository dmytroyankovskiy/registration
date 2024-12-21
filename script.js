const authForm = document.getElementById('authForm');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const showPassword = document.getElementById('showPassword');
const submitButton = document.getElementById('submitButton');

const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

const namePattern = /^[A-ZА-ЯЇЄІ][a-zа-яїєі']+$/;
const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

const validateField = (field, pattern, errorElement, errorMessage) => {
    if (!field.value) {
        errorElement.textContent = 'Поле обов\'язкове для заповнення';
        field.classList.add('invalid');
        field.classList.remove('valid');
        return false;
    } else if (!pattern.test(field.value)) {
        errorElement.textContent = errorMessage;
        field.classList.add('invalid');
        field.classList.remove('valid');
        return false;
    } else {
        errorElement.textContent = '';
        field.classList.add('valid');
        field.classList.remove('invalid');
        return true;
    }
};

const validateForm = () => {
    const isFirstNameValid = validateField(firstName, namePattern, firstNameError, "Має починатися з великої літери та містити лише букви");
    const isLastNameValid = validateField(lastName, namePattern, lastNameError, "Має починатися з великої літери та містити лише букви");
    const isEmailValid = validateField(email, emailPattern, emailError, "Невірний формат e-mail");
    const isPasswordValid = validateField(password, passwordPattern, passwordError, "Пароль повинен містити щонайменше 8 символів, одну велику літеру, одну маленьку літеру, одну цифру та один спеціальний символ");

    submitButton.disabled = !(isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid);
};

firstName.addEventListener('input', validateForm);
lastName.addEventListener('input', validateForm);
email.addEventListener('input', validateForm);
password.addEventListener('input', validateForm);

showPassword.addEventListener('change', () => {
    password.type = showPassword.checked ? 'text' : 'password';
});

authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!submitButton.disabled) {
        console.log({
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value
        });
        alert('Дані форми відправлено!');
    }
});
