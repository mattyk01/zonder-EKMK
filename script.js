// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Show success message if form was submitted
if (window.location.search.includes('success=true')) {
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('success-msg');
  if (form && successMsg) {
    // Hide the form fields
    form.querySelectorAll('.row, input, textarea, .submit-btn').forEach(el => {
      el.style.display = 'none';
    });
    // Show success message
    successMsg.style.display = 'block';
    successMsg.style.textAlign = 'center';
    successMsg.style.padding = '40px 20px';
    successMsg.style.fontSize = '18px';
    // Scroll to contact section smoothly
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    // Remove success parameter from URL
    window.history.replaceState({}, '', window.location.pathname);
  }
}
