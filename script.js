const myForm = document.getElementById("myForm");
const outputDiv = document.getElementById("output");

myForm.addEventListener('submit', (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confPassword = document.getElementById("confPassword").value;

    if (name === "" || email === "" || password === "" || confPassword === "") {
        outputDiv.textContent = "Усі поля повинні бути заповнені!";
        return;
    }

    if (!email.includes("@")) {
        outputDiv.textContent = "Email повинен містити символ @";
        return;
    }

    if (password.length < 6) {
        outputDiv.textContent = "Пароль повинен містити мінімум 6 символів";
        return;
    }

    if (password !== confPassword) {
        outputDiv.textContent = "Паролі не співпадають!";
        return;
    }

    outputDiv.textContent = "Реєстрація успішна!";
});