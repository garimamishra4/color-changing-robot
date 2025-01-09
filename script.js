const hands = document.querySelectorAll(".arm");
const eyes = document.querySelectorAll(".eye");
const legs = document.querySelectorAll(".leg");
const container = document.querySelector('.container'); 
const btns = document.querySelectorAll('.btn');

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Change hand color
document.getElementById("handColorButton").addEventListener("click", () => {
  const color = getRandomColor();
  hands.forEach(hand => hand.style.backgroundColor = color);
});

// Change eye color
document.getElementById("eyeColorButton").addEventListener("click", () => {
  const color = getRandomColor();
  eyes.forEach(eye => eye.style.backgroundColor = color);
});

// Change leg color
document.getElementById("legColorButton").addEventListener("click", () => {
  const color = getRandomColor();
  legs.forEach(leg => leg.style.backgroundColor = color);
});

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    container.style.backgroundColor = btn.id; 
  });
});
