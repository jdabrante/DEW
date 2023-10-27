
const target_date = document.getElementById('date-time').value;

let button = document.getElementById('button');
let crono;

function start_countdown() {
    if (!crono) {
        crono = setInterval(calculate, 1000)
    }
}



function countdown() {
    let target_milisenconds = (new Date(target_date)).getTime();
    let current_miliseconds = Date.now();
    let remaining_time = target_milisenconds - current_miliseconds;
    let days = Math.floor(ms / (24*60*60*1000));
    let daysms = ms % (24*60*60*1000);
    let hours = Math.floor(daysms / (60*60*1000));
    let hoursms = ms % (60*60*1000);
    let minutes = Math.floor(hoursms / (60*1000));
    let minutesms = ms % (60*1000);
    let sec = Math.floor(minutesms / 1000);
}


