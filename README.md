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

## 🧠 Analogías útiles (Python → TypeScript)

| Concepto | Python | TypeScript |
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
- [ ] Condicionales
- [ ] Bucles
- [ ] Componentes en React
- [ ] Props y Estado en React

---

*Actualizado durante el aprendizaje — cada concepto nuevo se agrega aquí.*
