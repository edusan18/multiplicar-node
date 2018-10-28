// requireds -- hace referencias a paquetes

const fs = require('fs'); // ver en nodejs.org entrar a pestaña docs// este es un paquete nativo
//const fs = require('express'); // paquete no nativo, necesita previa instalacion
//const fs = require('./fs'); // paquete propio, debemos indicarle la ruta del paquete

let base = 3;
let contenido = '';
for (let i = 1; i<=10;i++)
{

    contenido += `${base} x ${i} = ${base * i}\n`;
}

const data = new Uint8Array(Buffer.from(contenido));
fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
  if (err) throw err;
  console.log(`El archivo tabla-${base} ha sido creado!`);
});


