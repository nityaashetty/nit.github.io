const button = document.getElementById('confettiBtn');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 }
  });
  message.textContent = "Yay! Bad thing noted!";
});
