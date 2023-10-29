
function calculate() {
    let first = document.getElementById("first");
    let second = document.getElementById("second");
    let third = document.getElementById("third");
    let fourth = document.getElementById("fourth");
    first.innerHTML = 125 >> 3;
    first.style.opacity = "1";
    second.innerHTML = 40 << 2;
    second.style.opacity= "1";
    third.innerHTML  = 25 >> 1;
    third.style.opacity= "1";
    fourth.innerHTML = 10 << 4;
    fourth.style.opacity="1";
};
