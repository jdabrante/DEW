


function generate_random_array (number_of_elements=10, min_value=100, max_value=200 ) {
    let random_array = Array.from({length: number_of_elements}, () => Math.floor(Math.random() * (max_value - min_value) + min_value));
    document.getElementById("array").innerHTML = random_array.toString();
};

let button = document.getElementById("generate");
button.addEventListener("click", generate_random_array());

// let button = document.getElementById('generate');
// button.addEventListener('click', function () {
//     let random_array = Array.from({length: 10}, () => Math.floor(Math.random() * (200 - 100) + 100));
//     document.getElementById("array").innerHTML = random_array.toString();
// });

