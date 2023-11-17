// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Example: Displaying the current year in the footer
    const yearSpan = document.querySelector('#current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Additional JavaScript can be added here
});
