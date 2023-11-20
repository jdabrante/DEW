function generate() {
    let length = document.getElementById("length").value;
    let max = document.getElementById("max").value;
    let min = document.getElementById("min").value;
    let arr = new Array()
    for (let i=0; i <= length; i++){
        arr[i] = Math.floor(Math.random() * (max - min) + min)
    }
    document.getElementById("result").innerHTML = arr.join()
}

