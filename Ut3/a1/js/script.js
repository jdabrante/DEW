function redirection(){
        if (window.confirm('Ir al formulario')) {
            window.open("form.html", "form", 'height=300, width=500');
        } else {
            alert('No se pudo completar el registro')
        }
}

function first_page(){
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let address = document.getElementById('address').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    opener.document.getElementById('name').innerHTML = name;
    opener.document.getElementById('surname').innerHTML = surname;
    opener.document.getElementById('address').innerHTML = address;
    opener.document.getElementById('phone').innerHTML = phone;
    opener.document.getElementById('email').innerHTML = email;
}