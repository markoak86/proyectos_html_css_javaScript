/*1. Seleccionamos las imagenes y las agregamos a la carpeta del dom.*/

/*2. Creampos un array con la lista de imagenes y otro con la lista de enlaces.*/
const listaImagenes = ['ordenador.jpg', 'placa_base.jpg', 'servidor.jpg']
const listaEnlaces = ['Ver Ordenador', 'Ver Placa Base', 'Ver Servidor']

/*3. Creamos el elemento principal (la tabla).*/
const tabla = document.createElement('table');

/*Creamos los estilos de la tabla*/
tabla.style.border = '2px solid #333';
tabla.style.borderCollapse = 'collapse';
tabla.style.width = '70%';
tabla.style.margin = '50px auto';
tabla.style.textAlign = 'center';
tabla.style.fontFamily = 'Arial, sans-serif';

/*4. Creamos las 2 filas de la tabla con un bucle for (2 elementos diferentes).*/
for (let f = 0; f < 2; f++) {
    const fila = document.createElement('tr');
    /*5. Y con un for anidado creamos las tres columnas de cada fila:*/
    for (let c = 0; c < 3; c++) {
        const columna = document.createElement('td')

        /*Creamos los estilos de cada columna*/
        columna.style.border = '2px solid #333';
        columna.style.padding = '20px';
        columna.style.textAlign = 'center';
        columna.style.backgroundColor = '#f4f4f4'

        /*una vez creamos la columna, la rellenamos, o bien con la imagen si es la columna de la fila 1,
        o con el enlace, si es la coulumna de la fila 2:*/
        if (f === 0){
            /*Primero, creamos el elemento imagen*/
            const imagen = document.createElement('img');
            /*Despues, creamos el contenido del elemento*/
            imagen.src =listaImagenes[c];
            imagen.width = 150;
            /*Por ultimo, es añadir el contenido al elemento.*/
            columna.appendChild(imagen);
        }
        else if (f === 1) {
            /*En la fila 2, creamos el elemento enlace*/
            const enlace = document.createElement('a');
            /*Aqui, creamos el contenido*/
            enlace.href ='#';
            const textoEnlace = document.createTextNode(listaEnlaces[c]);
            enlace.appendChild(textoEnlace)
            /*Y por ultimo, añadimos el contenido del enlace al elemento enlace*/
            columna.appendChild(enlace);

            
        } 

        /*6. Añadimos la celda a fila*/
        fila.appendChild(columna);

        
    }
    /*7. Añadimos una fila entera a la tabla.*/
        tabla.appendChild(fila);
}

/*Añadirmos la tabla, al documento html.*/
document.body.appendChild(tabla);

