function calcular() {
    let output = ""
    let lineas = document.getElementById("value").value;
    for (let i=1; i <= lineas; i++) {
        let linea = ''
        for (let j=1; j <= i * 2 - 1; j++){
            linea += '*'
        }
        output += `${linea}<br>`
    }

    for (let i=lineas -1; i >= 0; i--) {
        let linea = ''
        for (let j=1; j <= i * 2 - 1; j++){
            linea += '*'
        }
        output += `${linea}<br>`
    }

    document.getElementById("resultado").innerHTML = output
}