const timer = document.getElementById("timer");

let intervalId = setInterval(function() {
  if (timer.textContent > 0) {
    timer.textContent -= 1;
  } else {
    clearInterval(intervalId);
    alert("Вы победили в конкурсе!");
  }
}, 1000);