function start() {
    current = Date.now()
    console.log(current)
    target =  (new Date(document.getElementById("date").value)).valueOf()
    console.log(target)
    console.log(((target-current)) / (1000))
}

let start_crono;
let sec = 0;
let min = 0;
let hour = 0;

function start(){
    if (!start_crono) {
        start_crono = setInterval(count, 1000)
    }
}

function count() {
    let crono = document.getElementById("crono");
    if (sec >= 59) {
        sec -= 1
    } else if ( min > 59){
        sec = 59;
        min -= 1
    } else {
        min = 59;
        hour -= 1;
    }
    document.getElementById('countdown').innerHTML = `${String(hour).padStart(2,'0')}:${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`
}