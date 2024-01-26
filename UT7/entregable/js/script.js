let noticia = document.getElementById('noticias');
let createRSS = document.getElementById('crearRSS');
let deleteRSS = document.getElementById('borrarRSS');
let choiceRSS = document.getElementById('campoSelect');
const baseUrl = 'server.php?url='

// Evento para añadir un nuevo RSS en el localstorage, añadiéndolo además al select y mostrandolo en pantalla

createRSS.addEventListener('click', () => {
    let rssName = prompt('Introduce un titulo para el RSS');
    let rssUrl = prompt('Introduce la URL');
    if (localStorage.length == 0) {
        localStorage['rss'] = JSON.stringify([{'name': rssName, 'url': rssUrl}])
    } else {
        let localstorageData = JSON.parse(localStorage['rss'])
        localstorageData.push({'name': rssName, 'url': rssUrl})
        localStorage['rss'] = JSON.stringify(localstorageData)
    }
    noticia.innerHTML = ""
    let option = document.createElement("option")
    option.value = rssUrl
    option.innerHTML = rssName
    choiceRSS.appendChild(option)
    choiceRSS.options[choiceRSS.options.length -1].selected = true
    asyncPetition(rssUrl)
});

// Evento que borra el RSS que está seleccionado del localstorage y muestra el primer RSS en pantalla

deleteRSS.addEventListener('click', () => {
    noticia.innerHTML = ""
    let localstorageData = JSON.parse(localStorage['rss'])
    let new_localstorageData = []
    let name = choiceRSS.options[choiceRSS.selectedIndex].innerHTML
    choiceRSS.remove(choiceRSS.selectedIndex)
    localstorageData.forEach((element) => {
        if (element['name'] != name) {
            new_localstorageData.push(element)
        }
    })
    localStorage['rss'] = JSON.stringify(new_localstorageData)
    let firstRss = JSON.parse(localStorage['rss'])[0]["url"]
    asyncPetition(firstRss)
})

// Evento que añade todas las RSS con su nombre y urls al select como opciones y además muestra el primer RSS en pantalla

document.addEventListener('DOMContentLoaded', () => {
    let localstorageData = JSON.parse(localStorage['rss'])
    for (let i=0; i < localstorageData.length; i++) {
        let url = localstorageData[i]['url']
        let name = localstorageData[i]['name']
        let option = document.createElement("option")
        option.value = url
        option.innerHTML = name
        choiceRSS.appendChild(option)
    }
    let firstRss = JSON.parse(localStorage['rss'])[0]['url']
    asyncPetition(firstRss)
})

// Evento para cambiar de RSS

choiceRSS.addEventListener('change', () => {
    let url = choiceRSS.options[choiceRSS.selectedIndex].value
    noticia.innerHTML = ""
    asyncPetition(url)
})

// Función que realiza el fetch al RSS y mostrar el contenido en pantalla

function asyncPetition(url) {
    fetch(baseUrl + url)
    .then(response => response.json())
    .then(data => {
        let channel = data['channel']['item']
        channel.forEach(element => {
            let div = document.createElement('div')
            let link = document.createElement('a')
            let title = document.createElement('h2')
            let content = document.createElement('p')
            link.href = element['link']
            title.innerHTML = element['title']
            link.appendChild(title)
            content.innerHTML = element['description']
            div.appendChild(link)
            div.appendChild(content)
            noticia.appendChild(div)
        });
    });
}
