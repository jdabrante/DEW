const button1 = $('#boton1')
const button2 = $('#boton2')
const button3 = $('#boton3')

button1.click(function() {
    alert($('#parrafo1').text())
})

button2.click(function() {
    let newText = prompt('Nuevo texto')
    $('#parrafo1').text(newText)
})

button3.click(function() {
    $('td').text(prompt('Nuevo texto para las celdas: '))
})