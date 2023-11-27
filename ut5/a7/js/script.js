let enlances = document.getElementsByTagName("a")

enlances.forEach(function(element) {
    element.addEventListener("click", (e) => {
        e.preventDefault()
        alert("Holas")
    })
});