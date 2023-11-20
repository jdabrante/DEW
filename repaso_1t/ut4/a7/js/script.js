function generate() {
    let length = document.getElementById("length").value;
    let max = document.getElementById("max").value;
    let min = document.getElementById("min").value;
    let arr = new Array()
    for (let i=0; i < length; i++){
        new_number =  Math.floor(Math.random() * (max - min) + min)
        if ( arr.indexOf(new_number) == -1 ){
            console.log(`New ${new_number}`)
        } else {
            console.log(`Repeat it ${new_number}`)
        }
        arr[i] = new_number

    }
    document.getElementById("result").innerHTML = arr.join()
}

