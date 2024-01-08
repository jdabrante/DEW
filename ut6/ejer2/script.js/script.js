let button = document.getElementById('button')
button.addEventListener('click', () => {
    console.log('Hola')
    let new_li = document.createElement("li")
    let node = document.createTextNode("Holita")
    new_li.appendChild(node)
    document.querySelector('#list').appendChild(new_li)
})