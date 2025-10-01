// Formas de llamar a un módulo
// 1) forma antigua -> commonjs
const path = require('node:path')

// 2) forma moderna -> module
// import path from 'node:path';

// Windows: C:\Windows\DiagTrack
// Mac + Linux : /

// Qué separador utiliza nuestro SO
console.log(path.sep);

// join() para unir elementos
const ruta = path.join("proyectos", "node", "node_01", "04_path.js")
console.log(ruta);

// Nombre del fichero
const fichero = path.basename(ruta)
console.log("El fichero buscado es", fichero);

// Ruta excepto el fichero
const ruta2 = path.dirname(ruta)
console.log("La ruta donde están los ficheros es", ruta2);

// Directorio inicial del proyecto
console.log("Directorio proyecto:", __dirname);