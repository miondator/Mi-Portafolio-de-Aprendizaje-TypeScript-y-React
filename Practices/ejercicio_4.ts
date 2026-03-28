// Práctica de métodos sobre arrays

const empleados: {
    nombre: string;
    departamento: string;
    salario: number;
    activo: boolean;
}[] = [
    { nombre: "Rafa",    departamento: "Desarrollo", salario: 25000, activo: true },
    { nombre: "Miguel",  departamento: "Diseño",     salario: 18000, activo: false },
    { nombre: "Valeria", departamento: "Desarrollo", salario: 22000, activo: true },
    { nombre: "Ariel",   departamento: "Marketing",  salario: 15000, activo: true },
    { nombre: "Tristan", departamento: "Diseño",     salario: 20000, activo: false }
]

// 1. Obtén solo los empleados que están activos
const activos = empleados.filter(user=>user.activo)

// 2. Crea un array con los nombres de todos los empleados
const nombres = empleados.map(user=>user.nombre)

// 3. Aplica un aumento del 10% al salario de todos los empleados
const conAumento = empleados.map(user=>user.salario = user.salario + (user.salario * .10))

// 4. Encuentra al empleado que se llama "Valeria"
const valeria = empleados.find(user=>user.nombre==="Valeria")

// 5. Obtén solo los empleados del departamento de "Desarrollo"
const desarrollo = empleados.filter(user=>user.departamento==="Desarrollo")

// Práctica usando template literals

// Original
// function presentarEstudiante(estudiante: {
//     nombre: string;
//     edad: number;
//     carrera: string;
//     becario: boolean;
// }): string {
//     return "Nombre del alumno: " + estudiante.nombre +
//            "\nEdad: " + estudiante.edad +
//            "\nCarrera: " + estudiante.carrera +
//            "\nBecario: " + estudiante.becario
// }

// Ejercio resuelto

function presentarEstudiante(estudiante: {
    nombre: string;
    edad: number;
    carrera: string;
    becario: boolean;
}): string {
    return `Nombre del alumno: ${estudiante.nombre}
            Edad: ${estudiante.edad}
            Carrera: ${estudiante.carrera}
            Becario: ${estudiante.becario}`
}