 function calculate() {
    let number = document.getElementById("number").value;
    let divisors = ""
    for (let i=1; i < number; i++) {
        if ((number % i) == 0) {
            divisors += `${i},`
        }
    }
    divisors += number
    document.getElementById("dividers").innerHTML = divisors
 }