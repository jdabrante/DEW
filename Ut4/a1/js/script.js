let button = document.getElementById("button");

button.addEventListener("click", function() {
    let new_window = window.open("", "_blank", "width = 900, height = 900, resizable = no" );
    let active_java = new_window.navigator.javaEnabled();
    let java;
    new_window.document.write("<h3>Ejemplo de Ventana Nueva</h3>");
    new_window.document.write(`<p>URL: ${new_window.location.href}</p>`);
    new_window.document.write(`<p>Procolo utilizado: ${new_window.location.protocol}</p>`)
    new_window.document.write(`<p>Nombre en código del navegador: ${new_window.navigator.appCodeName}</p>`)
    if (active_java == true) {
        java = "Java si disponible";
    } else {
        java = "Java no disponible";
    }
    new_window.document.write(java);
    new_window.document.write("<iframe src='www.google.com' width=800 height=600></iframe>")
})


let nombre = prompt('Nombre y apellidos: ')
let dia_nacimiento = prompt('Dia de nacimiento: ');
let mes_nacimiento = prompt('Mes de nacimiento: ');
let anio_nacimiento = prompt('Año nacimiento: ');
let fecha_actual = new Date();
let fecha_nacimiento = new Date(anio_nacimiento, mes_nacimiento, dia_nacimiento);
let anios = fecha_actual.getFullYear() -  fecha_nacimiento.getFullYear();
nombre = String(nombre);
let longitud_nombre = nombre.length
const dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
const meses = ['Diciembre','Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre']
document.write(`
<h1>TAREA DWEC03</h1>
<p>Buenos días ${nombre}</p>
<p>Tu nombre tiene ${longitud_nombre} caracteres, incluidos espacios</p>
<p>La primera letra A de tu nombre está en la posición ${nombre.toUpperCase().indexOf("A")}</p>
<p>La última letra A de tu nombre está en la posición ${nombre.toUpperCase().lastIndexOf("A")}</p>
<p>Tu nombre menos las 3 primeras letras es "${nombre.slice(3,)}"</p>
<p>Tu nombre todo en mayúsculas es "${nombre.toUpperCase()}"</p>
<p>Tu edas es: ${anios} años</p>
<p>El coseno de 180 es ${Math.cos(180)}</p>
<p>El número mayor de (34,67,23,7,35,19) es: ${Math.max(34,67,23,7,35,19)}</p>
<p>Ejemplo de número al azar ${Math.floor(Math.random() * 100)}</p>
<p>Naciste un feliz ${dias[fecha_nacimiento.getDay()]} del ${meses[fecha_nacimiento.getMonth()]} del año ${fecha_nacimiento.getFullYear()}`)
