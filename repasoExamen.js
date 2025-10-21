"use strict";

const peliculas = [
    {
        titulo: "Inception",
        anio: 2010,
        genero: "Ciencia Ficción",
        recaudacion: 480,
        director: {
            nombre: "Christopher Nolan",
            pais: "Reino Unido",
        },
        actores: [
            { nombre: "Leonardo DiCaprio", nacionalidad: "EE.UU.", edad: 48 },
            { nombre: "Joseph Gordon-Levitt", nacionalidad: "EE.UU.", edad: 42 },
            { nombre: "Elliot Page", nacionalidad: "Canadá", edad: 38 },
        ],
    },
    {
        titulo: "Interstellar",
        anio: 2014,
        genero: "Ciencia Ficción",
        recaudacion: 497,
        director: {
            nombre: "Christopher Nolan",
            pais: "Reino Unido",
        },
        actores: [
            { nombre: "Matthew McConaughey", nacionalidad: "EE.UU.", edad: 55 },
            { nombre: "Anne Hathaway", nacionalidad: "EE.UU.", edad: 42 },
            { nombre: "Jessica Chastain", nacionalidad: "EE.UU.", edad: 48 },
        ],
    },
    {
        titulo: "Parasite",
        anio: 2019,
        genero: "Drama",
        recaudacion: 258,
        director: {
            nombre: "Bong Joon-ho",
            pais: "Corea del Sur",
        },
        actores: [
            { nombre: "Song Kang-ho", nacionalidad: "Corea del Sur", edad: 57 },
            { nombre: "Cho Yeo-jeong", nacionalidad: "Corea del Sur", edad: 44 },
            { nombre: "Choi Woo-shik", nacionalidad: "Corea del Sur", edad: 35 },
        ],
    },
    {
        titulo: "Pulp Fiction",
        anio: 1994,
        genero: "Crimen",
        recaudacion: 214,
        director: {
            nombre: "Quentin Tarantino",
            pais: "EE.UU.",
        },
        actores: [
            { nombre: "John Travolta", nacionalidad: "EE.UU.", edad: 70 },
            { nombre: "Uma Thurman", nacionalidad: "EE.UU.", edad: 55 },
            { nombre: "Samuel L. Jackson", nacionalidad: "EE.UU.", edad: 76 },
        ],
    },
    {
        titulo: "Amélie",
        anio: 2001,
        genero: "Comedia",
        recaudacion: 174,
        director: {
            nombre: "Jean-Pierre Jeunet",
            pais: "Francia",
        },
        actores: [
            { nombre: "Audrey Tautou", nacionalidad: "Francia", edad: 48 },
            { nombre: "Mathieu Kassovitz", nacionalidad: "Francia", edad: 57 },
        ],
    },
];


/* Ejercicio 1.
 Muestra las películas estrenadas después del año 2000 pero antes o iguales al 2015, agrupadas por género.
 📍 (1 punto) */

function estrenoPeliculas() {
    let pelisFiltro = [];

    peliculas.forEach(pelicula => {
        if (pelicula.anio > 2000 && pelicula.anio <= 2015) {
            if (!pelisFiltro[pelicula.genero]) {
                pelisFiltro[pelicula.genero] = [];
            }

            pelisFiltro[pelicula.genero].push(pelicula);
        }
    });

    console.log(pelisFiltro);

}
estrenoPeliculas();

/* Ejercicio 2.
 Agrupa los directores por país en una nueva estructura de datos.
 📍 (1 punto) */

function paisesYDirectores() {
    let paises = [];

    peliculas.forEach(pelicula => {
        if (!paises[pelicula.director.pais]) {
            paises[pelicula.director.pais] = [];
        }

        paises[pelicula.director.pais].push(pelicula.director.nombre);
    });

    console.log(paises);
}
paisesYDirectores();

/* Ejercicio 3.
 Crea una nueva estructura de datos con todos los actores sin repetir, incluyendo su nombre, nacionalidad y edad, y ordénalos por edad descendente.
 📍 (2 puntos) */

function datosActores() {
    let actores = [];
    let actoresNoRepetidos = [];

    peliculas.forEach(pelicula => {
        pelicula.actores.forEach(actor => {
            actores.push(actor);
        });
    });

    actores.forEach(actor => {
        if(!actoresNoRepetidos.includes(actor.nombre)){
            actoresNoRepetidos.push(actor);
        }
    });

    console.log(actores.sort((a, b) => b.edad - a.edad));
}
datosActores();

/* Ejercicio 4.
 Crea una función que devuelva un objeto con los géneros como claves y la cantidad de películas distintas por género como valor.
 📍 (1 punto) */

function obtenerGeneros() {
    let cantidad = 1;
    let generoPelicula = "";
    let pelis = {};

    peliculas.forEach(pelicula => {
        if(!Object.hasOwnProperty(pelicula.genero)){
            pelis.genero = pelicula.genero;
            pelis.cantidad = cantidad;
        }else{
            pelis.cantidad = cantidad++;
        }
    });

    console.log(pelis);
}
obtenerGeneros();

/* Ejercicio 5.
 Crea una función que indique qué película tiene la mayor recaudación sin superar los 500 millones de dólares, y que se aproxime más a ese límite sin pasarlo.
 📍 (2 puntos)
 */