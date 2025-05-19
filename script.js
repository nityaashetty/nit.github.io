const button = document.getElementById('confettiBtn');
const resetButton = document.getElementById('resetBtn');
const message = document.getElementById('message');
const countSpan = document.getElementById('count');

let count = 0;

button.addEventListener('click', () => {
  count++;
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 }
  });
  message.textContent = "Yay! Bad thing noted!";
  countSpan.textContent = count;
});

resetButton.addEventListener('click', () => {
  count = 0;
  message.textContent = "Press the button to note a bad thing!";
  countSpan.textContent = count;
});
