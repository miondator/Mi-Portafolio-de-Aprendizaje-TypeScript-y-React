// ================================================
// 🎯 PRÁCTICA MIXTA — Todos los temas
// ================================================
// Los ejercicios están mezclados a propósito.
// Tú decides qué herramientas usar en cada uno.
// 🟢 Básico | 🟡 Intermedio | 🔴 Avanzado
// ================================================


// ================================================
// 🟢 EJERCICIO 1 — Variables
// ================================================
// Declara las variables necesarias para representar
// el estado actual de un videojuego:
// - El nombre del jugador
// - El nivel actual (puede subir)
// - Los puntos acumulados (pueden cambiar)
// - El nombre del juego (nunca cambia)
// - Si el jugador tiene vidas extra disponibles

// Tu código aquí:

const playerName: string = "miondator";
let levelPlayer: number = 55;
let scorePlayer: number = 69;
const gameName: string = "Terraria"
let extraLifePlayer: boolean = true

// ================================================
// 🟢 EJERCICIO 2 — Condicionales
// ================================================
// Escribe un if/else if/else que evalúe una
// calificación (number) e imprima:
// - 90 o más → "Excelente"
// - 70 a 89  → "Aprobado"
// - 50 a 69  → "Suficiente"
// - Menos de 50 → "Reprobado"

// Tu código aquí:

let calificacion: number = 78

if (calificacion >= 90) {
    console.log("Excelente")
} else if (calificacion >= 70 && calificacion < 90){
    console.log("Aprobado")
} else if (calificacion >= 50 && calificacion < 70) {
    console.log("Suficiente")
} else{
    console.log("Reprobado")
}


// ================================================
// 🟢 EJERCICIO 3 — Funciones
// ================================================
// Crea una arrow function "esPar" que:
// - Reciba un número
// - Retorne true si es par, false si no
// Pista: un número es par si el residuo de
// dividirlo entre 2 es 0. En TypeScript el
// operador para obtener el residuo es %
// Ejemplo: 10 % 2 === 0 → true

// Tu código aquí:

const esPar = (numero:number): boolean => numero % 2 === 0


// ================================================
// 🟡 EJERCICIO 4 — Arrays + Bucles
// ================================================
// Tienes este array de precios:
const precios: number[] = [120, 45, 300, 89, 210, 55, 175];
// Escribe un bucle que imprima solo los precios
// mayores a 100.

// Tu código aquí:

for ( let i: number = 0; i < precios.length; i++) {
    if (precios[i] > 100){
        console.log(precios[i])
    }
}

// ================================================
// 🟡 EJERCICIO 5 — Objetos + Condicionales
// ================================================
// Crea un objeto que represente una cuenta bancaria con:
// - titular (string)
// - saldo (number)
// - cuentaActiva (boolean)
//
// Luego escribe una función "retirar" que:
// - Reciba el objeto cuenta y un monto (number)
// - Si la cuenta no está activa → imprima "Cuenta inactiva"
// - Si el monto es mayor al saldo → imprima "Saldo insuficiente"
// - Si todo está bien → imprima "Retiro exitoso. Saldo restante: X"

// Tu código aquí:

const cuentaBancaria: {
    titular: string;
    saldo: number;
    cuentaActiva: boolean;
} = {
    titular: "Rafa Gonzalez",
    saldo: 2030.98,
    cuentaActiva: true
}

function retirar(cuentaBancaria:{
    titular: string,
    saldo:number,
    cuentaActiva: boolean
}, 
    retiro:number): string {
    if (cuentaBancaria.cuentaActiva === false){
        return "Cuenta inactiva"
    } else if (cuentaBancaria.saldo<retiro) {
        return "Saldo insuficiente"
    } else{
        cuentaBancaria.saldo = cuentaBancaria.saldo - retiro
        return "Retiro exitoso. Saldo restante: " + cuentaBancaria.saldo
    }
}

