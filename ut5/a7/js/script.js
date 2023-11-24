let enlances = document.getElementsByTagName("a")

enlances.forEach(function(element) {
    element.addEventListener("click", () => alert("Holas"))
});