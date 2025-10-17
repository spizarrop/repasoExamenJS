/**********************************************************************************************
*          EJERCICIOS EXTRAS PARA PRACTICAR ACCESO A DATOS ANIDADOS Y CONDICIONES LÓGICAS    *
**********************************************************************************************/

const reservas = [
    {
        nombreCliente: "Ana Gómez",
        habitacion: 101,
        noches: 3,
        precioPorNoche: 85,
        pagado: true,
        servicios: [
            { nombre: "Desayuno", costo: 10, usado: true },
            { nombre: "Spa", costo: 25, usado: false },
            { nombre: "Lavandería", costo: 8, usado: true }
        ]
    },
    {
        nombreCliente: "Jorge Ramírez",
        habitacion: 203,
        noches: 2,
        precioPorNoche: 120,
        pagado: false,
        servicios: [
            { nombre: "Desayuno", costo: 10, usado: true },
            { nombre: "Gimnasio", costo: 5, usado: true },
            { nombre: "Lavandería", costo: 8, usado: false }
        ]
    },
    {
        nombreCliente: "Lucía Fernández",
        habitacion: 305,
        noches: 5,
        precioPorNoche: 150,
        pagado: true,
        servicios: [
            { nombre: "Desayuno", costo: 10, usado: true },
            { nombre: "Spa", costo: 25, usado: true },
            { nombre: "Lavandería", costo: 8, usado: true }
        ]
    },
    {
        nombreCliente: "Carlos Méndez",
        habitacion: 407,
        noches: 1,
        precioPorNoche: 60,
        pagado: false,
        servicios: [
            { nombre: "Desayuno", costo: 10, usado: false },
            { nombre: "Gimnasio", costo: 5, usado: true },
            { nombre: "Spa", costo: 25, usado: false }
        ]
    }
];

/**
 * ACT 1 - Calcular el costo total de cada reserva (habitaciones + servicios usados).
 * Muestra el nombre del cliente y su costo total.
 */
function costoTotalReserva() {
    let coste = [];
    reservas.forEach(reserva => {
        let costeHabitacion = reserva.precioPorNoche * reserva.noches;
        let costeServicios = reserva.servicios.filter(servicio => servicio.usado).reduce((acc, total) => acc + total.costo, 0);
        let costeTotal = costeHabitacion + costeServicios;
        coste.push({ nombre: reserva.nombreCliente, costeTotal: costeTotal });
    });

    console.log(coste);
}
costoTotalReserva();

/**
 * ACT 2 - Encontrar las reservas que aún no han sido pagadas.
 * Muestra el nombre del cliente y el número de habitación.
 */
function reservasNoPagadas() {
    let noPagadas = [];

    reservas.forEach(reserva => {
        if (!reserva.pagado) {
            noPagadas.push(reserva);
        }
    });
    console.log(noPagadas);
}
reservasNoPagadas();

/**
 * ACT 3 - Mostrar qué clientes usaron el servicio de "Spa".
 */
function usaronSpa() {
    let clientesSpa = [];

    clientesSpa = reservas
        .filter(reserva => reserva.servicios.some(servicio => servicio.nombre === "Spa" && servicio.usado))
        .map(reserva => reserva.nombreCliente);

    console.log(clientesSpa);
}
usaronSpa();
/**
 * ACT 4 - Calcular el ingreso total del hotel considerando solo reservas pagadas.
 */
function ingresoTotal() {
    let ingresosHotel = [];
    reservas.forEach(reserva => {
        if (reserva.pagado) {
            let ingresosHabitaciones = reserva.precioPorNoche * reserva.noches;
            let ingresosServicios = reserva.servicios.filter(servicio => servicio.usado).reduce((acc, total) => acc + total.costo, 0);
            let ingresos = ingresosHabitaciones + ingresosServicios;
            ingresosHotel.push(ingresos);
        }
    });
    let ingresoTotal = ingresosHotel.reduce((a, b) => a + b, 0);
    console.log('Los ingresos totales del hotel son: ' + ingresoTotal);
}
ingresoTotal();
/**
 * ACT 5 - Listar los clientes cuyo gasto total (habitaciones + servicios) supere los 500 €.
 */
function gastoSuperior() {
    let gastoCliente = [];
    reservas.forEach(reserva => {
        let gastoHabitacion = reserva.precioPorNoche * reserva.noches;
        let gastoServicio = reserva.servicios.filter(servicio => servicio.usado).reduce((acc, total) => acc + total.costo, 0);
        let gastoTotal = gastoHabitacion + gastoServicio;
        if (gastoTotal > 500) {
            gastoCliente.push({ nombre: reserva.nombreCliente, costeTotal: gastoTotal });
        }
    });
    console.log(gastoCliente);

    /* const clientesTop = reservas
    .map(reserva => {
      const gasto = reserva.precioPorNoche * reserva.noches +
                    reserva.servicios.filter(s => s.usado)
                                     .reduce((a, s) => a + s.costo, 0);
      return { nombre: reserva.nombreCliente, gasto };
    })
    .filter(cliente => cliente.gasto > 500); */
}
gastoSuperior();