const button = document.getElementById('calculate');
const area = document.getElementById('area');
const perimeter = document.getElementById('perimeter');

function calculate() {
    let radius = parseFloat(document.getElementById('number').value);
    area.innerHTML = "Area: " + (Math.PI * radius ** 2).toFixed(2);
    perimeter.innerHTML = "Perimetro: " + (Math.PI * radius * 2).toFixed(2);
}