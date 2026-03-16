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
- Se **compila** a JavaScript antes de llegar al navegador — los tipos desaparecen en producción

```
Tu código .ts → [compilador tsc] → archivo .js → Navegador
```

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

## 📐 Guía de Sintaxis — Estructura de cada construcción

> Esta sección es una referencia rápida. Cada bloque muestra la estructura completa con pseudocódigo, Python y TypeScript.

---

### 📦 Variables

**Pseudocódigo:**
```
DECLARAR tipo nombre = valor
```

**Python:**
```python
nombre = "Rafa"       # sin tipo explícito
edad = 22
activo = True
```

**TypeScript:**
```typescript
// Sintaxis: palabra_clave nombre: tipo = valor
const nombre: string = "Rafa"    // no cambia nunca
let edad: number = 22             // puede cambiar
let activo: boolean = true        // puede cambiar
```

| Palabra clave | ¿Redeclarar? | ¿Reasignar? | Uso recomendado |
|---|---|---|---|
| `var` | ✅ Sí | ✅ Sí | ⚠️ Evitar en código moderno |
| `let` | ❌ No | ✅ Sí | Valores que cambian |
| `const` | ❌ No | ❌ No | Valores fijos |

> 💡 **Regla:** Siempre usa `const` por defecto. Solo cambia a `let` si sabes que el valor va a cambiar.

---

### 📋 Arrays

**Pseudocódigo:**
```
DECLARAR lista nombre = [valor1, valor2, valor3]
```

**Python:**
```python
materias = ["Matemáticas", "Historia", "Programación"]
calificaciones = [9, 8, 10]
```

**TypeScript:**
```typescript
// Sintaxis: const nombre: tipo[] = [valores]
const materias: string[] = ["Matemáticas", "Historia", "Programación"]
const calificaciones: number[] = [9, 8, 10]
const activos: boolean[] = [true, false, true]
```

> 💡 **Sobre `const` y arrays:** `const` impide reemplazar el array completo,
> pero sí puedes modificar su contenido (agregar, cambiar elementos).
> Piénsalo como la dirección de una casa — la dirección no cambia, pero los muebles sí.

```typescript
const numeros = [1, 2, 3]
numeros = [4, 5, 6]    // ❌ reemplazar el array — bloqueado
numeros[0] = 99        // ✅ modificar un elemento — permitido
numeros.push(4)        // ✅ agregar un elemento — permitido
```

---

### 🗂️ Objetos

**Pseudocódigo:**
```
DECLARAR objeto nombre = {
    clave1: valor1,
    clave2: valor2
}
```

**Python:**
```python
estudiante = {
    "nombre": "Rafa",
    "edad": 22,
    "activo": True
}
```

**TypeScript:**
```typescript
// Sintaxis:
// - Sección de TIPOS → separa con punto y coma (;)
// - Sección de VALORES → separa con coma (,)

const estudiante: {
    nombre: string;    // tipos: punto y coma
    edad: number;
    activo: boolean;
} = {
    nombre: "Rafa",    // valores: coma
    edad: 22,
    activo: true
}

// Acceder a propiedades:
estudiante.nombre  // → "Rafa"
estudiante.edad    // → 22
```

---

### 📦 Arrays de Objetos

Cuando necesitas una colección de elementos que tienen múltiples propiedades.

**Python:**
```python
alumnos = [
    {"nombre": "Rafa", "edad": 22},
    {"nombre": "Miguel", "edad": 25}
]
```

**TypeScript:**
```typescript
// Sintaxis: { propiedades }[]
// El [] va DESPUÉS de cerrar el objeto de tipos

const alumnos: {
    nombre: string;
    edad: number;
}[] = [
    { nombre: "Rafa", edad: 22 },
    { nombre: "Miguel", edad: 25 }
]

// Acceder a elementos:
alumnos[0].nombre  // → "Rafa"
alumnos[1].edad    // → 25
```

> 💡 **Regla clave:** `{ }[]` significa "array de objetos con esta forma".
> El `[]` siempre va al final, después de definir las propiedades del objeto.

---

### ⚙️ Funciones

**Pseudocódigo:**
```
FUNCIÓN nombre(parámetro1, parámetro2) → tipoRetorno
    RETORNAR resultado
FIN FUNCIÓN
```

**Python:**
```python
def suma(a, b):
    return a + b

def saludar(nombre):
    return "Hola, " + nombre
```

**TypeScript — Función tradicional:**
```typescript
// Sintaxis: function nombre(param: tipo): tipoRetorno { }
function suma(a: number, b: number): number {
    return a + b
}

function saludar(nombre: string): string {
    return "Hola, " + nombre
}
```

