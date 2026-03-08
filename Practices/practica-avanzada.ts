// ================================================
// 🔥 PRÁCTICA AVANZADA — Variables, Arrays, Objetos y Funciones
// ================================================
// Estos ejercicios combinan todo lo que has aprendido.
// Tómate tu tiempo — el objetivo es reflexionar, no terminar rápido.
// ================================================


// ================================================
// 📦 SECCIÓN 1 — Variables (Nivel avanzado)
// ================================================

// 🟡 EJERCICIO 1
// Tienes una aplicación de música. Declara variables para:
// - El nombre de la canción que suena actualmente
// - El volumen actual (0 al 100)
// - Si el reproductor está en pausa
// - El nombre de la app (no cambiará nunca)
// Elige const o let según corresponda y justifica en comentarios.

// Tu código aquí:

const currentSong: string = "Hasta la Raiz"; // Elegí const porque la canción nunca va cambiar su nombre pero si estuvieramos escuchando por ejemplo una playlist y este cambiando frecuentemente la canción usaria let en su lugar
let volumen: number = 60; // Usé let porque el volumen puede aumentar o disminuir
let speakerIsPlaying: boolean = true; // Use let porque el valor puede cambiar entre pausa y reproduciendo que en lógica de código sería un true o false
const musicApp: string = "Spotify"; // Const porque nunca va a cambiar ese nombre 


// 🔴 EJERCICIO 2
// ¿Qué está mal en este código? Hay 3 errores.
// Identifícalos y corrígelos con comentarios explicando cada uno.

const pi: number = 3.14;
//pi = 3.14159; 
// El error está en que se está tratando de reasignar un valor a una constante y las constantes nunca cambian, NUNCA, por lo tanto solo deberíamos tener: const pi: number = 3.14;

// let bienvenida: string = "Hola";
// bienvenida = 100; 
// El error está en que nuestra variable bienvenida espera un string, no un number, si acaso nosotros quisieramos agregar ese 100 debería incluir dobles comillas ("100") para que pase como un string y no como un number
let bienvenidaSaludo: string = "Hola";
bienvenidaSaludo = "Saludos"; 

let activo: boolean = true;
//let activo: boolean = false; 
activo = false;

// Tu corrección aquí:
// El error está en que estamos volviendo a crear una misma variable "activo", si quisieramos cambiar el valor actual de activo (true) deberíamos hacerlo de la siguiente manera
// activo = false
// Y de esa manera si se estaría reasignando el valor o actualizandolo, como quieras verlo, y no volviendo a declarar la misma variable 

// ================================================
// 📋 SECCIÓN 2 — Arrays y Objetos (Nivel avanzado)
// ================================================

// 🟡 EJERCICIO 3
// Crea un objeto que represente un producto de una tienda online.
// Debe tener al menos 5 propiedades con tipos variados
// (usa string, number y boolean).
// Piensa qué propiedades tendría un producto real en Amazon o Mercado Libre.

// Tu código aquí:

let telefono: {
    marca: string;
    modelo: string;
    precio: number;
    procesador: string;
    unidadesDisponibles: number;
    proteccionContraAgua: boolean;
    desbloqueoFacial: boolean;
    libreDeCompañia: boolean;
} = {
    marca: "Xiaomi",
    modelo: "Redmi note 14 Pro 4G versión global",
    precio: 6500,
    procesador: "Helio P100 plus",
    unidadesDisponibles: 2340,
    proteccionContraAgua: false,
    desbloqueoFacial: true,
    libreDeCompañia: true
}

// 🟡 EJERCICIO 4
// Crea un array para cada caso y justifica el tipo elegido:
// - Los días de la semana
// - Las temperaturas de los últimos 5 días
// - Si cada día de la semana es laborable o no (true/false)

// Tu código aquí:
let weekDays: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] // Elegí un arry tipo String porque solo voy a necesitar texto, son días, no números
let temperatureFiveDays: number[] = [32, 28, 10, 33, 24, 30, 20, 30, 26, 12, -2, 5] // Definí un array tipo number porque la temperatura son números, así que necesito solo valores tipo number
let laborableDay: boolean[] = [true, false] // Aquí si tengo duda por la indicación, creo que esto fue lo que me pediste pero no estoy seguro, pero para validar si un dia es laboral o no usariomos un array que solo contenga buleanos que serían true o false


// 🔴 EJERCICIO 5
// Este objeto representa un usuario de una app.
// Tiene 4 errores. Encuéntralos y corrígelos.

// const usuarioApp: {
//     nombre: string;
//     edad: number;
//     email: string;
//     premium: boolean;
// } = {
//     nombre: 123, 
//     edad: "veinticinco", 
//     email: "rafa@gmail.com",
//     premium: "true" 
// }

// Tu corrección aquí:

const usuarioApp: {
    nombre: string;
    edad: number;
    email: string;
    premium: boolean;
} = {
    nombre: "Rafa", 
    edad: 22, 
    email: "rafa@gmail.com",
    premium: true 
}

