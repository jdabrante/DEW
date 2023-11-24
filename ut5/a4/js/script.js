let box = document.getElementById("box")
document.addEventListener("click", () => {
    if (box.style.backgroundColor == "blue") {
    box.style.backgroundColor =  "red"
    }else {
        box.style.backgroundColor = "blue"
    }
})

document.addEventListener("mouseout", () => alert('Fuera de la caja'))