// Utilizando Fetch para obtener datos de la API pública
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())  // Parsear la respuesta como JSON
.then(datos => {
// Inicializar una cadena con la primera fila de encabezados de la tabla
let cad = '<tr><th>Nombre</th><th>Email</th><th>Télefono</th></tr>';
// Iterar a través de los datos y construir las filas de la tabla
for (let usuario of datos) {
cad += `<tr><td>${usuario.name}</td>
<td>${usuario.email}</td>
<td>${usuario.phone}</td></tr>`;
}
// Establecer el contenido HTML de la tabla con la cadena construida
document.getElementById("tabla1").innerHTML = cad;
});
