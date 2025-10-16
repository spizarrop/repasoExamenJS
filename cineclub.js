/**********************************************************************************************
*                              EXAMEN DE JAVASCRIPT – BIBLIOTECA Y CINECLUB                   *
*                             Duración sugerida: 60 minutos | Nivel: Intermedio               *
**********************************************************************************************/

/**********************************************************************************************
* PARTE 1 – BIBLIOTECA 📚
* Contexto: Un sistema que registra libros y sus préstamos.
**********************************************************************************************/

const libros = [
    {
        titulo: "El nombre del viento",
        autor: "Patrick Rothfuss",
        anio: 2007,
        prestamos: [
            { socio: "Ana", diasPrestado: 10, devuelto: true },
            { socio: "Carlos", diasPrestado: 5, devuelto: true }
        ]
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        anio: 1949,
        prestamos: [
            { socio: "Laura", diasPrestado: 12, devuelto: false },
            { socio: "Miguel", diasPrestado: 7, devuelto: true }
        ]
    }
];

/**
 * EJERCICIO 1 (2 puntos)
 * Crea una función promedioDiasPrestamo(libros) que devuelva un array con:
 * - El título del libro.
 * - El promedio de días que estuvo prestado (usa map() y reduce()).
 */

function promedioDiasPrestamo() {
    let prestamos = [];

    prestamos = libros.map(libro => {
        const diasPrestado = libro.prestamos.reduce((acc, prestamo) => acc + prestamo.diasPrestado ,0);
        const promedio = diasPrestado / libro.prestamos.length;
        return {titulo: libro.titulo, promedioDias: promedio};
    });

    return prestamos;

}

/**
 * EJERCICIO 2 (2 puntos)
 * Crea una función librosNoDevueltos(libros) que devuelva los títulos
 * de los libros que tienen al menos un préstamo sin devolver.
 */

function librosNoDevueltos() {
    let titulosLibros = [];
    titulosLibros = libros.filter(libro => libro.prestamos.some(prestamo => !prestamo.devuelto)).map(libro => libro.titulo);;
    return titulosLibros;
}

/**
 * EJERCICIO 3 (2 puntos)
 * Crea una función sociosQueMasPrestan(libros) que calcule cuántos
 * préstamos ha hecho cada socio y devuelva el socio con más préstamos.
 */

function sociosQueMasPrestan() {
    let cantidad = [];
    libros.forEach(libro => {
        let count = libro.prestamos.lenght;
        cantidad.push(count);
    });
    return Math.max(...cantidad);
}



/**********************************************************************************************
* PARTE 2 – CINECLUB 🎬
* Contexto: El mismo sistema gestiona proyecciones de películas y reservas.
**********************************************************************************************/

const peliculas = new Map();
const socios = new Map();
const reservas = new Map();

/**
 * EJERCICIO 4 (2 puntos)
 * registrarSocio(id, nombre, email)
 * - Agrega un socio si su id y email no existen.
 * - Muestra un mensaje si se intenta duplicar.
 */

function registrarSocio(id, nombre, email) {

    const listaSocios = Array.from(socios);
    if (!socios.has(id)) {
        if (listaSocios.some(socio => socio == email)) {
            console.log('Ese email ya existe');
        } else {
            socios.set(id, { nombre: nombre, email: email });
        }
    }else{
        console.log('Ese id ya existe.');
    }

}



/**
 * EJERCICIO 5 (2 puntos)
 * registrarPelicula(id, titulo, director, cupos)
 * - Registra nuevas películas sin repetir id ni título.
 */

function registrarPelicula(id, titulo, director, cupos) {

    const listaPeliculas = Array.from(peliculas);
    if (!peliculas.has(id)) {
        if (listaPeliculas.some(pelicula => pelicula.titulo == titulo)) {
            console.log('Ese titulo ya existe');
        } else {
            peliculas.set(id, { titulo: titulo, director: director, cupos: cupos});
        }
    }else{
        console.log('Ese id ya existe.');
    }
}



/**
 * EJERCICIO 6 (3 puntos)
 * reservarEntrada(idSocio, idPelicula)
 * - Permite reservar si hay cupo disponible.
 * - Evita reservas duplicadas.
 * - Resta un cupo a la película al reservar.
 */

function reservarEntrada(idSocio, idPelicula) {
    
}



/**
 * EJERCICIO 7 (3 puntos)
 * registrarAsistencia(idPelicula, idSocio, presente)
 * - Verifica que el socio tenga reserva.
 * - Registra asistencia con fecha actual y si asistió o no.
 */

function registrarAsistencia(idPelicula, idSocio, presente) {
    // Tu código aquí 👇
}



/**********************************************************************************************
* EJEMPLOS DE USO (para probar tus funciones)
**********************************************************************************************/

// 👉 PARTE 1 – BIBLIOTECA
console.log("Promedio de días prestados:", promedioDiasPrestamo(libros));
console.log("Libros con préstamos pendientes:", librosNoDevueltos(libros));
console.log("Socio con más préstamos:", sociosQueMasPrestan(libros));

// 👉 PARTE 2 – CINECLUB
registrarSocio(1, "Ana Pérez", "ana@gmail.com");
registrarSocio(2, "Carlos Ruiz", "carlos@gmail.com");
registrarSocio(3, "Carlos Ruiz", "carlos@gmail.com");

registrarPelicula(1, "Inception", "Christopher Nolan", 2);
registrarPelicula(2, "Matrix", "Wachowski", 1);

reservarEntrada(1, 1);
reservarEntrada(2, 1);

registrarAsistencia(1, 1, true);
registrarAsistencia(1, 2, false);

console.log("Socios registrados:", socios);
console.log("Películas registradas:", peliculas);
console.log("Reservas:", reservas);
