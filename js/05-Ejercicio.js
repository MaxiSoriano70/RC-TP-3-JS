/*
5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
*/

function analizarCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
        document.write(`La ${cadena} está formada solo por mayúsculas. </br>`);
    }
    else if (cadena === cadena.toLowerCase()) {
        document.write(`La ${cadena} está formada solo por minúsculas. </br>`);
    }
    else {
        document.write(`La ${cadena} está formada solo por mayúsculas y minúsculas. </br>`);
    }
}

analizarCadena("CODE");
analizarCadena("rolling");
analizarCadena("Rolling Code");