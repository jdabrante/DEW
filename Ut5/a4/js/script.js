let button_generate = document.getElementById('generate');
button_generate.addEventListener('click', function () {
    let random_array = Array.from({length: 20}, () => Math.floor(Math.random() * (100 - 20) + 20));
    document.getElementById("array").innerHTML = random_array.sort().toString();
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// TODO

let button_randomize = document.getElementById('randomizer');
button_randomize.addEventListener('click', function() {
    let sort_array = document.getElementById("array").innerHTML;
    rerandom_array  = sort_array.split(",");
    rerandom_array = shuffleArray(rerandom_array);
    console.log(rerandom_array);
    document.getElementById("random_array").innerHTML = shuffleArray(rerandom_array)
})