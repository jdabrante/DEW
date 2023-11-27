// let img = document.images
// for (let i=0; i <= img.length; i++){
//        img[i].addEventListener('click', () => {
//             _img = document.images[i]
//             document.getElementById('selected').src = _img.src
//         })
//     }

// for (let i=0; i <= img.length; i++){
//     document.addEventListener('keydown', (event) => {
//         console.log('Hola')
//         if (event.key == 'ArrowRight') {
//             document.getElementById('selected').src = document.images[i].src
//         }
//     })
// }

let img = document.images
let i = 0
document.addEventListener('keydown', (e) => {
    if (e.key == 'ArrowRight') {
        i = i < (img.length - 1) ? i : 0
        document.getElementById('selected').src = document.images[i].src
        console.log(i)
        i += 1
    }
    else if (e.key == 'ArrowLeft') {
        i = i >= 0 ? i : img.length
        document.getElementById('selected').src = document.images[i].src
        i -= 1
    }
})
