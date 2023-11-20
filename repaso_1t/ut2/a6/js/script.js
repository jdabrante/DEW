function calculate() {
    let number = document.getElementById("value").value;
    let num1 = 0;
    let num2 = 1;
    let fibo = `${num1},${num2},`
     if (number == 1) {
        fibo = 0;
    } else if (number == 2){
        fibo = fibo;
    } else{
    for (let i=1; i <= (number - 2); i++) {
        num3 = num1 + num2;
        fibo += `${num3},`
        num1 = num2;
        num2 = num3;
    }
    }
    document.getElementById("result").innerHTML = fibo;
}