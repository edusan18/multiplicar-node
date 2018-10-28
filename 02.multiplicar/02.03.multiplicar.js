// requireds -- hace referencias a paquetes

const fs = require('fs'); // ver en nodejs.org entrar a pestaña docs// este es un paquete nativo
const colors = require('colors');

let listarTabla = (base, limite = 10) =>{
    
    console.log('============================'.green);
    console.log(`======Tabla de ${base}======`.green);
    console.log('============================'.green);

        for (let i = 1; i<=limite;i++)
        {
        
          console.log(`${base} x ${i} = ${base * i}`);
           
        }
        //console.log(data);
  
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


