document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const response = document.getElementById('formResponse');

  if (!name || !email || !message) {
    response.textContent = "Please fill in all fields.";
    response.style.color = "red";
  } else {
    response.textContent = `Thanks ${name}, your message has been sent!`;
    response.style.color = "green";
    document.getElementById('contactForm').reset();
  }
});
