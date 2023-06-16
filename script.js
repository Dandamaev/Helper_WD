const timerDisplays = document.querySelectorAll('.time-display');
const startButtons = document.querySelectorAll('.start-button');
const resetButtons = document.querySelectorAll('.reset-button');

let countdowns = [];
let secondsRemainingList = [1500, 300, 900]; // 25 minutes, 5 minutes, 15 minutes

function displayTime(displayElement, seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const display = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  displayElement.textContent = display;
}

function startTimer(timerIndex) {
  if (countdowns[timerIndex]) return; // Timer is already running
  countdowns[timerIndex] = setInterval(() => {
    secondsRemainingList[timerIndex]--;
    displayTime(timerDisplays[timerIndex], secondsRemainingList[timerIndex]);

    if (secondsRemainingList[timerIndex] === 0) {
      clearInterval(countdowns[timerIndex]);
      countdowns[timerIndex] = null;
      alert('Time is up!');
    }
  }, 1000);
}

function resetTimer(timerIndex) {
  clearInterval(countdowns[timerIndex]);
  countdowns[timerIndex] = null;
  secondsRemainingList[timerIndex] = [1500, 300, 900][timerIndex]; // Reset to the initial value
  displayTime(timerDisplays[timerIndex], secondsRemainingList[timerIndex]);
}

startButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    startTimer(index);
  });
});

resetButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    resetTimer(index);
  });
});
