function create_random() {
    let random_array = Array.from({length: 20}, () => Math.floor(Math.random() * (100 - 20) + 20));
    document.getElementById("array").innerHTML = random_array.sort().toString();
    document.getElementById('square_array').innerHTML = create_square(random_array).toString();
};

function create_square(array) {
    let old_array = array
    let new_array = new Array();
    for (let i = 0; i < old_array.length; i++)  {
        new_array.push(Math.sqrt(old_array[i]).toFixed(2));
    }
    return new_array
};