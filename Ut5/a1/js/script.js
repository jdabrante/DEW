let button = document.getElementById("button");
let number = document.getElementById("number").value;

button.addEventListener("click", function() {
    let array = new Array()
    for (let i=0; i <= 10; i++) {
        if (number == "") {
            array.push(Math.floor(Math.random() * 200))
        }
    }
})
