function generate() {
    let length = document.getElementById("length").value;
    let max = document.getElementById("max").value;
    let min = document.getElementById("min").value;
    let arr = new Array()
    for (let i=0; i < length; i++){
        arr[i] = Math.floor(Math.random() * (max - min) + min)
    }

    let new_array = [];
    for (let i=0; i < arr.length; i++) {
        new_array.push((Math.sqrt(arr[i])).toFixed(2))
    }
    document.getElementById("result").innerHTML = arr.join()
    document.getElementById("square").innerHTML = new_array.join(", ")
}

