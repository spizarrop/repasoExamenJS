
/**********************************************************************************************
 *          Tenemos un arrayMisiones, en el cual guardamos los siguientes datos:
 * 
 * 
 *  - nombre         --> hace referencia al nombre de la misión
 *  - nave           --> hace referencia a la nave utilizada en  la misión
 *  - astronautas    --> hace referencia a todos los astronautas que han participado en la misión
 *  - planetaDestino --> hace refencia al planeta destino de la misión
 * 
 **********************************************************************************************/

const arrayMisiones = [
    {
        nombre: "Misión 1",
        nave: {
            nombre: "Nave 1",
            modelo: "Modelo A",
            combustible: 100
        },
        astronautas: [
            { nombre: "Astro 1", edad: 43, pais: "España" },
            { nombre: "Astro 2", edad: 33, pais: "España" },
            { nombre: "Astro 3", edad: 53, pais: "Portugal" }
        ],
        planetaDestino: "Marte"
    },
    {
        nombre: "Misión 2",
        nave: {
            nombre: "Nave 2",
            modelo: "Modelo B",
            combustible: 80
        },
        astronautas: [
            { nombre: "Astro 4", edad: 39, pais: "México" },
            { nombre: "Astro 2", edad: 33, pais: "España" },
            { nombre: "Astro 5", edad: 45, pais: "Argentina" }
        ],
        planetaDestino: "Júpiter"
    },
    {
        nombre: "Misión 3",
        nave: {
            nombre: "Nave 3",
            modelo: "Modelo A",
            combustible: 120
        },
        astronautas: [
            { nombre: "Astro 1", edad: 43, pais: "España" },
            { nombre: "Astro 6", edad: 50, pais: "Chile" }
        ],
        planetaDestino: "Saturno"
    },
    {
        nombre: "Misión 4",
        nave: {
            nombre: "Nave 4",
            modelo: "Modelo C",
            combustible: 60
        },
        astronautas: [
            { nombre: "Astro 7", edad: 29, pais: "Colombia" },
            { nombre: "Astro 5", edad: 45, pais: "Argentina" }
        ],
        planetaDestino: "Marte"
    },
    {
        nombre: "Misión 5",
        nave: {
            nombre: "Nave 5",
            modelo: "Modelo B",
            combustible: 90
        },
        astronautas: [
            { nombre: "Astro 8", edad: 38, pais: "Perú" },
            { nombre: "Astro 3", edad: 53, pais: "Portugal" }
        ],
        planetaDestino: "Venus"
    }
];

// Ejercicio 1
function ejercicio1() {
    arrayMisiones.forEach(mision => {
        mision.astronautas.forEach(astro => {
            if (astro.edad > 40 && astro.edad <= 50) {
                console.log("Mision: " + mision.nombre + " Astronauta: " + astro.nombre);
            }
        });
    });

}
ejercicio1();


// Ejercicio 2
function ejercicio2() {
    const agrupados = arrayMisiones.reduce((acc, mision) => {
        let clave = mision.planetaDestino;

        if (!acc[clave]) {
            acc[clave] = [];
        }
        acc[clave].push(mision.nombre);

        return acc;
    });
    console.log(agrupados);
}
ejercicio2();

// Ejercicio 3
function ejercicio3() {
    let astronautasMap = new Map();

    arrayMisiones.forEach(mision => {
        mision.astronautas.forEach(astro => {
            astronautasMap.set(astro.nombre, [astro.edad, astro.pais]);
        });
    });

    console.log(astronautasMap);
}
ejercicio3();

// Ejercicio 4
function ejercicio4() {
    let obj = {};

    arrayMisiones.forEach(mision => {
        if (!obj[mision.nave.modelo]) {
            obj[mision.nave.modelo] = 1;
        }

        obj[mision.nave.modelo]++;
    });

    console.log(obj);
}
ejercicio4();

// Ejercicio 5
function ejercicio5() {
    let obj = {};

    for (let i = 0; i < arrayMisiones.length; i++) {
        arrayMisiones[i].astronautas.forEach(astro => {
            !obj[astro.pais] ? obj[astro.pais] = 1 : obj[astro.pais]++;
        });

    }

    console.log(obj);
}
ejercicio5();

// Ejercicio 6
function ejercicio6() {
    let combustibleNave = arrayMisiones.flatMap(mision => mision.nave);
    let navesAdecuadas = [];
    let mejorNave = "";
    let mejorCombustible = 0;
    let combusibleMaximo = 200;

    combustibleNave.forEach(nave => {
        let autonomia = nave.combustible;
        if (autonomia <= combusibleMaximo && autonomia > mejorCombustible) {
            mejorCombustible = autonomia;
            mejorNave = nave;
        }

        navesAdecuadas.push({
            nave: mejorNave,
            combustibleSobrante: combusibleMaximo - mejorCombustible
        });
    });
    console.log(navesAdecuadas);
}
ejercicio6();

// Ejercicio 7
function ejercicio7() {
    let astronautas = [];

    arrayMisiones.forEach(mision => {
        mision.astronautas.forEach(astro => {
            if (astro.edad < 40) {
                astronautas.push(astro.nombre);
            }
        });
    });
    let astroViejo = new Set(astronautas);

    console.log(astroViejo);
}
ejercicio7();