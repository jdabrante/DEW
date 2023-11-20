function generateWindow() {
    newWindow = window.open('', 'new', 'width=800, height=800')
    newWindow.document.write(
        `<h3>Ejemplo de ventana nueva</h3>
        <p>URL: ${newWindow.opener.location.href}</p>
        <p>Protocolo: ${newWindow.opener.location.protocol}</p>
        <p>Navegador: ${newWindow.opener.navigator.appCodeName}</p>
        <p>Java: ${newWindow.opener.navigator.javaEnabled()}</p>
        <iframe src="https://www.amazon.com/" width="600" height="600"></iframe>
        `
    )
}

function generate() {
    window.document.write(`
    <h1>Tarea</h1>
    <hr/>
    `)
    let name = window.prompt('Introduce tu nombre y apellidos');
    let day = window.prompt('Día de nacimiento:');
    let month = window.prompt('Mes de nacimiento');
    let year = window.prompt('Año de nacimiento:')
    window.document.write(`<p>Buenos días ${name}</p>`)
    window.document.write(`<p>Tu nombre tiene ${name.length} caracteres</p>`)
    window.document.write(`<p>La primera letra A de tu nombre está en la posición: ${(name.toLowerCase()).indexOf('a')}</p>`)
    window.document.write(`<p>La última letra A de tu nombre está en la posición: ${(name.toLowerCase()).lastIndexOf('a')}</p>`)
    window.document.write(`<p>Tu nombre menos las 3 primeras letras es: ${name.slice(3)}</p>`)
    window.document.write(`<p>Tu nombre todo en mayúsuclas es: ${name.toUpperCase()}</p>`)
    let age = Math.floor(((new Date()) - (new Date(year, day, month))) / (1000 * 60 * 60 * 24 * 365))
    let months = ['diciembre', 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre']
    let days = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes','sabado']
    let birthdate = new Date(`${year}-${month}-${day}`)
    window.document.write(`<p>Tu edad es: ${age} años</p>`)
    window.document.write(`<p>Naciste un feliz ${days[(birthdate.getDay())]} del año ${year}</p>`)
    window.document.write(`<p>El coseno de 180 es: ${Math.floor(Math.cos(180))}</p>`)
    window.document.write(`<p>El número mayor de (34,67,23,75,35,19) es: ${Math.max(34,67,23,75,35,19)}</p>`)
    window.document.write(`<p>Ejemplo de número al azar ${Math.floor(Math.random() * 10)}</p>`)


    


    
}