let nombre = $("#nombre")
let apellidos = $("#apellidos")
let error = $('#errores')
let address = $('#direccion')

// Funcion para comprobar parámetros en blanco

function checkBlankParameter(parameter){
    if (parameter.val() == "") {
        error.html(`El campo ${parameter.attr('id')} está en blanco`)
        parameter.focus()
        return false
    }
    return true
}

function checkDNI() {
    // Expresión regular para hacer match con una cadena que comience con 8 dígitos, un guión medio "-" y termine con una letra en mayusculas o miníscula
    let re =  /^\d{8}[A-Za-z]$/
    let nif = $('#nif')
    let dniNumber = nif.val().substring(0, 8)
    let dniLetter = nif.val().charAt(8)
    let possibleLetters = 'TRWAGMYFPDXBNJZSQVHLCKE'
    let realLetter = possibleLetters.charAt(dniNumber % 23)
    console.log(nif.val())
    if (re.exec(nif.val()) == null) {
        error.html(`El campo ${nif.attr('id')} está vacio`)
        nif.focus()
        return false
    } else if (dniLetter != realLetter) {
        error.html(`El campo ${nif.attr('id')} es incorrecto`)
        nif.focus()
        return false
    }
    return true
}

function checkPostalCode() {
    let re = /^\d{5}$/
    let postal_code = $('#codigo_postal')
    if (!re.exec(postal_code.val())) {
        error.html(`El campo ${postal_code.attr('id')} no es correcto`)
        postal_code.focus()
        return false
    }
    return true
}

function checkEmail() {
    // Expresión regular para hacer match con una cadena que empiece con uno o mas números o letras, 
    // una arroba "@", uno o más letras, un punto y  termine con una o más letras minúsculas
    let re = /^[a-z,A-Z,0-9]+@{1}[a-z,A-Z]+\.{1}[a-z]+$/
    let email = $('#email')
    if (re.exec(email.val()) == null) {
        error.html(`El campo ${email.attr('id')} es erroneo` )
        email.focus()
        return false
    }
    return true
}

function checkProvince() {
    let province = $('#provincia')
    if (province.val() == "0") {
        error.html(`El campo ${province.attr('id')} no está seleccionado`)
        province.focus()
        return false
    }
    return true
}

function checkDate() {
    let date = $('#fecha')
    if (date.val() == "") {
        error.html(`El campo ${date.attr('id')} está vacio`)
        date.focus()
        return false
    }
    return true
}

function checkPhone() {
    // Expresión regular que empiece y termina por 9 dígitos
    let re = /^\d{9}$/
    let phone = $('#telefono')
    if (!re.exec(phone.val())) {
        error.html(`El campo ${phone.attr('id')} no es correcto`)
        phone.focus()
        return false
    }
    return true
}

function checkHour() {
    // Expresión regular que empiece por dós dígitos, siga con dos puntos ":" y termine con dos dígitos
    let re = /^\d{2}:\d{2}$/
    let hour = $('#hora')
    if (!re.exec(hour.val())) {
        error.html(`El campo ${hour.attr('id')} no es correcto`)
        hour.focus()
        return false
    }
    return true
}

function checkConditions() {
    let condition = $('#condiciones')
    if (condition.is(':checked')) {
        return true
    } else {
        error.html('No se han acceptado las condiciones')
        condition.focus()
        return false
    }
}

// Comprobación de todos los campos

$('#enviar').on('click', (event)=>{
    if (checkBlankParameter(nombre) && checkBlankParameter(apellidos) && checkDate() && checkDNI() && checkBlankParameter(address) && 
    checkPostalCode() &&  checkProvince() && 
    checkPhone() && checkEmail() && checkConditions()) {
        if (confirm('¿Quiere enviar el formulario?')) {
            return true
        } else {
            event.preventDefault()
            return false
        }
    } else {
        event.preventDefault()
        return false
    }
})

// Cargado de provincias y municipios

const PROURL = 'provincias.php'

let selectProvince = $('#provincia')
let selectMuni = $('#municipio')

$(document).ready(() => {

    fetch('provincias.php')
    .then(response => response.json())
    .then(data => {
        Object.keys(data).forEach(key => {
            let value = data[key]
            let option = $('<option>').attr('value', key).text(value)
            selectProvince.append(option)
        })
    })
})

selectProvince.on('change', () => {
    let provinceCode = selectProvince.val()
    getMuni(provinceCode)

})


function getMuni(provinceCode) {
    fetch('municipios.php', {
        method: 'POST',
        headers: {
            "Content-Type" : "application/x-www-form-urlencoded"
        },
        body: `provincia=${provinceCode}`
    })
       .then(response => response.json())
       .then(data => {
            selectMuni.html("")
            Object.keys(data).forEach(key => {
                let value = data[key]
                let option = $('<option>').attr('value', key).text(value)
                selectMuni.append(option)
            })
       })
}