//1. Creamos una fucion para cargar el archivo json//
async function cargar_videojuegos(){
    const buscar= await fetch ('videojuegos.json') //esto busca el archivo json
    const datos= await buscar.json() //para convertir el archivo json en datos que js entienda
    const tabla=document.getElementById('tabla-contenido') //seleccionamos el cuerpo de la tabla

    //recorremos la lista de videojuegos//
    datos.forEach(juego => {
        const fila= document.createElement('tr') //asi creamos una fila nueva
        fila.innerHTML=`
            
            <td><strong>${juego.titulo}</strong></td>
            <td>${juego.desarrolladora}</td>
            <td>${juego.lanzamiento}</td>
            <td><img src= "${juego.portada}" class="portada-img"></td>`; //creamos cada celda

            tabla.appendChild(fila) //añadimos cada fila
            
        
    });
}

//2.ejecutamos la funcion para que se carguen los datos del documento json
cargar_videojuegos();
    
 