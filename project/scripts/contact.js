document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    // Load form data from localStorage if available
    function loadFormData() {
        const name = localStorage.getItem("contact_name");
        const email = localStorage.getItem("contact_email");
        const message = localStorage.getItem("contact_message");

        if (name) {
            document.getElementById("name").value = name;
        }
        if (email) {
            document.getElementById("email").value = email;
        }
        if (message) {
            document.getElementById("message").value = message;
        }
    }

    // Save form data to localStorage
    function saveFormData() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        localStorage.setItem("contact_name", name);
        localStorage.setItem("contact_email", email);
        localStorage.setItem("contact_message", message);
    }

    // Clear form data from localStorage
    function clearFormData() {
        localStorage.removeItem("contact_name");
        localStorage.removeItem("contact_email");
        localStorage.removeItem("contact_message");
    }

    // Load data when the page is loaded
    loadFormData();

    // Save data to localStorage on form submit
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        saveFormData();
        alert("Form submitted and data saved locally!");
        contactForm.reset();
        clearFormData(); // Clear localStorage data after submission
    });

    // Save form data to localStorage on input change
    contactForm.addEventListener("input", saveFormData);
});