// ================================================
// 🟡 EJERCICIO 6 — Switch
// ================================================
// Crea un switch para una app de transporte que reciba
// una variable "transporte" (string) y retorne
// el tiempo estimado de viaje:
// - "coche"    → "20 minutos"
// - "bicicleta"→ "45 minutos"
// - "metro"    → "30 minutos"
// - "a pie"    → "1 hora 20 minutos"
// - cualquier otro → "Transporte no reconocido"

// Tu código aquí:

let transporte: string = "a pie"

switch(transporte) {
    case "coche":
        console.log("Tiempo estimado de viaje: 20 minutos")
        break
    case "bicicleta":
        console.log("Tiempo estimado de viaje: 45 minutos")
        break
    case "metro":
        console.log("Tiempo estimado de viaje: 30 minutos")
        break
    case "a pie":
        console.log("Tiempo estimado de viaje: 1 hora 20 minutos")
        break
    default:
        console.log("Transporte no reconocido")
        break
}

// ================================================
// 🟡 EJERCICIO 7 — Bucles + Funciones
// ================================================
// Crea una función "encontrarMaximo" que:
// - Reciba un array de numbers
// - Recorra el array con un for
// - Retorne el número más grande
// Ejemplo: encontrarMaximo([3, 9, 1, 7, 4]) → 9
// Pista: necesitas una variable que guarde
// el máximo encontrado hasta ese momento

// Tu código aquí:

function encontrarMaximo(numeros: number[] = [3,9,1,7,4,29,12,91,0]) {
    let numeroMayor: number = 0;

    for (let i: number = 0; i<numeros.length; i++) {

        if (numeros[i] > numeroMayor) {
            numeroMayor = numeros[i]
        }

    }
    return numeroMayor
}

// ================================================
// 🔴 EJERCICIO 8 — Variables + Arrays + Bucles + Condicionales
// ================================================
// Tienes las calificaciones de un grupo de estudiantes:
const calificaciones_mix: number[] = [85, 42, 91, 67, 55, 78, 95, 38, 72, 88];
//
// Escribe el código necesario para:
// 1. Contar cuántos estudiantes aprobaron (calificación >= 60)
// 2. Contar cuántos reprobaron (calificación < 60)
// 3. Imprimir ambos resultados al final
// Pista: necesitas dos variables contadoras
// que inicien en 0 y vayan sumando dentro del for

// Tu código aquí:

let aprobados: number = 0;
let reprobados: number = 0;
for (let i: number = 0; i<calificaciones_mix.length; i++) {
    
    if (calificaciones_mix[i] >= 60){
        aprobados = aprobados + 1
    } else if (calificaciones_mix[i] < 60){
        reprobados = reprobados + 1
    }
}

console.log("La cantidad de alumnos aprobados fueron: " + aprobados + "\nLa cantidad de alumnos reprobados fueron: " + reprobados)

// ================================================
// 🔴 EJERCICIO 9 — Objetos + Funciones + Condicionales
// ================================================
// Crea un objeto "tienda" con:
// - nombre (string)
// - productos: array de objetos, cada uno con:
//     nombre (string), precio (number), disponible (boolean)
//
// Luego crea una función "buscarProducto" que:
// - Reciba el array de productos y un nombre (string)
// - Recorra el array buscando ese producto
// - Si lo encuentra Y está disponible → retorne su precio
// - Si lo encuentra pero NO está disponible → retorne "Producto agotado"
// - Si no lo encuentra → retorne "Producto no existe"

// Tu código aquí:

// Primer intento
const tienda: {
    nombreTienda: string;
    productos:{
        nombreProducto: string,
        precio: number,
        disponible: boolean;
    }[]
} = {
    nombreTienda: "Abarrotes Chayo",
    productos : [
        {
            nombreProducto: "Coca cola",
            precio : 22,
            disponible : true
        },
        {
            nombreProducto : "Gansito",
            precio : 15,
            disponible : true
        },
        {
            nombreProducto : "Pepsi",
            precio : 23,
            disponible : false
        }
    ]
}

