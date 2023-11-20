function generate() {
    let length = document.getElementById("length").value;
    let max = document.getElementById("max").value;
    let min = document.getElementById("min").value;
    let arr = new Array()
    for (let i=0; i < length; i++){
        arr[i] = parseInt(Math.random() * (max - min) + min)
    }
    let max_value = arr[0];
    let min_value = arr[0];
    let min_index = 0;
    let max_index = 0;
    for (let i=0; i <= arr.length; i++) {
        if ( arr[i] > max_value) {
            max_value = arr[i]
            max_index = i
        }
        if ( arr[i] < min_value) {
            min_value = arr[i]
            min_index = i
        }
    }

    document.getElementById("result").innerHTML = arr.join()
    document.getElementById("max_value").innerHTML = `Value = ${max_value}| Index = ${max_index}`
    document.getElementById("min_value").innerHTML = `Value = ${min_value}| Index = ${min_index}`

}

