
function calcularArea() {
    let radio = document.getElementById("radio").value;
    document.getElementById("area").innerHTML = (Math.PI * radio**2).toFixed(2)
}