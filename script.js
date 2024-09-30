let startTime, updatedTime, difference, interval;
let running = false;

const display = document.getElementById('display');
const laps = document.getElementById('laps');

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', recordLap);

function startTimer() {
  if (!running) {
    startTime = new Date().getTime();
    interval = setInterval(updateTimer, 10);
    running = true;
  }
}

function stopTimer() {
  if (running) {
    clearInterval(interval);
    running = false;
  }
}

function resetTimer() {
  clearInterval(interval);
  display.textContent = '00:00:00';
  laps.innerHTML = '';
  running = false;
}

function recordLap() {
  const lapTime = display.textContent;
  const lapElement = document.createElement('div');
  lapElement.textContent = `Lap: ${lapTime}`;
  laps.appendChild(lapElement);
}

function updateTimer() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;

  const hours = Math.floor(difference / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  display.textContent = 
    `${hours < 10 ? '0' + hours : hours}:` +
    `${minutes < 10 ? '0' + minutes : minutes}:` +
    `${seconds < 10 ? '0' + seconds : seconds}`;
}
