// requireds -- hace referencias a paquetes

const fs = require('fs'); // ver en nodejs.org entrar a pestaña docs// este es un paquete nativo
//const fs = require('express'); // paquete no nativo, necesita previa instalacion
//const fs = require('./fs'); // paquete propio, debemos indicarle la ruta del paquete

let listarTabla = (base, limite = 10) =>{
    return new Promise((resolve,reject) =>{
        if (!Number(base)){
            reject(`La base introducida ${base} no es un número`);
            return;
        }
        if (!Number(limite)){
            reject(`El límite introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i<=limite;i++)
        {
        
            data += `${base} x ${i} = ${base * i}\n`;
           
        }
        console.log(data);
    })
}


let crearArchivo =(base,limite = 10) =>{
    return new Promise((resolve,reject) =>{
        if (!Number(base)){
            reject(`La Base introducido ${base} no es un número`);
            return;
        }
        if (!Number(limite)){
            reject(`El Límite introducido ${base} no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i<=limite;i++)
        {
        
            data += `${base} x ${i} = ${base * i}\n`;
        }
        
        // const data = new Uint8Array(Buffer.from(contenido));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
          
            if (err) 
                reject(err)
            else
                resolve( `tabla-${base}.txt`);
            });

    })
}

// let base = 3;

module.exports={
    crearArchivo,
    listarTabla
}


