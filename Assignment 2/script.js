// JavaScript functionalities will be added here

// Example: Form validation for the newsletter subscription
document.querySelector('form').addEventListener('submit', function(event) {
    const emailInput = document.querySelector('input[type="email"]');
    if (!emailInput.value) {
        alert('Please enter a valid email address.');
        event.preventDefault(); // Prevent form submission
    }
});
