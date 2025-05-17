let timer = 60;
let currentPeriod = 10001;

function updateTimer() {
  timer--;
  document.getElementById("timer").innerText = "Time left: " + timer + "s";
  if (timer <= 0) {
    timer = 60;
    currentPeriod++;
    updatePeriod();
  }
}
function updatePeriod() {
  const date = new Date();
  const dateStr = date.getFullYear().toString() + 
                  (date.getMonth()+1).toString().padStart(2, '0') + 
                  date.getDate().toString().padStart(2, '0');
  document.getElementById("period").innerText = "Period: " + dateStr + currentPeriod;
  document.getElementById("result").innerText = "New period started! Place your prediction.";
}
function predict(color) {
  const resultColor = ["RED", "GREEN", "BLUE"][Math.floor(Math.random() * 3)];
  let message = `You chose ${color}. Result: ${resultColor}. `;
  message += (color === resultColor) ? "🎉 You Win!" : "😞 You Lose!";
  document.getElementById("result").innerText = message;
}
setInterval(updateTimer, 1000);
updatePeriod();