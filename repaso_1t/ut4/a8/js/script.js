function generate() {
    let length = document.getElementById("length").value;
    let max = document.getElementById("max").value;
    let min = document.getElementById("min").value;
    let arr = new Array()
    let array_dict = {}
    for (let i=0; i < length; i++){
        arr[i] =  Math.floor(Math.random() * (max - min) + min)
    }

    arr.forEach(number => {
        if (!array_dict[number]) {
            array_dict[number] = 1;
        } else {
            array_dict[number] += 1;
        }
    }
    )

    document.getElementById("result").innerHTML = arr.join()
    console.log(array_dict)
    document.getElementById("dict").innerHTML = JSON.stringify(array_dict)
}

