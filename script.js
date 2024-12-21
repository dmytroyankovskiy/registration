// Отримання елементів форми
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const showPassword = document.getElementById('showPassword');
const submitButton = document.getElementById('submitButton');

// Поля для виведення помилок
const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

// Функції валідації
const validateName = (name) => /^[A-ZА-ЯІЇЄҐ][a-zа-яієїґ]+$/.test(name);
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePassword = (password) =>
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\d/.test(password) &&
    /[!@#$%^&*]/.test(password);

// Перевірка валідності полів
const checkValidity = () => {
    let isValid = true;

    if (!validateName(firstName.value)) {
        firstNameError.textContent = "Ім'я має починатися з великої літери.";
        firstNameError.style.display = 'block';
        isValid = false;
    } else {
        firstNameError.style.display = 'none';
    }

    if (!validateName(lastName.value)) {
        lastNameError.textContent = "Прізвище має починатися з великої літери.";
        lastNameError.style.display = 'block';
        isValid = false;
    } else {
        lastNameError.style.display = 'none';
    }

    if (!validateEmail(email.value)) {
        emailError.textContent = "Невірний формат електронної пошти.";
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    if (!validatePassword(password.value)) {
        passwordError.textContent = "Пароль має бути складним (букви, цифри, символи).";
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }

    submitButton.disabled = !isValid;
};

// Валідація при зміні полів
[firstName, lastName, email, password].forEach((input) =>
    input.addEventListener('input', checkValidity)
);

// Показ/приховування пароля
showPassword.addEventListener('change', () => {
    password.type = showPassword.checked ? 'text' : 'password';
});

// Надсилання форми
document.getElementById('registrationForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Форма успішно надіслана!');
});
