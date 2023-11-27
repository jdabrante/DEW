button = document.getElementById('click')

button.addEventListener('click', click)

function click() {
    alert('Hola')
    button.removeEventListener('click', click)
}