**TypeScript — Arrow Function:**
```typescript
// Sintaxis: const nombre = (param: tipo): tipoRetorno => { }
const saludar = (nombre: string): string => {
    return "Hola, " + nombre
}

// Versión corta (una sola línea — sin {} ni return):
const saludar = (nombre: string): string => "Hola, " + nombre
```

**Función con objeto como parámetro:**
```typescript
// Cuando el parámetro es un objeto, defines su forma dentro del paréntesis
function presentar(persona: {
    nombre: string;
    edad: number;
}): string {
    return "Soy " + persona.nombre + " y tengo " + persona.edad + " años"
}
```

---

### 🔀 Condicionales

**Pseudocódigo:**
```
SI condición ENTONCES
    acción
SINO SI otra condición ENTONCES
    otra acción
SINO
    acción por defecto
FIN SI
```

**Python:**
```python
if calificacion >= 90:
    print("Excelente")
elif calificacion >= 70:
    print("Aprobado")
else:
    print("Reprobado")
```

**TypeScript — if / else if / else:**
```typescript
// Diferencias con Python:
// - Condición entre () obligatorio
// - Bloque entre {} en lugar de :
// - elif → else if

if (calificacion >= 90) {
    console.log("Excelente")
} else if (calificacion >= 70) {
    console.log("Aprobado")
} else {
    console.log("Reprobado")
}
```

**TypeScript — switch:**
```typescript
// Usar cuando una variable puede tener muchos valores posibles
// Más limpio que encadenar muchos else if

switch (transporte) {
    case "coche":
        console.log("20 minutos")
        break                    // ← detiene la ejecución
    case "nublado":
    case "nevando":              // ← dos casos, mismo resultado (fallthrough)
        console.log("Lleva chamarra")
        break
    default:                     // ← equivalente al else
        console.log("Transporte desconocido")
}
```

---

### 🔁 Bucles

**Pseudocódigo:**
```
PARA i DESDE 0 HASTA n-1 HACER
    acción
FIN PARA
```

**Python:**
```python
for i in range(10):
    print(i)

for elemento in lista:
    print(elemento)
```

**TypeScript — for:**
```typescript
// Sintaxis: for (inicio; condición; incremento) { }
//            1️⃣          2️⃣         3️⃣

for (let i: number = 0; i < 10; i++) {
    console.log(i)
}

// Recorrer un array:
for (let i: number = 0; i < array.length; i++) {
    console.log(array[i])   // ← array[i] accede al valor, no al índice
}
```

---

## ➕ Operadores

### Operadores de comparación
Siempre retornan `true` o `false` (boolean) por sí solos.

| Operador | Significado | Ejemplo | Resultado |
|---|---|---|---|
| `===` | Igual (valor y tipo) | `5 === 5` | `true` |
| `!==` | Distinto | `5 !== 3` | `true` |
| `>` | Mayor que | `10 > 5` | `true` |
| `<` | Menor que | `3 < 8` | `true` |
| `>=` | Mayor o igual | `5 >= 5` | `true` |
| `<=` | Menor o igual | `4 <= 3` | `false` |

> 💡 **Regla:** Toda comparación YA es un boolean. No necesitas escribir
> `if (resultado === true)` — basta con `if (resultado)`.
>
> ```typescript
> // Redundante ❌
> const esPar = (n: number): boolean => {
>     if (n % 2 === 0) { return true } else { return false }
> }
>
> // Correcto ✅ — la comparación ya ES el boolean
> const esPar = (n: number): boolean => n % 2 === 0
> ```

### Operadores lógicos

| Operador | Significado | Ejemplo | Resultado |
|---|---|---|---|
| `&&` | Y (ambos deben ser true) | `edad > 18 && activo` | `true` solo si los dos se cumplen |
| `\|\|` | O (al menos uno true) | `esDia \|\| esNoche` | `true` si cualquiera se cumple |
| `!` | NO (invierte el boolean) | `!activo` | `true` si activo era `false` |

**Python → TypeScript:**
```python
# Python
if edad >= 18 and activo:
if edad < 18 or sinPermiso:
if not activo:
```
```typescript
// TypeScript
if (edad >= 18 && activo)
if (edad < 18 || sinPermiso)
if (!activo)
```

### Operador de residuo `%`
Devuelve el sobrante de una división — muy útil para saber si un número es par o impar.

```typescript
10 % 2 === 0  // → true  (par)
7  % 2 === 0  // → false (impar)
```

---

