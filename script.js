// This script handles form validation, submission, and UI state management

// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('newsletter-form'); // Main subscription form
  const emailInput = document.getElementById('email');// Email input field
  const errorMessage = document.getElementById('error-message');  // Container for validation error messages
  const formSection = document.querySelector('.form-section');  // Form section 
  const successSection = document.querySelector('.success-section');// Success message section 
  const userEmailSpan = document.getElementById('user-email');   // Span to display user's email in success message
  const dismissButton = document.getElementById('dismiss'); // Button to dismiss success message


  //Form submission handler
  form.addEventListener('submit', function(e) {
     // Prevent default form submission (page refresh)
    e.preventDefault();

     // Get and clean the email value (remove leading/trailing spaces)
    const email = emailInput.value.trim();


    //Form validation

    //Check if email field is empty
    if (!email) {
      showError('Email address is required');
      return;
    }

    //Check if email format is valid
    if (!isValidEmail(email)) {
      showError('Valid email required');
      return;
    }

    // Success
    userEmailSpan.textContent = email; //  Display the submitted email in the success message
    formSection.classList.add('hidden'); // Hide the form section by adding 'hidden' class
    successSection.classList.remove('hidden');// Show the success section by removing 'hidden' class
  });

  //Success message dismissal handler

  dismissButton.addEventListener('click', function() {
    successSection.classList.add('hidden');  //  Hide the success section
    formSection.classList.remove('hidden');  // Show the form section again
    form.reset();  // Reset the form to clear the email input
    clearError();  //  Clear any previous error messages/styles
  });

  //Helper functions
  function showError(message) {
    errorMessage.textContent = message;  // Display the error message text
    errorMessage.classList.add('active');  // Show the error message
    emailInput.classList.add('error');
  }

  function clearError() {
    errorMessage.textContent = ''; // Clear the error message text
    errorMessage.classList.remove('active');  // Hide the error message
    emailInput.classList.remove('error');// Remove 'error' CSS class from input field
  }


  // Validates email format using regular expression
  function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]+$/;
    return regex.test(email);
  }

  
});