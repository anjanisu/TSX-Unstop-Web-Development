document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for nav links
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    const contactMessage = document.getElementById('contact-message');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate form submission
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            contactMessage.classList.remove('d-none', 'alert-danger');
            contactMessage.classList.add('alert-success');
            contactMessage.textContent = 'Message sent successfully!';
            contactForm.reset();
        } else {
            contactMessage.classList.remove('d-none', 'alert-success');
            contactMessage.classList.add('alert-danger');
            contactMessage.textContent = 'Please fill out all fields.';
        }

        // Hide message after 3 seconds
        setTimeout(() => {
            contactMessage.classList.add('d-none');
        }, 3000);
    });
});