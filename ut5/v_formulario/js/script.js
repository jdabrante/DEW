let nombre = document.getElementById("nombre")
let apellidos = document.getElementById("apellidos")


function outFocusUpper(paramenter) {
    paramenter.addEventListener("focusout", () => {
        paramenter.value = paramenter.value.toUpperCase()
    })
}

function checkBlankParameter(parameter){
    if (parameter.value == "") {
        document.getElementById('errores').innerHTML = `El campo ${parameter.id} está en blanco`
        parameter.focus()
        return false
    }
    return true
}

let error = document.getElementById('errores')

function checkAge() {
    let age = document.getElementById('edad')
    if (age.value > 105 || age.value < 0 || age.value == "") {
        error.innerHTML = `El campo ${age.id} es erroneo`
        age.focus()
        return false
    }
    return true
}

function checkDNI() {
    // Expresión regular para hacer match con una cadena que comience con 8 dígitos, un guión medio "-" y termine con una letra en mayusculas o miníscula
    let re = /^\d{8}-[A-Z,a-z]$/
    let nif = document.getElementById('nif')
    if (re.exec(nif.value) == null) {
        error.innerHTML = `El campo ${nif.id} es erroneo`
        nif.focus()
        return false
    }
    return true
}

function checkEmail() {
    // Expresión regular para hacer match con una cadena que empiece con uno o mas números o letras, 
    // una arroba "@", uno o más letras, un punto y  termine con una o más letras minúsculas
    let re = /^[a-z,A-Z,0-9]+@{1}[a-z,A-Z]+\.{1}[a-z]+$/
    let email = document.getElementById('email')
    if (re.exec(email.value) == null) {
        error.innerHTML = `El campo ${email.id} es erroneo` 
        email.focus()
        return false
    }
    return true
}

function checkProvince() {
    let province = document.getElementById('provincia')
    if (province.value == "0") {
        error.innerHTML = `El campo ${province.id} no está seleccionado`
        province.focus()
        return false
    }
    return true
}

function checkDate() {
    // Expresión regular para cadenas de texto que empiecen "^" por cadenas de dos dígitos
    // y el útlmo de 4 separados por barras "/" o "|" guines medios "-". Terminando en ambos casos por el número de 4 dígitos ( el año)
    let re = /^\d{2}\/\d{2}\/\d{4}$|\d{2}-\d{2}-\d{4}$/
    let date = document.getElementById('fecha')
    if (!re.exec(date.value)) {
        error.innerHTML = `El campo ${date.id} está vacio`
        date.focus()
        return false
    }
    return true
}

function checkPhone() {
    // Expresión regular que empiece y termina por 9 dígitos
    let re = /^\d{9}$/
    let phone = document.getElementById('telefono')
    if (!re.exec(phone.value)) {
        error.innerHTML = `El campo ${phone.id} no es correcto`
        phone.focus()
        return false
    }
    return true
}

function checkHour() {
    // Expresión regular que empiece por dós dígitos, siga con dos puntos ":" y termine con dos dígitos
    let re = /^\d{2}:\d{2}$/
    let hour = document.getElementById('hora')
    if (!re.exec(hour.value)) {
        error.innerHTML = `El campo ${hour.id} no es correcto`
        hour.focus()
        return false
    }
    return true
}

tries = 0
intentos = document.getElementById('intentos')
document.cookie = 'intentos=' + encodeURIComponent(tries)

function addTry() {
    tries += 1
    document.cookie = 'try=' + encodeURIComponent(tries)
    // En este punto cre que el reverse no deberia de ser necesario, pero por algún motivo la coockie añadida me sale
    // como último elemento del array de cookies.
    let cookie = document.cookie.split(";").reverse()[0].split("=")[1]
    intentos.innerHTML = `Intento de Evíos del formulario: ${cookie}`
}

document.getElementById('enviar').addEventListener('click', (event)=>{
    if (checkBlankParameter(nombre) && checkBlankParameter(apellidos) && checkAge() && 
    checkDNI() && checkEmail() && checkProvince() && checkDate() && 
    checkDate() && checkPhone() && checkHour()) {
        if (confirm('¿Quiere enviar el formulario?')) {
            return true
        } else {
            event.preventDefault()
            addTry()
            return false
        }
    } else {
        event.preventDefault()
        addTry()
        return false
    }
})


outFocusUpper(nombre)
outFocusUpper(apellidos)


