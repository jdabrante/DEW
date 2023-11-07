let button = document.getElementById('generate');
button.addEventListener('click', function () {
    let random_array = Array.from({length: 15}, () => Math.floor(Math.random() * (20 + 10) - 10));
    
    document.getElementById("array").innerHTML = random_array.toString();
    
});


