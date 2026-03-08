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


// ================================================
// 🟡 EJERCICIO 4 — Arrays + Bucles
// ================================================
// Tienes este array de precios:
const precios: number[] = [120, 45, 300, 89, 210, 55, 175];
// Escribe un bucle que imprima solo los precios
// mayores a 100.

// Tu código aquí:


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


// ================================================
// 🔴 EJERCICIO 8 — Variables + Arrays + Bucles + Condicionales
// ================================================
// Tienes las calificaciones de un grupo de estudiantes:
const calificaciones: number[] = [85, 42, 91, 67, 55, 78, 95, 38, 72, 88];
//
// Escribe el código necesario para:
// 1. Contar cuántos estudiantes aprobaron (calificación >= 60)
// 2. Contar cuántos reprobaron (calificación < 60)
// 3. Imprimir ambos resultados al final
// Pista: necesitas dos variables contadoras
// que inicien en 0 y vayan sumando dentro del for

// Tu código aquí:


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
