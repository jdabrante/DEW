document.addEventListener("mousemove", (event) => {
    document.getElementById("coordenadas").innerHTML = `[${event.clientX}, ${event.clientY}]`
})