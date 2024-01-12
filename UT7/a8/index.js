document.addEventListener('DOMContentLoaded', function() {
    let xhr = new XMLHttpRequest();
    document.getElementById('indicador').innerHTML = '<img src="state.gif"/>'

    xhr.open('GET', 'procesar.php?nombre=Teresa&apellidos=Blanco Ferreiro', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('indicador').innerHTML = "";
            document.getElementById('resultados').innerHTML = xhr.responseText;
        }
    };
    xhr.send();
})