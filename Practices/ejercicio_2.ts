// ================================================
// ⚙️ BLOQUE 3 — Funciones
// ================================================
// Practica funciones tradicionales y arrow functions
// con tipado en TypeScript.
// ================================================

// 🟢 EJERCICIO 1
// Crea una función tradicional llamada "saludar" que:
// - Reciba un nombre (string)
// - Retorne el mensaje "Hola, [nombre]!"

// Tu código aquí:
function saludar(name:string): string {
    return "Hola, " + name
};

// 🟢 EJERCICIO 2
// Convierte la función anterior a una arrow function.

// Tu código aquí:

const saludo = (name:string) : string => "Hola, " + name;

// 🟡 EJERCICIO 3
// Crea una función "esMayorDeEdad" que:
// - Reciba una edad (number)
// - Retorne true si es mayor o igual a 18, false si no

// Tu código aquí:

function esMayorDeEdad (edad: number): boolean {
    if (edad>= 18){
        return true
    } else{
        return false
    };
};
    

// 🟡 EJERCICIO 4
// Crea una función "describir" que:
// - Reciba nombre (string) y edad (number)
// - Retorne el mensaje "Me llamo [nombre] y tengo [edad] años"

// Tu código aquí:

const describir = (nombre: string, edad: number) => "Me llamo " + nombre + " y tengo " + edad + " años"

// ================================================
// 💡 RETO EXTRA
// Escribe esta función en su versión corta (una línea)

const multiplicar = (a: number, b: number): number => {
    return a * b
}

// Versión corta:
// Tu código aquí:
// ================================================
// const multiplicar = (a: number, b: number): number => a*b