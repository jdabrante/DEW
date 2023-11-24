document.addEventListener("mousemove", (event) => {
    document.getElementById("coordenadas").innerHTML = `[${event.clientX}, ${event.clientY}]`
})

document.addEventListener("keydown", (e) => document.getElementById("tecla").innerHTML = `Tecla pulsada: ${e.key}`)

document.addEventListener("click", () => alert('Click'))