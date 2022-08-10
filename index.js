const express = require('express');

// Crear el servidor/aplicacion de express
const app = express();


//GET
app.get('/', (req, res) => {
    //res.status(404).json({
    res.json({
        ok: true,
        msg: 'Todo salio bien',
        uid: 12345
    })
})

// Levantar aplicacion, para escuchar cualquier informacion que venga hacia algun puerto en especifico
app.listen(4000, () => {
    console.log(`Servidor corriendo en puerto ${4000}`);
});