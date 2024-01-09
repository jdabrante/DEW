const button1 = $("#button1")
const button2 = $("#button2")
const button3 = $("#button3")
const table = $("table")

button1.click(function () {
    table.attr("border", "1px")
})

button2.click(function () {
    alert(table.attr("border"))
})

button3.click(function () {
    table.removeAttr("border")
})