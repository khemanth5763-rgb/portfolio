// 1. Wait for the page to finish loading
document.addEventListener('DOMContentLoaded', () => {

    // 2. "Hire Me" Button Alert
    const hireBtn = document.getElementById('hire-me-btn');
    
    hireBtn.addEventListener('click', () => {
        alert("Thanks for clicking! I'm currently looking for new opportunities. Let's chat!");
    });

    // 3. Contact Form Validation
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (event) => {
        // Prevent the form from actually "sending" and refreshing the page
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (name === "" || email === "") {
            alert("Please fill in both your name and email!");
        } else {
            alert(`Thank you, ${name}! Your message has been "sent" (simulated).`);
            contactForm.reset(); // Clears the form fields
        }
    });
});