function calculate_price () {
    let price = parseInt(document.getElementById("number").value);
    let percentaje = parseInt(document.getElementById("percentaje").value);
    document.getElementById("result").innerHTML = price * (percentaje/100);
}