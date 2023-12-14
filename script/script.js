const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault;
  const name = document.getElementById('fname');
  alert(`Thank you ${name.value}, this is a test website`);
});