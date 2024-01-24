let noticia = document.getElementById('noticias');
let createRSS = document.getElementById('crearRSS');
let deleteRSS = document.getElementById('borrarRSS');
let choiceRSS = document.getElementById('campoSelect');

createRSS.addEventListener('click', () => {
    let rssName = prompt('Introduce un titulo para el RSS');
    let rssUrl = prompt('Introduce la URL');
    localStorage.setItem(rssName, rssUrl);
    noticia.innerHTML = ""
    choiceRSS.innerHTML += `<option value='${localStorage.getItem(localStorage.key(i))}'>${localStorage.key(i)}</option>`
    fetch(`server.php?url=${url}`)
    .then(response => response.json())
    .then(data => {
        let channel = data['channel']['item']
        channel.forEach(element => {
            noticia.innerHTML += `<a href='${element['link']}'><h2>${element['title']}</a></h2><br><p>${element['description']}</p>`
        });
    });
})

deleteRSS.addEventListener('click', () => {
    let name = prompt('Introduce el nombre de RSS que desea borrar');
    localStorage.removeItem(name);
})

document.addEventListener('DOMContentLoaded', () => {
    for (let i=0; i < localStorage.length; i++) {
        choiceRSS.innerHTML += `<option value='${localStorage.getItem(localStorage.key(i))}'>${localStorage.key(i)}</option>`
    }
})

choiceRSS.addEventListener('change', () => {
    let url = choiceRSS.options[choiceRSS.selectedIndex].value
    noticia.innerHTML = ""
    fetch(`server.php?url=${url}`)
    .then(response => response.json())
    .then(data => {
        let channel = data['channel']['item']
        channel.forEach(element => {
            noticia.innerHTML += `<a href='${element['link']}'><h2>${element['title']}</a></h2><br><p>${element['description']}</p>`
        });
    });
})




