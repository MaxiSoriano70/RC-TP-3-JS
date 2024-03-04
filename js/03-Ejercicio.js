/*3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

Ejemplo de salida:
*/

const main = document.querySelector("main");
const tabla = document.createElement("table");

let diccionario = {
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
};

function dibujarTabla(){
    main.appendChild(tabla);
    tabla.innerHTML +=`
        <tr>
            <td>
                SUMA
            </td>
            <td>
                APARICIONES
            </td>
        </tr>
    `;
}

function dados2(){
    for(let i = 0; i < 50; i++){
        let dado1 = Math.floor(Math.random() * 6) + 1;
        let dado2 = Math.floor(Math.random() * 6) + 1;
        let suma = dado1 + dado2;
        diccionario[suma]++;
    }
}

function mostrarResultados(){
    for(let clave in diccionario){
        tabla.innerHTML +=`
        <tr>
            <td>
            ${clave}
            </td>
            <td>
            ${diccionario[clave]}
            </td>
        </tr>
        `
    }
}

dibujarTabla();
dados2();
mostrarResultados();