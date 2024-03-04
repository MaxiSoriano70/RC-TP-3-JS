/*6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)*/

function pedirPrimerNumero(){
    let numero = prompt("Ingrese el primer lado por favor: ");
    if (!isNaN(numero) && numero>0) {
        numero = Number(numero);
        return numero;
    } else {
        alert("Por favor, ingrese solo números positivos.");
        pedirPrimerNumero();
    }
}

function pedirSegundoNumero(){
    let numero = prompt("Ingrese el segundo lado por favor: ");
    if (!isNaN(numero) && numero>0) {
        numero = Number(numero);
        return numero;
    } else {
        alert("Por favor, ingrese solo números positivos.");
        pedirSegundoNumero();
    }
}

function perimetroDeUnRectangulo(){
    let lado1 = pedirPrimerNumero();
    let lado2 = pedirSegundoNumero();
    let perimetro = 2 * (lado1 + lado2);

    document.write(`El perímetro del rectángulo es ${perimetro}`);
}

perimetroDeUnRectangulo();