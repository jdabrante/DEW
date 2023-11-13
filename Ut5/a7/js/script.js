function create_random() {
    let random_array = Array.from({length: 20}, () => Math.floor(Math.random() * (100 - 20) + 20));
    document.getElementById('random').innerHTML = random_array.sort().toString();
    document.getElementById('maxmin').innerHTML = max_min(random_array).toString();
};

function max_min(array) {
    let old_array = array
    return [old_array.indexOf(Math.max(old_array)), old_array.indexOf(Math.min(old_array))]
};