function buscarProductos(
    tienda: {nombreProductos:string, precio:number, disponible:boolean}, productoDeseado: string = "Coca cola") {
    for(productoDeseado in tienda){
        if(productoDeseado===tienda.nombreProductos[0] && tienda.disponible === true){
            console.log(tienda.nombreProductos + " - Disponible\nPrecio: " + tienda.precio)
        } else if(productoDeseado===tienda.nombreProductos[0] && tienda.disponible === false){
            console.log("Producto agotado")
        } else{
            console.log("Producto no existe")
        }
    }
}

//Versión 2 del reto <---- Esta sí está bien jajaja
function buscarProductos2(
    productos: {
        nombreProducto: string;
        disponibilidad: boolean;
        precio: number
    }[],
    productoDeseado: string ="Pepsi"
): string {
    if( productos.length===0){
        return "No existen productos"
    }
    for(let i:number = 0; i<productos.length; i++) {
        if(productoDeseado === productos[i].nombreProducto && productos[i].disponibilidad === true){
            return "El producto " + productoDeseado + " está disponible.\nPrecio: " + productos[i].precio
        } else if (productoDeseado === productos[i].nombreProducto && productos[i].disponibilidad === false){
            return "Producto no disponible"
        }
    }
    return "Producto no existe"
}


// ================================================
// 🔴 RETO FINAL — Todo junto
// ================================================
// Construye un sistema simple de calificaciones:
//
// 1. Crea un array de objetos "alumnos", cada uno con:
//    - nombre (string)
//    - calificaciones: number[] (mínimo 4 materias)
//
// 2. Crea una función "promedioAlumno" que:
//    - Reciba el array de calificaciones de un alumno
//    - Retorne su promedio
//
// 3. Crea una función "estado" que:
//    - Reciba un promedio (number)
//    - Retorne "Excelente" / "Aprobado" / "Reprobado"
//    según el criterio que tú definas
//
// 4. Crea una función "reporte" que:
//    - Reciba el array de alumnos
//    - Recorra cada alumno con un for
//    - Para cada uno imprima:
//      "Alumno: [nombre] | Promedio: [X] | Estado: [Y]"

// Tu código aquí:

const alumnos : {
    nombre: string;
    calificaciones: number[];
}[] = [
    {
        nombre: "Rafa Gonzalez",
        calificaciones: [10,8,7,6,5,8,6]
    },
    {
        nombre: "Tristan Ruelas",
        calificaciones: [7,7,7,7,7,8,10]
    },
    {
        nombre: "Ariel Garcia",
        calificaciones: [10,10,8,9,7,2,5]
    },
    {
        nombre: "Valeria Garcia",
        calificaciones: [10,10,10,10,8,8,9]
    }
]

function promedioAlumno(calificaciones:number[]): number {
    if (calificaciones.length === 0) {
        return  0
    } else {
        let promedio: number = 0
        for (let i:number = 0; i<calificaciones.length;i++){
            promedio = promedio + calificaciones[i]
        }
        return promedio/calificaciones.length
    }
}

function estado (promedio:number) : string {
    if(promedio > 80){
        return "Excelente"
    } else if (promedio < 80 && promedio > 70){
        return "Aprobado"
    } else {
        return "Reprobado"
    }
}

function reporte (alumnos:{
    nombre: string;
    calificaciones: number[];}[]
) {

    if (alumnos.length === 0) {
        return "No existen alumnos"
    }

    for (let i:number=0; i<alumnos.length; i++) {
        console.log("El alumno " + alumnos[i].nombre + " tiene un promedio de " + promedioAlumno(alumnos[i].calificaciones) + ", es decir, tiene un estado " + estado(promedioAlumno(alumnos[i].calificaciones)))
    }
}