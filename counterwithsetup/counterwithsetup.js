let countdown;
let count = 300; // Initial count (5 minutes)

const countlabel = document.getElementById('countlabel');
const countslider = document.getElementById('countslider');
const countinput = document.getElementById('countinput');
const startbtn = document.getElementById('startbtn');
const resetbtn = document.getElementById('resetbtn');
const targetTimeInput = document.getElementById('targetTimeInput');

function updateTimeDisplay() {
    let minutes = Math.floor(count / 60);
    let seconds = count % 60;
    let hours = Math.floor(minutes / 60);
    minutes = minutes % 60;

    if (hours > 0) {
        countlabel.textContent = `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    } else if (minutes > 0) {
        countlabel.textContent = `${minutes}:${String(seconds).padStart(2, '0')}`;
    } else {
        countlabel.textContent = `${seconds}`;
    }
}

updateTimeDisplay();

countslider.oninput = function() {
    count = parseInt(countslider.value, 10);
    countinput.value = count;
    updateTimeDisplay();
};

countinput.oninput = function() {
    count = parseInt(countinput.value, 10);
    countslider.value = count;
    updateTimeDisplay();
};

function setTargetTime() {
    const targetTime = targetTimeInput.value;
    if (!targetTime.match(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)) { // Basic time format validation
        alert("Invalid time format. Please use HH:MM.");
        return;
    }

    const targetDate = new Date();
    const [targetHour, targetMinute] = targetTime.split(':').map(num => parseInt(num, 10));
    targetDate.setHours(targetHour);
    targetDate.setMinutes(targetMinute);
    targetDate.setSeconds(0);

    const currentTime = new Date();
    let timeDifference = Math.floor((targetDate - currentTime) / 1000);
    if(timeDifference < 0){
        timeDifference = 0;
        alert("Target time is in the past. Countdown set to 0.");
    }

    count = timeDifference;

    countslider.value = count;
    countinput.value = count;
    updateTimeDisplay();
    startCountdown(); // Start countdown immediately
}

function startCountdown() {
    clearInterval(countdown);
    countdown = setInterval(() => {
        if (count > 0) {
            count--;
            updateTimeDisplay();
        } else {
            clearInterval(countdown);
            triggerAction();
        }
    }, 1000);
}

startbtn.onclick = startCountdown;

resetbtn.onclick = function() {
    clearInterval(countdown);
    count = 300;
    countslider.value = count;
    countinput.value = count;
    updateTimeDisplay();
};

function triggerAction() {
    alert("Time's up!");
}

// Event listener for the target time input
targetTimeInput.addEventListener('change', setTargetTime);