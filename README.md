# 📚 Mi Portafolio de Aprendizaje — TypeScript & React

> Repositorio personal para documentar mi progreso aprendiendo TypeScript y React desde cero.

---

## 🗺️ Contexto — ¿De dónde vienen estos lenguajes?

### La trinidad del desarrollo web

| Tecnología | Rol |
|-----------|-----|
| **HTML** | Esqueleto — estructura de la página |
| **CSS** | Apariencia — estilos visuales |
| **JavaScript** | Comportamiento — interacciones y eventos |

### JavaScript
Creado en **1995** por Brendan Eich en solo 10 días para Netscape.
Diseñado para scripts pequeños, con el tiempo se empezó a usar en aplicaciones enormes — lo que expuso sus limitaciones, especialmente la falta de tipado.

### TypeScript
Creado por **Microsoft en 2012** como respuesta a los problemas de escala de JavaScript.

- No reemplaza a JavaScript — **es JavaScript con reglas extra**
- Todo código JavaScript válido es también TypeScript válido
- Su ventaja principal: detectar errores en **tiempo de desarrollo**, no en producción

```javascript
// JavaScript: error silencioso
function sumar(a, b) { return a + b }
sumar("5", 3) // → "53" 😱

// TypeScript: error inmediato
function sumar(a: number, b: number) { return a + b }
sumar("5", 3) // → ❌ Error: "5" no es un número
```

### React
Creado por **Facebook en 2013** para resolver la complejidad de interfaces grandes.

- Organiza la UI en **componentes** reutilizables
- Usa un **Virtual DOM** — una copia virtual de la interfaz en memoria
- Cuando algo cambia, actualiza **únicamente el componente afectado**, no toda la página

### ¿Cómo se complementan?

> **TypeScript** se encarga de la veracidad y seguridad de los datos en tiempo de desarrollo.
> **React** se encarga del control eficiente de la interfaz mediante componentes y Virtual DOM.
> **Juntos** forman una aplicación estable, predecible y eficiente en recursos.

---

## 📦 Variables

En JavaScript/TypeScript existen tres formas de declarar variables:

| Palabra clave | ¿Redeclarar? | ¿Reasignar? | Uso recomendado |
|---|---|---|---|
| `var` | ✅ Sí | ✅ Sí | ⚠️ Evitar en código moderno |
| `let` | ❌ No | ✅ Sí | Valores que cambian |
| `const` | ❌ No | ❌ No | Valores fijos |

```typescript
const nombre: string = "Rafa Gonzalez";  // nunca cambia
let edad: number = 22;                    // puede cambiar
let estudiante: boolean = true;           // puede cambiar
```

---

## 🔤 Tipos básicos

TypeScript añade anotaciones de tipo con la sintaxis `variable: tipo`.

```typescript
let texto: string = "Hola mundo";   // texto
let numero: number = 42;             // entero o decimal
let activo: boolean = true;          // verdadero/falso
```

> 💡 A diferencia de Python, `number` cubre tanto enteros como decimales
> (no hay `int` y `float` por separado)

---

## 📋 Arrays

Un array es una lista ordenada de elementos del mismo tipo.
Equivalente a las **listas de Python**.

```typescript
// Sintaxis: tipo[]
const materias: string[] = ["Matemáticas", "Historia", "Programación"];
const calificaciones: number[] = [9, 8, 10];
```

---

## 🗂️ Objetos

Un objeto agrupa datos relacionados en pares `clave: valor`.
Equivalente a los **diccionarios de Python**.

```typescript
// La sección de tipos usa (;) para separar
// La sección de valores usa (,) para separar
const estudiante: {
    nombre: string;
    edad: number;
    activo: boolean;
} = {
    nombre: "Rafa Gonzalez",
    edad: 22,
    activo: true
}
```

---

## ⚙️ Funciones

Un bloque de código reutilizable que se ejecuta solo cuando es llamado.
Puede recibir parámetros y retornar un valor.

### Función tradicional

```typescript
function suma(a: number, b: number): number {
    return a + b
}

function saludar(nombre: string): string {
    return "Hola, " + nombre
}
```

### Arrow Function

Forma más corta y moderna de escribir funciones.
Muy común en React.

```typescript
// Con bloque {}
const saludar = (nombre: string): string => {
    return "Hola, " + nombre
}

// Versión corta (una sola línea)
const saludar = (nombre: string): string => "Hola, " + nombre
```

> 💡 Ambas formas son equivalentes. La versión corta se usa cuando
> la función solo tiene una línea de retorno.

