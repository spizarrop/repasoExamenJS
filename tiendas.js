/**********************************************************************************************
*          EJERCICIOS EXTRAS PARA PRACTICAR EL USO DE MAP() Y ACCESO A DATOS ANIDADOS        *
**********************************************************************************************/

// Estructura principal: un Map donde la clave es el nombre de la tienda
// y el valor es un array de objetos que representan los juegos que venden.

const tiendas = new Map([
    ["GamePlanet", [
        { titulo: "The Legend of Zelda: Tears of the Kingdom", genero: "Aventura", precio: 69.99, stock: 25, vendidos: 18 },
        { titulo: "Super Mario Bros. Wonder", genero: "Plataformas", precio: 59.99, stock: 30, vendidos: 22 },
        { titulo: "Metroid Prime Remastered", genero: "Acción", precio: 49.99, stock: 10, vendidos: 10 }
    ]],
    ["SteamStore", [
        { titulo: "Baldur’s Gate 3", genero: "RPG", precio: 59.99, stock: 100, vendidos: 95 },
        { titulo: "Elden Ring", genero: "RPG", precio: 59.99, stock: 70, vendidos: 65 },
        { titulo: "Hades", genero: "Roguelike", precio: 24.99, stock: 50, vendidos: 40 }
    ]],
    ["EpicGames", [
        { titulo: "Fortnite", genero: "Battle Royale", precio: 0, stock: 9999, vendidos: 9999 },
        { titulo: "Alan Wake 2", genero: "Terror", precio: 69.99, stock: 40, vendidos: 15 },
        { titulo: "Fall Guys", genero: "Party", precio: 19.99, stock: 80, vendidos: 60 }
    ]]
]);

/**
 * ACT 1 - EXTRA: Calcular las ganancias totales por tienda.
 * la suma total de dinero generado (precio * vendidos) en cada tienda.
 */
function gananciasTotales() {
    let gananciasTienda = [];
    tiendas.forEach((tienda, id) => {
        //let ganancias = tienda.map(juego => juego.precio * juego.vendidos).reduce((acc, juego) => acc + juego, 0);
        let ganancias = tienda.reduce((acc, juego) => acc + juego.precio * juego.vendidos, 0);
        gananciasTienda.push({ nombre: id, gananciaTotal: ganancias });
    });
    console.log(gananciasTienda);
}
gananciasTotales();
/**
 * ACT 2 - EXTRA: Encontrar las tiendas con algún juego agotado (stock = 0 o stock = vendidos).
 * Devuelve los nombres de las tiendas donde haya al menos un juego sin stock disponible.
 */
function juegoAgotado() {
    let juegosAgotadosTienda = [];
    tiendas.forEach((tienda, id) => {
        if (tienda.some(juego => juego.stock == 0 || juego.vendidos >= juego.stock)) {
            juegosAgotadosTienda.push(id);
        };
    });
    console.log(juegosAgotadosTienda);
}
juegoAgotado();
/**
 * ACT 3 - EXTRA: Listar todos los juegos de un género específico (por ejemplo "RPG")
 */
function listarJuegosGenero(nombreGenero) {
    let listaJuegos = [];
    tiendas.forEach((tienda, id) => {
        if (tienda.some(juego => juego.genero == nombreGenero)) {
            let juego = tienda.filter(tienda => tienda.genero == nombreGenero);
            listaJuegos.push(juego);
        }
    });
    console.log(listaJuegos);
}
listarJuegosGenero("RPG");

/**
 * ACT 4 - EXTRA: Calcular el promedio de precios por tienda.
 */
function promedioPrecios() {
    let promedioJuegos = [];
    tiendas.forEach((tienda, id) => {
        let precioTotal = tienda.map(juego => juego.precio).reduce((acc, precio) => acc + precio, 0);
        let promedio = precioTotal / tienda.length;
        promedioJuegos.push({ nombreTienda: id, precioPromedio: promedio.toFixed(2) });
    });
    console.log(promedioJuegos);
}
promedioPrecios();
/**
 * ACT 5 - EXTRA: Crear un nuevo Map con solo los juegos más vendidos (vendidos > 50)
 * de cada tienda. La estructura final debe mantener el formato Map pero con juegos filtrados.
 */
function juegosMasVendidos() {
    let masVendidos = new Map();
    tiendas.forEach((tienda, id) => {
        if (tienda.some(juego => juego.vendidos > 50)) {
            let vendido = tienda.filter(juegos => juegos.vendidos > 50);
            masVendidos.set(id, vendido);
        } 
    });
    console.log(masVendidos);
}
juegosMasVendidos();