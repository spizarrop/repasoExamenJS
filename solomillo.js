// 🧠 CHULETA JAVASCRIPT COMPLETA

// ---------------- FUNCIONES ----------------
function suma(a, b) { return a + b; }

const resta = function(a, b) { return a - b; };

const mult = (a, b) => {a * b};  // función flecha

function saludar(nombre = 'Invitado') {
  console.log(`Hola ${nombre}`);
}

// ---------------- ARRAYS ----------------
let nums = [1, 2, 3, 4, 5];

// Métodos básicos
nums.push(6);      // agrega al final
nums.pop();        // quita último
nums.shift();      // quita primero
nums.unshift(0);   // agrega al inicio
nums.includes(3);  // true
nums.indexOf(2);   // 1

// Recorrer
nums.forEach(n => console.log(n));

// Métodos que devuelven nuevo array
nums.map(n => n * 2);               // [2,4,6,8,10]
nums.filter(n => n > 2);            // [3,4,5]
nums.reduce((acc, n) => acc + n, 0);// 15

// Búsqueda y comprobación
nums.find(n => n > 3);      // 4
nums.findIndex(n => n > 3); // 3
nums.some(n => n > 4);      // true
nums.every(n => n > 0);     // true

// Otros útiles
nums.sort();     // ordena (alfabéticamente)
nums.reverse();  // invierte el orden
nums.join('-');  // "1-2-3-4-5"

// ---------------- MAP ----------------
let mapa = new Map();

mapa.set('nombre', 'Ana');
mapa.get('nombre');     // 'Ana'
mapa.has('nombre');     // true
mapa.delete('nombre');  // elimina
mapa.size;              // cantidad de elementos

mapa.forEach((v, k) => console.log(k, v));

// ---------------- SET ----------------
let conjunto = new Set([1, 2, 3]);

conjunto.add(4);
conjunto.add(2);     // ignorado
conjunto.has(3);     // true
conjunto.delete(1);  // elimina
conjunto.size;       // 3

conjunto.forEach(v => console.log(v));

// ---------------- OBJETOS ----------------
let persona = {
  nombre: 'Juan',
  edad: 30,
  saludar() { console.log(`Hola soy ${this.nombre}`); }
};

persona.nombre;       // 'Juan'
persona['edad'];      // 30
persona.saludar();    // Hola soy Juan

persona.apellido = 'Pérez'; // añadir propiedad
delete persona.edad;        // eliminar propiedad

// ---------------- EXTRA ----------------
// Destructuring
const { nombre } = persona;
const [a, b] = [1, 2];

// Spread y Rest
const copia = { ...persona };
const arr2 = [...nums];
function sumar(...args) { return args.reduce((a, b) => a + b); }

// Template strings
console.log(`Hola ${persona.nombre}`);

// Object helpers
Object.keys(persona);     // ['nombre', 'apellido']
Object.values(persona);   // ['Juan', 'Pérez']
Object.entries(persona);  // [['nombre','Juan'],['apellido','Pérez']]
