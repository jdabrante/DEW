let button = document.getElementById("button");

button.addEventListener("click", function() {
    let new_window = document.open("new_window.html", "new", "width = 900, height = 900, resizable = false" );
    let url = new_window.document.location;
    let protocolo = url.protocol;
    let navigator_code = new_window.navigator.appCodeName;
    let active_java = new_window.navigator.javaEnabled();
    let java;
    new_window.document.write("<h3>Ejemplo de Ventana Nueva</h3>");
    new_window.document.write(`<p>URL: ${url}</p>`);
    new_window.document.write(`<p>Procolo utilizado: ${protocolo}</p>`)
    new_window.document.write(`<p>Nombre en código del navegador: ${navigator_code}</p>`)
    if (active_java == true) {
        java = "Java si disponible";
    } else {
        java = "Java no disponible";
    }
    new_window.document.write(java);
    new_window.document.write("<iframe src='www.google.com' width=800 height=600></iframe>")
})

function data() {
    let nombre = document.getElementById('nombre').value;
    let apellidos = document.getElementById('apellidos').value;
    let fecha_nacimiento = (new Date(document.getElementById('nacimiento').value));
    let fecha_actual = new Date();
    let anios = Math.floor((fecha_actual.getTime() - fecha_nacimiento.getTime()) / 31560000000)
    nombre = String(nombre);
    let longitud_nombre = nombre.length
    document.write(`<p>Buenos días ${nombre} ${apellidos}</p>
    <p>Tu nombre tiene ${longitud_nombre} caracteres, incluidos espacios</p>
    <p>La primera letra A de tu nombre está en la posición ${nombre.indexOf("a")}</p>
    <p>La última letra A de tu nombre está en la posición ${nombre.lastIndexOf("a")}</p>
    <p>Tu nombre menos las 3 primeras letras es "${nombre.slice(3,)}"</p>
    <p>Tu nombre todo en mayúsculas es "${nombre.toUpperCase()}"</p>
    <p>Tu edas es: ${anios} años</p>
    <p>Naciste un feliz ${fecha_nacimiento.getDay()} del ${fecha_nacimiento.getMonth()} del año ${fecha_nacimiento.getFullYear()}
    <p>El coseno de 180 es ${Math.cos(180)}</p>
    <p>El número mayor de (34,67,23,7,35,19) es: ${Math.max(34,67,23,7,35,19)}</p>
    <p>Ejemplo de número al azar ${Math.floor(Math.random() * 100)}</p>`)
}

document.write(`<h1>TAREA DWEC03</h1>
<input type="text" placeholder="Nombre" id="nombre"><br>
<input type="text" placeholder="Apellidos" id="apellidos"><br>
<input type="date" id="nacimiento"><br>
<button id="button" onclick="data()">Enviar</button>`)

