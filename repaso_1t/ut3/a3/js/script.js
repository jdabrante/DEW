function longitud() {
    let frase = document.getElementById("frase").value;
    document.getElementById("caracteres").innerHTML = frase.length
}

function posicion() {
    let frase = document.getElementById("frase").value;
    let palabra = document.getElementById("palabra").value;
    document.getElementById("posicion").innerHTML = frase.indexOf(palabra);
}

function mostrar() {
    longitud();
    posicion();
}