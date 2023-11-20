function calculate() {
    let number = document.getElementById("number").value;
    let result = ""
    // for (let i=0; i <= 10; i++){
    //     calc = i * number;
    //     result += `${number} x ${i} = ${calc}<br>`
    // }

    // let i = 0;
    // while ( i <= 10) {
    //     calc = i * number;
    //     result += `${number} x ${i} = ${calc}<br>`
    // }

    let i = 0;
    do {
        calc = i * number;
        result += `${number} x ${i} = ${calc}<br>`
        i++
    } while ( i <= 10)
    document.getElementById("result").innerHTML = result
}