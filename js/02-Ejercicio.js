/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

* Mostrar la longitud del arreglo.
* Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
* Añade en última posición la ciudad de París.
* Escribe por pantalla el elemento que ocupa la segunda posición.
* Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/

let ciudades = ["Nueva York, Estados Unidos", "Barcelona, España", "Tokio, Japón", "Londres, Reino Unido", "Roma, Italia", "Pekín, China", "Río de Janeiro, Brasil", "Ámsterdam, Países Bajos", "Sídney, Australia", "El Cairo, Egipto"];

const main = document.querySelector("main");
const h2 = document.createElement("h2");
h2.textContent = "Actividad 2";

const cantidadDeElementos = document.createElement("p");

main.appendChild(h2);
main.appendChild(cantidadDeElementos);

function capitalizarPalabra(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
}

function validarPalabra(palabra) {
    const regex = /^[a-zA-Z]{3,}$/;
    return regex.test(palabra);
}



while (true) {
    let nuevaCiudad = prompt("Ingrese el nombre de una ciudad:");
    if (nuevaCiudad === null) {
        break;
    } else {
        if (validarPalabra(nuevaCiudad)) {
            ciudades.push(capitalizarPalabra(nuevaCiudad));
        } else {
            alert("La ciudad ingresada no es válida. Asegúrese de que tenga al menos 3 letras, sin números ni caracteres especiales.");
        }
    }
}

cantidadDeElementos.textContent = "El arreglo de ciudades tiene "+ ciudades.length +" elementos.";

for(let i = 0; i < ciudades.length; i++){
    if(i == 0 || i == 2 || i == ciudades.length -1){
        main.innerHTML += `
        <p>
        Elemento n°${i+1}: ${ciudades[i]}
        </p>
        `;
    }
}

ciudades.push("Paris");

main.innerHTML += `Elemento en la ultima posición: ${ciudades[ciudades.length -1]}`;

const lista = document.createElement("ul");
main.appendChild(lista);

for(let i = 0; i < ciudades.length; i++){
    lista.innerHTML += `
        <li>
            Elemento ${ciudades[i]}
        </li>
    `;
}