// Ingresó un valor tipo number y la variable esperaba recibir un string ya sea "123" o "uno, dos y tres" o el texto que fuese
// Cuando tu variable espera un number e ingresas un número de manera escrita no cuenta como número sino como string, además que aquí se asignó un valor tipo string, debería haber sido así: edad: 25 ,es decir, había dos errores, se escribio como se dice el número y además se ingresó como un string y no un number
// En si está bien, recibió un buleano pero lo asignaron como un tipo string con esas dobles comillas, debió haber llegado solo el true


// ================================================
// ⚙️ SECCIÓN 3 — Funciones (Nivel avanzado)
// ================================================

// 🟡 EJERCICIO 6
// Crea una función "calcularDescuento" que:
// - Reciba un precio (number) y un descuento en % (number)
// - Retorne el precio final después del descuento
// Ejemplo: calcularDescuento(100, 20) → 80

// Tu código aquí:

let calcularDescuento = (precio: number, descuento: number): number => precio - (precio * descuento/100) 

// 🟡 EJERCICIO 7
// Crea una función "presentar" que:
// - Reciba nombre (string), edad (number) y profesion (string)
// - Retorne: "Soy [nombre], tengo [edad] años y soy [profesion]"
// Escríbela primero como función tradicional y luego como arrow function.

// Función tradicional:

function presentar(name: string, edad: number, profesion: string): string {
    return "Soy " + name + " y tengo " + edad + " años y soy " + profesion
}

// Arrow function:
let presentar2 = (name:string, edad:number, profesion:string) :string => "Soy " + name + " y tengo " + edad + " años y soy " + profesion

// 🔴 EJERCICIO 8
// Esta función tiene 3 errores. Identifícalos y corrígelos.

function dividir(a: number, b:number): number {
    return a + b 
}

const cuadrado = (n: number): number => n * n 

function bienvenida(nombre: string): string {
    //return 42
    return "Bienvenido " + nombre 
}

// Tu corrección aquí:
// 1. La función indica que es una división pero el resultado que se retorna es una suma, la funcipón debería retornar: return a/b
// 2. El retorno está bien ya que está elevando al cuadrado el valor que se recibe, pero el otro aquí es que se definió que n es un string, no un number, así que el error está ahí debería ser (n:number)
// 3. Fácil, estás retornando un número cuando debes retornar un string, podría ser por ejemplo: return "Hola " + nombre

// ================================================
// 💡 RETO FINAL — Todo junto
// ================================================
// Crea un objeto que represente un estudiante universitario con:
// - nombre, edad, carrera (datos básicos)
// - Un array de materias que está cursando este semestre
// - Un array de calificaciones correspondientes a esas materias
// - Si tiene beca o no
//
// Luego crea una función "promediar" que:
// - Reciba un array de numbers (las calificaciones)
// - Retorne el promedio como number
//
// Finalmente crea una función "presentarEstudiante" que:
// - Reciba el objeto estudiante
// - Retorne una descripción completa usando sus datos
// ================================================



const estudianteDos: {
    nombre: string;
    edad: number;
    carrera: string;
    materias: string[];
    calificaciones:number[];
    becario:boolean;
} = {
    nombre: "Rafa Gonzalez",
    edad: 22,
    carrera: "Ingenieria en software",
    materias: ["Algebra lineal", "Base de datos", "Algoritmos", "Desarrollo de software", "Estructura de datos"],
    calificaciones: [10, 9, 10, 10, 9.5],
    becario: false
}

// Tu código aquí:

// Primer intento fallido

// function promediar(calificaciones:number[]): number {
//     let resultado: number;
//     resultado: i = for(i in calificaciones): i + i
// } // Ay no supe resolverlo, quise hacerlo como un comprhensension de python y no me resultó 

//Solución después de entender como funcionan los bucles y condicionales
function promediar (calificaciones:number[]): number{
    let promedio:number = 0
    for (let i:number= 0; i<calificaciones.length; i++) {
        promedio = promedio + calificaciones[i]
    }
    return promedio / calificaciones.length
}

//Primer intento fallido

// function presentarEstudiante(estudianteDos) {
//     return console.log(i) for(i in estudianteDos)
// } //Igual intenté hacerlo como en python pero creo que no resultó

//Solución despues de entender como funcionan los bucles y condicionales
function presentarEstudiante (estudianteDos:{
    nombre: string;
    edad: number;
    carrera: string;
    materias: string[];
    calificaciones: number[];
    becario: boolean
}):string {
    let descripcion: string = "Nombre del adulto: " + estudianteDos.nombre + "\nEdad: " + estudianteDos.edad + "\nCursa la carrera: "+ estudianteDos.carrera + "\nMaterias actuales:\n"

    for (let materia: number= 0; materia<estudianteDos.materias.length; materia++){
        descripcion = descripcion + estudianteDos.materias[materia]
    }
    
    descripcion = descripcion + "\nCalificaciones actuales:\n"

    for (let calificacion: number= 0; calificacion<estudianteDos.calificaciones.length; calificacion++ ){
        descripcion = descripcion + estudianteDos.calificaciones[calificacion]
    }
    descripcion = descripcion + "\nEl alumno es becario: " + estudianteDos.becario
    return descripcion
}