const square = $("#square")
const start = $("#start")
const restart = $("#restart")
let position = 0

start.click(function() {
    position += 20
    square.animate({
        left: `${position}px`
    })
})

restart.click(function() {
    position = 0
    square.animate({
        left: `${position}px`
    })
})
