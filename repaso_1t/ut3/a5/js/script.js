let start_crono;
let sec = 0;
let min = 0;
let hour = 0;

function start(){
    if (!start_crono) {
        start_crono = setInterval(count, 1000)
    }
}

function stop(){
    if (start_crono) {
        clearInterval(start_crono)
        start_crono = null;
    }
}

function restart() {
    stop();
    let crono = document.getElementById("crono");
    sec = 0;
    min = 0;
    hour = 0;
    crono.value = `${String(hour).padStart(2,'0')}:${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`
    document.getElementById("title").innerHTML = crono.value
}



function count() {
    let crono = document.getElementById("crono");
    if (sec < 59) {
        sec += 1
    } else if ( min < 59){
        sec = 0;
        min += 1
    } else {
        min = 0;
        hour += 1;
    }
    crono.value = `${String(hour).padStart(2,'0')}:${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`
    document.getElementById("title").innerHTML = crono.value
}