// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// "Learn More" Button Alert
document.getElementById('learn-more').addEventListener('click', () => {
    alert('Discover more features coming soon!');
});

// "Sign Up" Button Action
document.getElementById('signup-button').addEventListener('click', () => {
    alert('Sign-up page is under construction!');
});

// Form Submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        this.reset(); // Clear the form
    } else {
        alert('Please fill out all fields.');
    }
});
