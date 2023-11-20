function find() {
    let letters = 'TRWAGMYFPDXBNJZSQVHLCKET'
    let numbers = document.getElementById("dni").value;
    if (numbers > 0 && numbers <  99999999 && numbers.length == 8) {
        let position = numbers % 23;
        document.getElementById("letter").innerHTML = letters[position];
    } else {
        alert('dni no váldio')
    }
}