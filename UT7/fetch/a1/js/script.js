
// Variable para almacenar la respuesta del servidor
let respuesta;
// Utilizando Fetch para obtener datos del archivo "server.json"
fetch("server.json")
.then(response => response.json())  // Parsear la respuesta como JSON
.then(datos => {
    respuesta = datos;
    // Iterar a través de los datos y mostrarlos en la consola
    for (let articulo of datos)
        console.log(`${articulo.code} ${articulo.name} ${articulo.value}\n`);
});