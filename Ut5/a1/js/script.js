let button = document.getElementById('generate');
button.addEventListener('click', function () {
    let random_array = Array.from({length: 10}, () => Math.floor(Math.random() * (200 - 100) + 100));
    document.getElementById("array").innerHTML = random_array.toString();
});

