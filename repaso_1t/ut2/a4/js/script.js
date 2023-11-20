function calcular(){
    let porcentaje = document.getElementById("porcentaje").value;
    let valor = document.getElementById("valor").value;
    document.getElementById("resultado").innerHTML = (valor * (porcentaje/100)).toFixed(2);
}