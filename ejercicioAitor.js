const alumnos = [
    {
        nombre: "Jorge",
        notas: [
            { asignatura: "Mates", nota: 8 },
            { asignatura: "Historia", nota: 6 },
            { asignatura: "Lengua", nota: 7 }
        ]
    },
    {
        nombre: "Carmen",
        notas: [
            { asignatura: "Mates", nota: 9 },
            { asignatura: "Historia", nota: 9 },
            { asignatura: "Lengua", nota: 10 }
        ]
    },
    {
        nombre: "Aitor",
        notas: [
            { asignatura: "Mates", nota: 9 },
            { asignatura: "Historia", nota: 8 },
            { asignatura: "Lengua", nota: 5 }
        ]
    },
    {
        nombre: "Diego",
        notas: [
            { asignatura: "Mates", nota: 3 },
            { asignatura: "Historia", nota: 4 },
            { asignatura: "Lengua", nota: 5 }
        ]
    }
];


/**
 *  Devolver un listado de asignaturas y sus medias: 
 */

function asigYMedias() {
    let mediasAsignaturas = [];
    let notasMates = [];
    let notasHistoria = [];
    let notasLengua = [];

    mediasAsignaturas = alumnos.map(alumno => {
        let mates = alumno.notas.filter(nota => nota.asignatura == "Mates").reduce((acc, total) => acc + total.nota, 0);
        notasMates.push(mates);
        let historia = alumno.notas.filter(nota => nota.asignatura == "Historia").reduce((acc, total) => acc + total.nota, 0);
        notasHistoria.push(historia);
        let lengua = alumno.notas.filter(nota => nota.asignatura == "Lengua").reduce((acc, total) => acc + total.nota, 0);
        notasLengua.push(lengua);
    });

    mediasAsignaturas.push({ asignatura: "Mates", promedio: notasMates.reduce((acc, nota) => acc + nota, 0) / alumnos.length });
    mediasAsignaturas.push({ asignatura: "Historia", promedio: notasHistoria.reduce((acc, nota) => acc + nota, 0) / alumnos.length });
    mediasAsignaturas.push({ asignatura: "Lengua", promedio: notasLengua.reduce((acc, nota) => acc + nota, 0) / alumnos.length });
    
    console.log(mediasAsignaturas);
}

asigYMedias();


/**
 *  Calcula la nota más alta obtenida en cada asignatura 
 */
function notaMasAlta() {

}
notaMasAlta();