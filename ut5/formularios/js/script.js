let point = 0
document.getElementById('frutas').addEventListener("click", (e) => {
    e.preventDefault()
    comprobarFrutas()
})

document.getElementById('color').addEventListener("click", (e) => {
    e.preventDefault()
    comprobarColor()
})

document.getElementById('dia').addEventListener("click", (e) => {
    e.preventDefault()
    comprobarDia()
})

document.getElementById('result').addEventListener("click", (e) => {
    e.preventDefault()
    comprobarDia()
    comprobarColor()
    comprobarFrutas()
    document.getElementById('final_points').innerHTML = point
    point = 0
})

function comprobarFrutas() {
    let manzana = document.getElementById('manzana')
    let fresa = document.getElementById('fresa')
    let platano = document.getElementById('platano')
    let mango = document.getElementById('mango')
    let points = 0
    if (manzana.checked) {
        points += 0.5
    }
    if (fresa.checked) {
        points += 0.5
    }
    if (platano.checked) {
        points -= 0.5
    }
    if (mango.checked) {
        points -= 0.5
    }
    if (points == 1) {
        document.getElementById('r_frutas').innerHTML = 'Respuesta correcta!'
    } else if (points == 0.5) {
        document.getElementById('r_frutas').innerHTML = 'Respuesta parcialmente correcta'
    } else {
        document.getElementById('r_frutas').innerHTML = 'Respuesta incorrecta'
    }
    point += points
}

function comprobarColor() {
    let rojo = document.getElementById('rojo')
    if (rojo.checked) {
        document.getElementById('r_color').innerHTML = 'Resputa correcta!'
        point += 1
    } else {
        document.getElementById('r_color').innerHTML = 'Respuesta incorrecta'
    }
}

function comprobarDia() {
    let option = document.getElementById('days').value
    if ( option[0] == 'J') {
        document.getElementById('r_day').innerHTML = 'Respuesta correcta!'
        point += 1
    } else {
        document.getElementById('r_day').innerHTML = 'Respuesta incorrecta'
    }
}
