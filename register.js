document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".auth-form");

    form.addEventListener("submit", (event) => {
        // Get form fields
        const nameField = document.getElementById("name");
        const emailField = document.getElementById("email");
        const phoneField = document.getElementById("phone");
        const passwordField = document.getElementById("password");

        const name = nameField.value.trim();
        const email = emailField.value.trim();
        const phone = phoneField.value.trim();
        const password = passwordField.value;

        // Validation flags
        let isValid = true;

        // Name validation
        if (!/^[a-zA-Z\s]{6,}$/.test(name)) {
            isValid = false;
            alert("Name must contain only alphabets and be at least 6 characters long.");
            nameField.focus();
        }

        // Email validation
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            isValid = false;
            alert("Please enter a valid email address (e.g., name@domain.com).");
            emailField.focus();
        }

        // Phone number validation
        if (!/^\d{10}$/.test(phone)) {
            isValid = false;
            alert("Phone number must contain exactly 10 digits.");
            phoneField.focus();
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
