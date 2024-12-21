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

const validateName = (name) => /^[A-ZА-ЯІЇЄҐ][a-zа-яієїґA-ZА-ЯІЇЄҐ]*$/.test(name);
const validateEmail = (email) => /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
const validatePassword = (password) => {
    return (
        password.length >= 8 &&
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /\\d/.test(password) &&
        /[!@#$%^&*]/.test(password)
    );
};

const checkValidity = () => {
    let isValid = true;

    if (!validateName(firstName.value)) {
        firstName.classList.add('invalid');
        firstNameError.textContent = "Має починатися з великої літери та містити лише букви.";
        firstNameError.style.display = 'block';
        isValid = false;
    } else {
        firstName.classList.remove('invalid');
        firstName.classList.add('valid');
        firstNameError.style.display = 'none';
    }

    if (!validateName(lastName.value)) {
        lastName.classList.add('invalid');
        lastNameError.textContent = "Має починатися з великої літери та містити лише букви.";
        lastNameError.style.display = 'block';
        isValid = false;
    } else {
        lastName.classList.remove('invalid');
        lastName.classList.add('valid');
        lastNameError.style.display = 'none';
    }

    if (!validateEmail(email.value)) {
        email.classList.add('invalid');
        emailError.textContent = "Невірний формат e-mail.";
        emailError.style.display = 'block';
        isValid = false;
    } else {
        email.classList.remove('invalid');
        email.classList.add('valid');
        emailError.style.display = 'none';
    }

    if (!validatePassword(password.value)) {
        password.classList.add('invalid');
        passwordError.textContent = "Пароль має містити щонайменше одну велику літеру, одну маленьку літеру, одну цифру та один спеціальний символ.";
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        password.classList.remove('invalid');
        password.classList.add('valid');
        passwordError.style.display = 'none';
    }

    submitButton.disabled = !isValid;
};

firstName.addEventListener('input', checkValidity);
lastName.addEventListener('input', checkValidity);
email.addEventListener('input', checkValidity);
password.addEventListener('input', checkValidity);

showPassword.addEventListener('change', () => {
    password.type = showPassword.checked ? 'text' : 'password';
});

document.getElementById('registrationForm').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value
    });
    alert('Дані успішно надіслані!');
});
