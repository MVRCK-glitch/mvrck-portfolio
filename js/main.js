document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       1. ACTIVE LINK HIGHLIGHTING
    ========================= */
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });


    /* =========================
       2. FORM VALIDATION ONLY
    ========================= */
    const form = document.querySelector(".contact-form");

    const nameInput = document.querySelector("input[name='name']");
    const emailInput = document.querySelector("input[name='email']");
    const messageInput = document.querySelector("textarea[name='message']");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    if (form) {
        form.addEventListener("submit", function (e) {

            let valid = true;

            let name = nameInput.value.trim();
            let email = emailInput.value.trim();
            let message = messageInput.value.trim();

            /* Clear previous errors */
            if (nameError) nameError.textContent = "";
            if (emailError) emailError.textContent = "";
            if (messageError) messageError.textContent = "";

            /* Validate Name */
            if (name.length < 3) {
                nameError.textContent = "Name must be at least 3 characters";
                valid = false;
            }

            /* Validate Email */
            if (!email.includes("@") || !email.includes(".")) {
                emailError.textContent = "Enter a valid email";
                valid = false;
            }

            /* Validate Message */
            if (message.length < 10) {
                messageError.textContent = "Message must be at least 10 characters";
                valid = false;
            }

            /* Stop form if invalid */
            if (!valid) {
                e.preventDefault();
            }

        });
    }

});