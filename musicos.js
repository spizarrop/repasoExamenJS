/**********************************************************************************************
*            EJERCICIOS EXTRAS PARA PRACTICAR EL ACCESO A OBJETOS DENTRO DE UN ARRAY        *
**********************************************************************************************/

const musicos = [
    {
        nombre: "Taylor Swift",
        genero: "Pop",
        instrumentos: ["voz", "guitarra"],
        conciertos: [
            { ciudad: "New York", asistentes: 50000, duracionHoras: 2, cancelado: false },
            { ciudad: "Los Angeles", asistentes: 60000, duracionHoras: 2.5, cancelado: false },
            { ciudad: "Chicago", asistentes: 45000, duracionHoras: 2, cancelado: true }
        ]
    },
    {
        nombre: "Ed Sheeran",
        genero: "Pop/Rock",
        instrumentos: ["voz", "guitarra", "piano"],
        conciertos: [
            { ciudad: "London", asistentes: 55000, duracionHoras: 2, cancelado: false },
            { ciudad: "Paris", asistentes: 50000, duracionHoras: 1.5, cancelado: false },
            { ciudad: "Berlin", asistentes: 40000, duracionHoras: 2, cancelado: false }
        ]
    },
    {
        nombre: "Adele",
        genero: "Soul",
        instrumentos: ["voz", "piano"],
        conciertos: [
            { ciudad: "Los Angeles", asistentes: 65000, duracionHoras: 2.5, cancelado: false },
            { ciudad: "New York", asistentes: 60000, duracionHoras: 2, cancelado: false },
            { ciudad: "Toronto", asistentes: 50000, duracionHoras: 2, cancelado: true }
        ]
    }
];

/**
 * ACT 1 - EXTRA: Calcular el total de asistentes por músico: 
 * Usa map() y reduce() para sumar todos los asistentes de cada músico en sus conciertos.
 */
function totalAsistentes() {
    let asistentes = [];
    asistentes = musicos.map(musico => {
        let totalAsistentes = musico.conciertos.reduce((acc, concierto) => acc + concierto.asistentes, 0);
        return { nombre: musico.nombre, totalAsistentes: totalAsistentes };
    });
    console.log(asistentes);
}
/* totalAsistentes(); */

/**
 * ACT 2 - EXTRA: Filtrar músicos que hayan cancelado algún concierto: 
 * Encuentra a los músicos que hayan tenido al menos un concierto cancelado.
 */
function conciertoCancelado() {
    let cancelados = [];
    musicos.map(musico => {
        if (musico.conciertos.some(concierto => concierto.cancelado)) {
            cancelados.push(musico);
        };
    });
    console.log(cancelados);
}
/* conciertoCancelado(); */

/**
 * ACT 3 - EXTRA: Listar las ciudades donde un músico específico dio conciertos: 
 * Pide el nombre de un músico y devuelve una lista de las ciudades donde dio conciertos que no fueron cancelados.
 */
function filtroConciertos(nombreMusico) {
    let listaCiudades = [];
    listaCiudades = musicos.filter(musico => musico.nombre == nombreMusico)
        .map(musico => {
            let conciertos = musico.conciertos.filter(concierto => !concierto.cancelado).map(concierto => concierto.ciudad);
            return { nombre: musico.nombre, ciudades: conciertos };
        });
    console.log(listaCiudades);
}
/* filtroConciertos("Adele"); */

/**
 * ACT 4 - EXTRA: Calcular la duración promedio de los conciertos por músico: 
 * Calcula la duración promedio (en horas) de los conciertos de cada músico.
 */
function duracionPromedio() {
    let promedioConciertos = [];
    promedioConciertos = musicos.map(musico => {
        let duracionTotal = musico.conciertos.reduce((acc, concierto) => acc + concierto.duracionHoras, 0);
        let promedio = duracionTotal / musico.conciertos.length;
        return {nombre: musico.nombre, promedio: promedio.toFixed(2)};
    });
    console.log(promedioConciertos);
}
/* duracionPromedio(); */

/**
 * ACT 5 - EXTRA: Contar los músicos que dieron conciertos de más de 2 horas en todas sus presentaciones: 
 * Filtra los músicos que hayan tenido todos sus conciertos con duración superior a 2 horas.
 */
function conciertosLargos() {
    let conciertoLargo = musicos.filter(musico => 
        musico.conciertos.every(concierto => concierto.duracionHoras >= 2)
    );
    console.log(conciertoLargo);
}
conciertosLargos();