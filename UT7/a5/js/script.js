const button1 = $("#button1")
const button2 = $("#button2")
const div = $("#div")

button1.click(function() {
    div.addClass("hola")
})

button2.click(function() {
    div.removeClass("hola")
})
