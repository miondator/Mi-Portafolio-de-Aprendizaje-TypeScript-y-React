// ================================================
// 📦 BLOQUE 1 — Variables
// ================================================
// Practica lo que aprendiste sobre const, let y
// tipos básicos en TypeScript.
// ================================================

// 🟢 EJERCICIO 1
// Declara las siguientes variables con el tipo correcto:
// - Tu nombre completo (no cambiará)
// - Tu edad (puede cambiar)
// - Si actualmente estás estudiando (puede cambiar)

// Tu código aquí:
const nombre: string = "Rafa Gonzalez";
let edad: number = 22;
let estudiando: boolean = true;

// 🟢 EJERCICIO 2
// Declara una variable para cada tipo básico:
// string, number y boolean. Elige tú los valores.

// Tu código aquí:
let texto: string = "Kirby";
let numero: number = 69;
let buleano: boolean = false;

// 🟡 EJERCICIO 3
// ¿Cuál usarías aquí, const o let? Justifica en un comentario.
// - El número de vidas en un videojuego
// - El nombre de una app
// - La temperatura actual del clima
// - El año de fundación de una empresa

// Tu código aquí:
let lives: number = 3; // La declararía como tipo let ya que las vida en un videojuego van en aumento o disminuyendo según eventos que ocurran dentro del mismo
const appName: string = "Facebook" // Una app cuando es lanzada su nombre siempre es definido nunca cambia o al menos no suele sucedes es extremadamente raro
let temperature: number = 32 // La temperatura en la vida real sube y baja por lo tanto aplica la misma lógica en el código
const inauguracion: number = 1992 // Se declara con const porque esa fecha nunca va a cambiar, siempre fue, es y será la fecha que reciba


// ================================================
// 💡 RETO EXTRA
// Este código tiene 2 errores de TypeScript.
// Identifícalos y corrígelos con un comentario.

let puntos: number = 100;
//puntos = "doscientos";         // Error: ?
puntos = 200;

const usuario: string = "Rafa";
//usuario = "Luis";              // Error: ?
// ================================================
//let puntos: number = 100;
//puntos = 25;

// const usuario: string = "Rafa";
// usuario = "Luis"; <-- No debe existir esta linea ya que "usuario" se declaro como una constante, si se quisiera hacer eso se tendría que declarar como let y quedaría de la siguiente manera

// let usuario: string = "Rafa";
// usuario = "Luis";