---

## 🔀 Condicionales

Permiten ejecutar bloques de código diferentes dependiendo de si una condición se cumple o no.

### if / else if / else

```typescript
let aprobados: number = 121;
let reprobados: number = 21;
let nombre: string = "Rafa";

if (reprobados > aprobados) {
    console.log("La mayoría de alumnos reprobó")
} else if (aprobados > reprobados) {
    console.log("La mayoría de los alumnos aprobó")
} else {
    console.log(nombre)
}
```

> 💡 Diferencias con Python:
> - La condición va entre `()` — Python no los necesita
> - El bloque de código va entre `{}` — Python usa `:`
> - `elif` en Python es `else if` en TypeScript

### switch

Alternativa más limpia al `if/else if` cuando una variable puede tener muchos valores posibles.

```typescript
let clima: string = "nevando"

switch (clima) {
    case "soleado":
        console.log("¡Usa bloqueador solar!")
        break
    case "lluvioso":
        console.log("¡Lleva paraguas!")
        break
    case "nublado":
    case "nevando":
        console.log("¡Lleva una chamarra!")
        break
    default:
        console.log("Clima desconocido")
}
```

| Elemento | Función |
|---|---|
| `case` | Define un valor posible a comparar |
| `break` | Detiene la ejecución del switch al terminar un caso |
| `default` | Se ejecuta si ningún `case` coincide — equivalente al `else` |
| Fallthrough | Omitir `break` hace que dos `case` compartan el mismo código |

---

## 🔁 Bucles

Permiten repetir un bloque de código un número determinado de veces o mientras se cumpla una condición.

### for

```typescript
// Estructura:
// 1️⃣ inicio → 2️⃣ condición → 3️⃣ incremento
for (let i: number = 0; i < 10; i++) {
    console.log(i) // imprime del 0 al 9
}
```

| Parte | Descripción |
|---|---|
| `let i = 0` | Variable contadora — empieza en 0 |
| `i < 10` | Condición — el bucle corre mientras sea verdadera |
| `i++` | Incremento — suma 1 a `i` en cada vuelta |

### Recorrer un array con for

```typescript
const materias: string[] = ["Algebra lineal", "Base de datos", "Algoritmos"]

for (let i: number = 0; i < materias.length; i++) {
    console.log(materias[i])
}
```

> 💡 Usar `materias.length` en lugar de un número fijo hace el código flexible
> — si el array crece, el bucle sigue funcionando sin cambios.

### Acumular valores con for

```typescript
// Calcular el promedio de un array de calificaciones
function promediar(calificaciones: number[]): number {
    let suma: number = 0

    for (let i: number = 0; i < calificaciones.length; i++) {
        suma = suma + calificaciones[i]
    }

    return suma / calificaciones.length
}
```

### while — Bucle infinito

```typescript
// Se ejecuta mientras la condición sea verdadera
// ⚠️ Siempre debe haber una forma de detenerlo
while (true) {
    // código
}
```

---

## 🧠 Analogías útiles (Python → TypeScript)

| Condicional simple | `if/elif/else` | `if/else if/else` |
| Múltiples valores | no existe directo | `switch/case` |
| Bucle con índice | `for i in range(10)` | `for (let i = 0; i < 10; i++)` |
| Recorrer lista | `for i in lista` | `for (let i = 0; i < lista.length; i++)` |
| Bucle infinito | `while True` | `while (true)` |
|---|---|---|
| Lista | `["a", "b"]` | `string[] = ["a", "b"]` |
| Diccionario | `{"nombre": "Rafa"}` | `{ nombre: string } = { nombre: "Rafa" }` |
| Función | `def suma(a, b):` | `function suma(a: number, b: number)` |
| Tipo entero | `int` | `number` |
| Tipo texto | `str` | `string` |
| Tipo decimal | `float` | `number` |
| Tipo booleano | `bool` | `boolean` |

---

## 📈 Progreso

- [x] Contexto histórico — JavaScript, TypeScript y React
- [x] Variables — `const`, `let`, `var`
- [x] Tipos básicos — `string`, `number`, `boolean`
- [x] Arrays tipados
- [x] Objetos tipados
- [x] Funciones tradicionales
- [x] Arrow Functions
- [x] Condicionales — `if/else if/else` y `switch`
- [x] Bucles — `for` y `while`
- [ ] Componentes en React
- [ ] Props y Estado en React

---

*Actualizado durante el aprendizaje — cada concepto nuevo se agrega aquí.*