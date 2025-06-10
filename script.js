const form = document.getElementById('registrationForm');
const message = document.getElementById('successMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  message.style.display = 'block';
  form.reset();
});
