const express = require('express');
const routes = require('./routes');

//crear una app de express
const app = express();


//ruta para el home
//app.use corre con cualquier verbo (ej: app.get, solo corre con get)
/*app.use('/', (req,res) => { 
    res.send('Inicio');
});*/
app.use('/',routes() ); //lee de /routes/index.js donde definis las rutas de las secciones de la page


app.listen(3000); //para iniciar el servidor poner npm start en la consola
