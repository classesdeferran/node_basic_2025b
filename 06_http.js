const http = require("node:http");

process.loadEnvFile();
const PORT = process.env.PORT;

// petición = request -> req
// respuesta = response -> res
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    if (res.statusCode === 200) {
      res.end("Estamos en la ruta raíz");
    } else if (res.statusCode === 404) {
      res.end("Recurso no encontrado");
    }
  } else if (req.url == "/node") {
    if (res.statusCode === 200) {
      res.end("Estamos en la ruta NODE");
    } else if (res.statusCode === 404) {
      res.end("Recurso no encontrado");
    }
  } 
});

server.listen(PORT, () => {
  console.log(`Servidor arrancado en http://localhost:${PORT}`);
});
