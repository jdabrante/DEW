function generate() {
    let length = document.getElementById("length").value;
    let max = document.getElementById("max").value;
    let min = document.getElementById("min").value;
    let arr = new Array()
    for (let i=0; i <= length; i++){
        arr[i] = Math.floor(Math.random() * (max - min) + min)
    }
    document.getElementById("result").innerHTML = (arr.sort()).join()
    let random;
    let new_arr = []
    while (arr.length > 0) {
        random = Math.floor(Math.random() * arr.length)
        new_arr.push(arr.splice(random, 1))
    }
    document.getElementById("deresult").innerHTML = new_arr.join()
}

