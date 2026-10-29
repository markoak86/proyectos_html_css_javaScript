/*1. Pedir un nombre por pantalla y el numero que se quiere que se imprima por pantalla dicho nombre.

- Definimos las variables*/
nombre = prompt("Escriba su nombre y pulse enter:")
numero = Number(prompt("Cuantas veces quiere que se imprima su nombre?"))

/*- Escribimos el bucle for para imprimir los nombres*/
for (let contador = 0; contador < numero; contador ++ ){
    console.log(nombre)
}

/*2. Imprimir los numeros del uno al cien en intervalos de 10.

-  Este ejercicio se puede resolver con un bucle for*/
for (let numero = 0; numero <= 100; numero = numero + 10){
    console.log(numero)
}

/* - Tambien se puede resolver con un bucle while */
var numero_while = 1

while (numero_while <= 100){
    numero_while = numero_while + 10
    console.log(numero_while)
}

/*3. Pedir por pantalla el numero de filas y el numero de celdas por fila y crear una tabla con esas dimensiones 

- Primero hay que pedir el numero de filas y el numero de celdas por fila*/
let numero_filas = Number(prompt("Cuantas filas quiere que tenga su tabla?"))
let numero_celdas_por_fila = Number(prompt("Cuantas filas quiere que tenga cada fila de su tabla"))

/*- Ahora se crean las variable de la tabla*/
let tabla = document.createElement("table")
tabla.border = "1"


/*- Y por ultimo, creamos los bucles anidados para crear cada fila */
for (let i = 0; i < numero_filas; i ++){
    /*Creamos la fila */
    let fila = document.createElement("tr")
    
    for(let x = 0; x < numero_celdas_por_fila; x++){
        let celda = document.createElement("td")
        celda.textContent = "Celda"
        /*Introducimos la celda en la correspondiente fila */
        fila.append(celda)
    }
    /*Metemos cada fila en la tabla */
    tabla.append(fila)
    /*Mostramos la tabla*/
    document.body.append(tabla)

}