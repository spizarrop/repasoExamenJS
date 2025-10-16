/**********************************************************************************************
*            EJERCICIOS EXTRAS PARA PRACTICAR BOOLEANOS Y ACCESO A OBJETOS EN ARRAYS         *
**********************************************************************************************/

const estudiantes = [
    {
        nombre: "Laura Martínez",
        grupo: "A",
        examenes: [
            { materia: "Matemáticas", nota: 8.5, aprobado: true, recuperacion: false },
            { materia: "Historia", nota: 6.0, aprobado: true, recuperacion: false },
            { materia: "Inglés", nota: 4.5, aprobado: false, recuperacion: true }
        ]
    },
    {
        nombre: "Carlos López",
        grupo: "A",
        examenes: [
            { materia: "Matemáticas", nota: 9.2, aprobado: true, recuperacion: false },
            { materia: "Historia", nota: 8.7, aprobado: true, recuperacion: false },
            { materia: "Inglés", nota: 7.5, aprobado: true, recuperacion: false }
        ]
    },
    {
        nombre: "Sofía Hernández",
        grupo: "B",
        examenes: [
            { materia: "Matemáticas", nota: 5.2, aprobado: true, recuperacion: true },
            { materia: "Historia", nota: 4.8, aprobado: false, recuperacion: true },
            { materia: "Inglés", nota: 6.5, aprobado: true, recuperacion: false }
        ]
    },
    {
        nombre: "Diego Torres",
        grupo: "B",
        examenes: [
            { materia: "Matemáticas", nota: 3.5, aprobado: false, recuperacion: true },
            { materia: "Historia", nota: 4.0, aprobado: false, recuperacion: true },
            { materia: "Inglés", nota: 5.0, aprobado: true, recuperacion: false }
        ]
    }
];

/**
 * ACT 1 - EXTRA: Calcular el promedio de notas de cada estudiante.
 */
function promedioNotas() {
    let notas = [];
    notas = estudiantes.map(alumno => {
        let promedio = alumno.examenes.reduce((acc, examen) => acc + examen.nota, 0) / alumno.examenes.length;
        return { nombre: alumno.nombre, promedio: promedio.toFixed(2) };
    });
    console.log(notas);
}
promedioNotas();
/**
 * ACT 2 - EXTRA: Filtrar los estudiantes que tienen al menos un examen reprobado.
 */
function estudiantesReprobados() {
    let reprobados = estudiantes.filter(alumno => {
        if (alumno.examenes.some(examen => !examen.aprobado)) {
            return alumno;
        }
    });
    console.log(reprobados);
}
estudiantesReprobados();
/**
 * ACT 3 - EXTRA: Listar las materias que cada estudiante tuvo que recuperar.
 * Devuelve un array con { nombre, materiasRecuperadas: [] }.
 */
function listarMateriasRecuperadas() {
    let materias = [];
    estudiantes.map(alumno => {
        let recuperadas = alumno.examenes.filter(examen => examen.recuperacion).map(examen => examen.materia);
        materias.push({ nombre: alumno.nombre, materiasRecuperadas: recuperadas });
    });

    console.log(materias);
}
listarMateriasRecuperadas();
/**
 * ACT 4 - EXTRA: Contar cuántos estudiantes aprobaron **todos** los examenes sin recuperaciones.
 */
function aprobaronTodo() {
    let contador = 0;
    estudiantes.map(alumno => {
        if (alumno.examenes.every(examen => examen.aprobado && !examen.recuperacion)) {
            contador++;
        }
    });

    console.log('El numero de aprobados sin recuperaciones es: ' + contador);
}
aprobaronTodo();
/**
 * ACT 5 - EXTRA: Verificar si todos los estudiantes del grupo "A" aprobaron todas sus materias.
 */
function aprobadosA() {
    let grupoA = estudiantes.filter(alumno => alumno.grupo === 'A');
    let todosAprobados = grupoA.every(alumno =>
        alumno.examenes.every(examen => examen.aprobado)
    );

    if (todosAprobados) {
        console.log('Todos los estudiantes del grupo A aprobaron todas sus materias.');
    } else {
        console.log('No todos los estudiantes del grupo A aprobaron todo.');
    }
}
aprobadosA();