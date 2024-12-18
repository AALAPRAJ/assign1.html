document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".auth-form");

    form.addEventListener("submit", (event) => {
        // Get form fields
        const nameField = document.getElementById("name");
        const passwordField = document.getElementById("password");

        const name = nameField.value.trim();
        const password = passwordField.value;

        // Validation flags
        let isValid = true;

        // Name validation
        if (!/^[a-zA-Z\s]{6,}$/.test(name)) {
            isValid = false;
            alert("Name must contain only alphabets and be at least 6 characters long.");
            nameField.focus();
        }

        // Password validation
        if (password.length < 6) {
            isValid = false;
            alert("Password must be at least 6 characters long.");
            passwordField.focus();
        }

        // Prevent form submission if validation fails
        if (!isValid) {
            event.preventDefault();
        }
    });
});
