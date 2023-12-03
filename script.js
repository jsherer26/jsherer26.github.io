document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const questionInput = document.getElementById("question");

    form.addEventListener("submit", function (event) {
        // Initialize an array to store error messages
        const errors = [];

        // Validation for username (minimum length of 1 character)
        if (nameInput.value.length < 1) {
            errors.push("Please enter a name.");
        }

        // Validation for email (must be a valid email format)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            errors.push("Please enter a valid email address.");
        }

        //Validation for question (minimum length of 1 character)
        if(questionInput.value.length < 1) {
            errors.push("Please enter a question.")
        }

        // If there are errors, prevent form submission and display them
        if (errors.length > 0) {
            event.preventDefault(); // Prevent form submission
            alert(errors.join("\n")); // Display error messages in an alert
        }
    });
})