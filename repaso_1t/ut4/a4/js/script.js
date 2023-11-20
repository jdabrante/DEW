function generate() {
    let length = document.getElementById("length").value;
    let max = document.getElementById("max").value;
    let min = document.getElementById("min").value;
    let arr = new Array()
    for (let i=0; i < length; i++){
        arr[i] = parseInt(Math.random() * (max - min) + min)
    }
    console.log(arr)
    document.getElementById("result").innerHTML = arr.join()
    let arrays = ""
    for (let i=0; i <= arr.length; i++){
        let new_array = Array.from(arr)
        console.log(arr.length)
        if (arr[i] <= -5) {
            new_array.splice(0,1);
            arrays += `<p>${new_array.join()}</p>`;
            console.log(`Se elimina el primero elemento`)
        } else if (arr[i] > -5 && arr[i] <= 0) {
            new_array.pop();
            arrays += `<p>${new_array.join()}</p>`;
            console.log(`Se elimina el último elemento`)
        } else if (arr[i] > 0 && arr[i] <= 10) {
            new_array.unshift(arr[i]);
            arrays += `<p>${new_array.join()}</p>`
            console.log(`Se añade ${arr[i]}, al principio`)
        } else if (arr[i] > 10 && arr[i] <= 10) {
            new_array.push(arr[i]);
            arrays += `<p>${new_array.join()}</p>`
            console.log(`Se añade ${arr[i]}, al final`)
        }
    }
    document.getElementById("arrays").innerHTML = arrays
}

