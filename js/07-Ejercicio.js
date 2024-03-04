/*7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.*/

const main = document.querySelector("main");

function pedirNumero(){
    let numero = prompt("Ingrese el primer lado por favor: ");
    if (!isNaN(numero)) {
        numero = Number(numero);
        return parseInt(numero);
    } else {
        alert("Por favor, ingrese solo números.");
        pedirNumero();
    }
}

function generarTablaDeMultiplicar(){
    let numero = pedirNumero();

    for(let i= 1; i <= 10; i++){
        main.innerHTML += `
            <p>
            ${numero} X ${i} = ${numero*i}
            </p>
        `;
    }
}

generarTablaDeMultiplicar();