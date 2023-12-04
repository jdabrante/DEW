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
    let re = /\d{8}-[A-Z,a-z]/
    let nif = document.getElementById('nif')
    if (re.exec(nif.value) == null) {
        error.innerHTML = `El campo ${nif.id} es erroneo`
        nif.focus()
        return false
    }
    return true
}

function checkEmail() {
    let re = /[a-z,A-Z,0-9]+@{1}[a-z,A-Z]+\.{1}[a-z]+/
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
    let re = /^\d{2}:\d{2}$/
    let hour = document.getElementById('hora')
    if (!re.exec(hour.value)) {
        error.innerHTML = `El campo ${hour.id} no es correcto`
        hour.focus()
        return false
    }
    return true
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) {
    return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    }
    return null;
    }

let tries = 0
document.cookie = 'tries=' + tries 
let intentos = document.getElementById('intentos')

document.getElementById('enviar').addEventListener('click', (event)=>{
    let cookie;
    if (checkBlankParameter(nombre) && checkBlankParameter(apellidos) && checkAge() && 
    checkDNI() && checkEmail() && checkProvince() && checkDate() && 
    checkDate() && checkPhone() && checkHour()) {
        if (confirm('¿Quiere enviar el formulario?')) {
            return true
        } else {
            event.preventDefault()
            tries += 1
            cookie = readCookie("tries")
            intentos.innerHTML = `Intento de Evíos del formulario: ${cookie}`
            return false
        }
    } else {
        event.preventDefault()
        tries += 1
        cookie = readCookie("tries")
        intentos.innerHTML = `Intento de Evíos del formulario: ${cookie}`
        return false
    }
})



outFocusUpper(nombre)
outFocusUpper(apellidos)


