/*
4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
*/

function parOImpar(){
    numero = prompt("Ingrese un numero porfavor: ");
    if (!isNaN(numero)) {
        numero = Number(numero);
        if(numero % 2 == 0){
            alert(`El ${numero} es par.`);
        }
        else{
            alert(`El ${numero} es impar.`);
        }
    } else {
        alert("Por favor, ingrese solo números.");
        parOImpar();
    }
}

parOImpar();