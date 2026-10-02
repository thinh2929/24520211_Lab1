/**
 * Exercise 3: Validated Native Contact Form & State Engine
 * Handles client-side validation, error feedback, and submission state.
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const nameInput = document.getElementById('user-name');
    const emailInput = document.getElementById('user-email');
    const messageInput = document.getElementById('user-message');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const formStatus = document.getElementById('form-status');

    function validateName() {
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        nameInput.classList.add('invalid');
        nameError.textContent = 'Please enter a valid full name (at least 2 characters).';
        return false;
      }
      nameInput.classList.remove('invalid');
      nameError.textContent = '';
      return true;
    }

    function validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
        emailInput.classList.add('invalid');
        emailError.textContent = 'Please enter a valid email address (e.g. user@domain.com).';
        return false;
      }
      emailInput.classList.remove('invalid');
      emailError.textContent = '';
      return true;
    }

    function validateMessage() {
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        messageInput.classList.add('invalid');
        messageError.textContent = 'Message must be at least 10 characters long.';
        return false;
      }
      messageInput.classList.remove('invalid');
      messageError.textContent = '';
      return true;
    }

    // Attach live input listeners for real-time validation feedback
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    messageInput.addEventListener('input', validateMessage);

    // Form submit listener
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isMessageValid = validateMessage();

      if (!isNameValid || !isEmailValid || !isMessageValid) {
        formStatus.className = 'form-status error';
        formStatus.textContent = '⚠️ Please fix the highlighted errors before submitting.';
        return;
      }

      // Simulate successful client-side submission
      formStatus.className = 'form-status success';
      formStatus.textContent = '✅ Message sent successfully! Thank you for reaching out.';

      // Reset form fields
      form.reset();
      [nameInput, emailInput, messageInput].forEach(input => input.classList.remove('invalid'));

      // Clear success message after 5 seconds
      setTimeout(() => {
        formStatus.className = 'form-status';
        formStatus.textContent = '';
      }, 5000);
    });
  });
})();
