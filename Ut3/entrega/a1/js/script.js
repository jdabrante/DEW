let input = document.getElementById("input");


// El siguiente código tiene unicamente una finalidad estética. Se ha querido poder introducir cualquier número 
// así como que el cálculo de este se realice una vez se presione la tecla Enter. Una vez se introduce un valor nuevo
// el desplegable que baja por primera vez vuelve a subir y muestra los nuevos resultados.
input.addEventListener("keypress", function(event){
    const element1 = document.getElementById("table-multiply");
    const element2 = document.getElementById("table-adding");
    const element3= document.getElementById("table-split");

    let value = document.getElementById("input").value;
    if (event.key === "Enter" ) {
        if (element1.childNodes.length === 0) {
            element1.style.height = "500px";
            element2.style.height = "500px";
            element3.style.height = "500px";
            multiply(value);
            adding(value);
            split(value);
        } else {
            // La repeteción de las líneas 26, 27 y 28 se debe a que, si esto no se realiza, los valores calculados 
            // anteriormente se quedan "guardados" y son mostrados en la última parte del desplegable.
            element1.style.height = "1px";
            element2.style.height = "1px";
            element3.style.height = "1px";
            element1.innerHTML = "";
            element2.innerHTML = "";
            element3.innerHTML = "";
            // El evento transitioned espera a que una transición termine para aplicar la función correspondiente
            // En este caso, limpia los elementos 1, 2 y 3 (que son el contenido de las correspondientes tablas)
            // y se ejecutan las funciones correspondientes
            element1.addEventListener("transitionend", () => {
                element1.innerHTML = "";
                element2.innerHTML = "";
                element3.innerHTML = "";
                let value = document.getElementById("input").value;
                multiply(value);
                adding(value);
                split(value);
                element1.style.height = "500px";
                element2.style.height = "500px";
                element3.style.height = "500px";

            })
            
        }
    }
});


// Esta es la parte del código de la práctica
function multiply(value) {
    let element = document.getElementById("table-multiply");
        for (let i=0; i <= 10; i++) {
            let calculate = value * i;
            element.innerHTML += `<p>${i} x ${value} = ${calculate}</p>`;
        }
    }

function adding(value) {
    let element = document.getElementById("table-adding");
    let i = 0;
    while (i <= 10) {
        let calculate = value + i;
        element.innerHTML += `<p>${i} + ${value} = ${calculate}</p>`;
        i++;
    }
}

function split(value) {
    let element = document.getElementById("table-split");
    let i = 1;
    do {
        let calculate = value / i;
        
        element.innerHTML += `<p>${i} : ${value} = ${calculate.toFixed(2)}</p>`;
        i++
    } while ( i <= 10 ); 
}