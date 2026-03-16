// ================================================
// 📋 BLOQUE 2 — Arrays y Objetos
// ================================================
// Practica el tipado de colecciones y estructuras
// de datos en TypeScript.
// ================================================

// 🟢 EJERCICIO 1
// Declara un array de strings con tus 3 materias favoritas.

// Tu código aquí:

const favoritesClases: string[] = ["Matematicas", "Física", "Química"]; // Solo como dato, elegí "const" porque para mi esas materias siempre van a ser mis favoritas, así que no necesitan cambiar

// 🟢 EJERCICIO 2
// Declara un array de numbers con 4 calificaciones.

// Tu código aquí:

const calificaciones: number[] = [10, 8.5, 9, 6] ;// Dato: Elegí const porque las calificaciones una vez asignadas no suelen cambiar amenos que haya correciones

// 🟡 EJERCICIO 3
// Crea un objeto que represente un libro con:
// - titulo (string)
// - autor (string)
// - paginas (number)
// - disponible (boolean)

// Tu código aquí:

const libro: {
    titulo: string;
    autor: string;
    paginas: number;
    disponible: boolean;
} = {
    titulo: "Gramatica del Inglés",
    autor: "miondator",
    paginas: 409,
    disponible: true,
};

// 🟡 EJERCICIO 4
// Crea un objeto que represente tu perfil de GitHub con:
// - username
// - repositorios (número)
// - siguiendo (número)
// - seguidores (número)

// Tu código aquí:

const perfil: {
    username: string;
    repositories: number;
    following: number;
    followers: number;
} = {
    username: "miondator9",
    repositories: 9,
    following: 69,
    followers: 15,
}

// ================================================
// 💡 RETO EXTRA
// Este código tiene errores. Identifícalos y corrígelos.

const lenguajes: string[] = ["TypeScript", "42", "true"];

const proyecto: {
    nombre: string;
    version: number;
} = {
    nombre: "Mi App",
    version: 1.0
}
// ================================================
