/*1. Solicitar un numero y crear un array con ese numero de celdas (espacios) 

- Pedimos el numero para crear el array*/
let numero = Number(prompt("Cuantos elementos quiere que tenga su array en el bucle for?"))

/* -Definimos las variables y el array*/
let celda = 0
let array = []

/*Creamos el array con un bucle for*/
for (let i = 0; i <= numero; i++){
    celda ++
    array.push(celda)

}
console.log(array)

/*- Hacer lo mismo, pero con un bucle while */
let numero_while = Number(prompt("Cuantos elementos quieres que tenga tu array en el bucle while?"))
let celda_while = 0
let array_while = []

while (celda_while < numero_while) {
    array_while.push(celda_while)
    celda_while ++

}
console.log(array_while)

/*2. Crear un array con 5 imagenes y solicitar al usuario por pantalla, que imagen quiere ver 

- Definimos las variables de las imagenes*/
let gato = "cat-551554_1280.jpg"
let caballo = "a46706f257f6e54d736fd19bc39d4f1a.jpg"
let oveja = "nature-9899712_640.jpg"
let delfin = "2025-01-08-19-54-52-576x576.jpeg"
let pinguino = "97c903a36b3a94002f20d46c7a73058b.jpg"

/*- Definimos el array con las cinco imagenes */
let animales = [gato, caballo, oveja, delfin, pinguino]

/*- Pedimos al usuario la imagen que quiere imprimir */
let imagen = Number(prompt("MENU\n1.Gato\n2.Caballo\n3.Oveja\n4.Delfin\n5.Pinguino\nPulsa el numero del animal que quieres ver?"))

/*Creamos una imagen de HTML */
let imagen_visible = document.createElement("img")

if (imagen == 1){
    /*ahora vamos seleccionando las imagenes del array */
    imagen_visible.src = animales[0]
}
else if (imagen == 2){
    imagen_visible.src = animales[1]
}
else if (imagen == 3){
    imagen_visible.src = animales[2]
}
else if (imagen == 4){
    imagen_visible.src = animales[3]
}
else if (imagen == 5){
    imagen_visible.src = animales[4]
}

/*-Añadimos la imagen al documento html para que aparezca en el navegador. */
document.body.append(imagen_visible)