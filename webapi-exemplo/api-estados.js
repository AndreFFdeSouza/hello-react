//api-estados.js
var http = require('http'); 
const express = require('express');
const app = express();
app.use(require("cors")());

app.get('/', (req, res, next) => {
    res.json({message: "Tudo ok por aqui!"});
});

/*app.get('/estados', (req, res, next) => { 
    console.log("Retornou todos estados!");
    const ufs = [        
        {id:1,uf:'AC'},{id:2,uf:'AL'},{id:3,uf:'AM'},
        {id:4,uf:'AP'},{id:5,uf:'BA'},{id:6,uf:'CE'},
        {id:7,uf:'DF'},{id:8,uf:'ES'},{id:9,uf:'GO'},
        {id:10,uf:'MA'},{id:11,uf:'MG'},{id:12,uf:'MS'},
        {id:13,uf:'MT'},{id:14,uf:'PA'},{id:15,uf:'PB'},
        {id:16,uf:'PE'},{id:17,uf:'PI'},{id:18,uf:'PR'},
        {id:19,uf:'RJ'},{id:20,uf:'RN'},{id:21,uf:'RO'},
        {id:22,uf:'RR'},{id:23,uf:'RS'},{id:24,uf:'SC'},
        {id:25,uf:'SE'},{id:26,uf:'SP'},{id:27,uf:'TO'},
    ]
    res.json(ufs);
});
foi comentado no Form */
var server = http.createServer(app); 
server.listen(3030);
console.log("Servidor escutando na porta 3030...");
