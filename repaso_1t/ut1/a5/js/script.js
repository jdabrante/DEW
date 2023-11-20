function change_language(language_id) {
    language = document.getElementById(language_id)
    if (language_id == 'espanol') {
        alert('Bienvenido')
    } else if ( language_id == 'ingles') {
        alert('Welcome')
    } else {
        alert('Willkommen')
    }
    console.log(language_id)
}