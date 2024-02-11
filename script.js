document.addEventListener('DOMContentLoaded', function() {
    const buttonYes = document.getElementById('valentineBtn');
    const buttonNo = document.getElementById('noBtn');
    const loveReasons = document.getElementById('loveReasons');
    const responseMessage = document.getElementById('responseMessage');

    buttonYes.addEventListener('click', function() {
        createConfetti(); // Create confetti and hearts
        buttonYes.style.display = 'none'; // Optionally hide the "Yes" button
        responseMessage.innerText = "Yay! You've made me the happiest!"; // Display a positive message
        loveReasons.style.display = 'block'; // Show the "Reasons I Love You" section
    });

    buttonNo.addEventListener('click', function() {
        // Display a mad face and a humorous message
        responseMessage.innerHTML = "😡😡😡😡Too bad, you're gonna get it tonight!😡";
        buttonNo.style.display = 'none'; // Optionally hide the "No" button
    });
});

function createConfetti() {
    const confettiCount = 100;
    const heartCount = 20; // Adjust counts as desired
    const colors = ['#ff0', '#f0f', '#0ff', '#0f0']; // Example colors

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${Math.floor(Math.random() * 100)}vw`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`; // Randomize fall speed
        confetti.style.top = `${Math.floor(Math.random() * 20) - 10}vh`; // Start from different heights
        document.body.appendChild(confetti);
    }

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '❤';
        heart.style.left = `${Math.floor(Math.random() * 100)}vw`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`; // Randomize fall speed
        heart.style.top = `${Math.floor(Math.random() * 20) - 10}vh`; // Start from different heights
        document.body.appendChild(heart);
    }
}
