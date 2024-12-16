document.addEventListener("DOMContentLoaded", function () {
    console.log("Dribbble Clone Loaded!");

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            alert('Card clicked! You can add more functionality here.');
        });
    });

    const signUpButton = document.querySelector('.btn-primary');
    if (signUpButton) {
        signUpButton.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default behavior for demo purposes
            alert('Sign Up button clicked! Redirect or handle form submission here.');
        });
    }
});