## ⚠️ Reglas aprendidas por experiencia

Estos son errores comunes que conviene recordar:

### 1. `return` fuera del `for` para buscar en arrays
```typescript
// ❌ MAL — retorna en la primera vuelta, nunca termina de buscar
for (let i = 0; i < array.length; i++) {
    if (condicion) { return "encontrado" }
    else { return "no existe" }  // ← sale en i=0 siempre
}

// ✅ BIEN — recorre todo y solo retorna "no existe" al final
for (let i = 0; i < array.length; i++) {
    if (condicion) { return "encontrado" }
}
return "no existe"  // ← solo llega aquí si no encontró nada
```

### 2. `break` en switch para no ejecutar casos de más
```typescript
// Sin break, la ejecución "cae" al siguiente case (fallthrough)
switch (valor) {
    case "a":
        console.log("Es a")
        // ← sin break, también ejecuta el case "b"
    case "b":
        console.log("Es b")
        break
}
// Si valor = "a" imprime: "Es a" y "Es b"
```

### 3. Acumular vs reemplazar en un for
```typescript
let suma = 0
for (let i = 0; i < array.length; i++) {
    suma = array[i]           // ❌ reemplaza — al final solo tiene el último valor
    suma = suma + array[i]    // ✅ acumula — va sumando todos los valores
}
```

### 4. `i` es el índice, no el valor
```typescript
const precios = [120, 45, 300]
for (let i = 0; i < precios.length; i++) {
    console.log(i)          // ❌ imprime: 0, 1, 2 (los índices)
    console.log(precios[i]) // ✅ imprime: 120, 45, 300 (los valores)
}
```

### 5. Usar el parámetro, no una variable externa
```typescript
// ❌ MAL — la función siempre usa estudianteDos sin importar qué le pases
function promediar(calificaciones: number[]): number {
    for (let i = 0; i < calificaciones.length; i++) {
        suma = suma + estudianteDos.calificaciones[i]  // hardcodeado
    }
}

// ✅ BIEN — usa el parámetro recibido, funciona con cualquier alumno
function promediar(calificaciones: number[]): number {
    for (let i = 0; i < calificaciones.length; i++) {
        suma = suma + calificaciones[i]
    }
}
```

### 6. `const` en objetos y arrays — la dirección no cambia, el contenido sí
```typescript
const estudiante = { nombre: "Rafa", edad: 22 }
estudiante = { nombre: "Luis" }   // ❌ reemplaza el objeto — bloqueado
estudiante.edad = 23              // ✅ modifica una propiedad — permitido
```

---

## 🧠 Analogías útiles (Python → TypeScript)

| Analogía | Sintaxis Python | Sintaxis TypeScript |
|---|---|---|
| Condicional simple | `if/elif/else` | `if/else if/else` |
| Múltiples valores | no existe directo | `switch/case` |
| Bucle con índice | `for i in range(10)` | `for (let i = 0; i < 10; i++)` |
| Recorrer lista | `for i in lista` | `for (let i = 0; i < lista.length; i++)` |
| Bucle infinito | `while True` | `while (true)` |
| Lista | `["a", "b"]` | `string[] = ["a", "b"]` |
| Lista de diccionarios | `[{"k": "v"}]` | `{ k: string }[] = [{ k: "v" }]` |
| Diccionario | `{"nombre": "Rafa"}` | `{ nombre: string } = { nombre: "Rafa" }` |
| Función | `def suma(a, b):` | `function suma(a: number, b: number)` |
| Y lógico | `and` | `&&` |
| O lógico | `or` | `\|\|` |
| NO lógico | `not` | `!` |
| Tipo entero | `int` | `number` |
| Tipo texto | `str` | `string` |
| Tipo decimal | `float` | `number` |
| Tipo booleano | `bool` | `boolean` |
| Imprimir | `print()` | `console.log()` |

---

## 📈 Progreso

- [x] Contexto histórico — JavaScript, TypeScript y React
- [x] Variables — `const`, `let`, `var`
- [x] Tipos básicos — `string`, `number`, `boolean`
- [x] Arrays tipados
- [x] Objetos tipados
- [x] Arrays de objetos
- [x] Funciones tradicionales
- [x] Arrow Functions
- [x] Condicionales — `if/else if/else` y `switch`
- [x] Bucles — `for` y `while`
- [x] Operadores de comparación y lógicos
- [ ] `type` e `interface` — definir tipos reutilizables
- [ ] Componentes en React
- [ ] Props y Estado en React

---

*Actualizado durante el aprendizaje — cada concepto nuevo se agrega aquí.*