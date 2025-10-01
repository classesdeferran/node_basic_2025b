// FS = File System

const fs = require("node:fs")

let texto = "En un lugar de la Mancha"
// writeFile escribe en un fichero de texto
// sustituyendo lo que hubiera
fs.writeFileSync("El Quijote.txt", texto, (error) => {
    if (error) {throw error}
    // console.log(error);
    console.log("Escritura terminada texto 1");
})

let texto2 = " de cuyo nombre no quiero acordarme"
fs.appendFile("El Quijote.txt", texto2, (error) => {
    if (error) {throw error}
    // console.log(error);
    console.log("Escritura terminada texto 2");
})

texto2 = "\n¡Eso escribió Cervantes hace un porrón de años!"
fs.appendFileSync("El Quijote.txt", texto2, (error) => {
    if (error) {throw error}
    // console.log(error);
    console.log("Escritura terminada texto 3");
})

const textoLeido = fs.readFileSync("El Quijote.txt", "utf-8", (error)=>{
    if (error) throw error;
    console.log("lectura realizada sin problemas");
})
console.log(textoLeido);

// Borrar el fichero
fs.unlinkSync("El Quijote.txt", (error) => {
    if (error) throw error
})