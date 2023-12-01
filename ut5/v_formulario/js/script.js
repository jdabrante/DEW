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

function checkAge() {
    let age = document.getElementById('edad')
    if (age.value > 105 || age.value < 0 || age.value == "") {
        document.getElementById('errores').innerHTML = `El campo ${age.id} es erroneo`
        age.focus()
        return false
    }
    return true
}

function checkDNI() {
    re = /\d{8}-[A-Z,a-z]/
}

document.getElementById('enviar').addEventListener('click', (event)=>{
    event.preventDefault()
    if (checkBlankParameter(nombre) && checkBlankParameter(apellidos) && checkAge()) {
        document.getElementById('formulario').submit()
    }
})


outFocusUpper(nombre)
outFocusUpper(apellidos)


