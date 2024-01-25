let noticia = document.getElementById('noticias');
let createRSS = document.getElementById('crearRSS');
let deleteRSS = document.getElementById('borrarRSS');
let choiceRSS = document.getElementById('campoSelect');
const baseUrl = 'server.php?url='

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
    asyncPetition(rssUrl)
});

deleteRSS.addEventListener('click', () => {
    let name = prompt('Introduce el nombre de RSS que desea borrar');
    noticia.innerHTML = ""
    let localstorageData = JSON.parse(localStorage['rss'])
    let new_localstorageData = []
    localstorageData.forEach((element) => {
        if (element['name'] != name) {
            new_localstorageData.push(element)
        }
    })
    localStorage['rss'] = JSON.stringify(new_localstorageData)
    let firstRss = JSON.parse(localStorage['rss'])[0]["url"]
    asyncPetition(firstRss)
    choiceRSS = document.createElement('select')
    choiceRSS.id = 'campoSelect'
    choiceRSS.name = 'campoSelect'
    for (let i=0; i < localstorageData.length; i++) {
        let url = localstorageData[i]['url']
        let name = localstorageData[i]['name']
        let option = document.createElement("option")
        option.value = url
        option.innerHTML = name
        choiceRSS.appendChild(option)
    }

})

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

choiceRSS.addEventListener('change', () => {
    let url = choiceRSS.options[choiceRSS.selectedIndex].value
    noticia.innerHTML = ""
    asyncPetition(url)
})

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
