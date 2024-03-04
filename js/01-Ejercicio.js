/*1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.*/

let meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

function renderizandoMeses(meses) {
    document.write("<h2>Lista de meses</h2>");
    document.write("<ul>");
        for(let mes of meses){
            document.write("<li>");
            document.write(mes);
            document.write("</li>");
        }
    document.write("</ul>");
}

renderizandoMeses(meses);