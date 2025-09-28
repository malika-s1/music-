const quotes = [
  "Учение — свет, а неучение — тьма.",
  "Каждый эксперт когда-то был новичком.",
  "Лучшее время начать было вчера. Второе лучшее — сегодня.",
  "Трудности делают нас сильнее.",
  "Кто не делает ошибок, тот ничего не делает.",
  "Великие дела начинаются с маленьких шагов.",
  "Не бойся медленного пути, бойся стоять на месте."
];

const quoteEl = document.getElementById("quote");
const button = document.getElementById("new-quote");

function newQuote() {
  quoteEl.style.opacity = 0; 
  setTimeout(() => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    quoteEl.textContent = random;
    quoteEl.style.opacity = 1; 
  }, 400);
}

button.addEventListener("click", newQuote);
