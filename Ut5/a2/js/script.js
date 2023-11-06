let button = document.getElementById('generate');
button.addEventListener('click', function () {
    let random_array = Array.from({length: 20}, () => Math.floor(Math.random() * (100 - 20) + 20));
    document.getElementById("array").innerHTML = random_array.sort().toString();
});

