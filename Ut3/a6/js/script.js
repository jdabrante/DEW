let time = document.getElementById("time");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let restart = document.getElementById("restart");

let seconds = 0;
let minutes = 0;
let hours = 0;
let crono;

function start_crono() {
    if (!crono) {
        crono = setInterval(calculate, 1000);
    }
}

function stop_crono() {
    if (crono) {
        clearInterval(crono);
        crono = null;
    }
}

function calculate() {
    if (seconds >= 60) {
        minutes += 1;
        seconds = 0;
    } else if (minutes >= 60) {
        hours += 1;
        minutes = 0;
    } else {
        seconds += 1;
    }
    time.value = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function restart_crono() {
    seconds = 0;
    minutes = 0;
    hours = 0;
}

start.addEventListener("click", start_crono);
stop.addEventListener("click", stop_crono);
restart.addEventListener("click", restart_crono);