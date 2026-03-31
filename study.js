let seconds = 0;
let interval = null;

function updateDisplay() {
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;

  document.getElementById("time").innerText =
    `${String(hrs).padStart(2, '0')}:` +
    `${String(mins).padStart(2, '0')}:` +
    `${String(secs).padStart(2, '0')}`;
}

function startTimer() {
  if (interval) return;

  interval = setInterval(() => {
    seconds++;
    updateDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
  interval = null;

  const subject = document.getElementById("subject").value || "General Study";
  const log = document.getElementById("log");

  if (seconds > 0) {
    const li = document.createElement("li");
    li.innerText = `${subject} - ${document.getElementById("time").innerText}`;
    log.appendChild(li);
  }
}

function resetTimer() {
  clearInterval(interval);
  interval = null;
  seconds = 0;
  updateDisplay();
}