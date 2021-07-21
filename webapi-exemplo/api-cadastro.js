var http = require('http'); 
const express = require('express');
const app = express();
// eslint-disable-next-line no-unused-vars
//const bodyParser = require('body-parser');
 
app.use(require("cors")());
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
 
app.get('/', (req, res) => {
    res.json({message: "Tudo ok por aqui!", dados: cadastros});
})
 
const cadastros = [];
app.post('/cadastro', (req, res) => {//recebe a riquisiçao do frontend 
    console.log("Cadastro recebido!");
    //salva no banco de dados
    cadastros.push({
        Question: req.body.txtQuestion, 
        Response: req.body.txtRes, 
        //uf: req.body.cmbUF foi comentado no Form
    });
    res.json({message: "Tudo ok por aqui!", dados: cadastros, primeiro: cadastros[0]});//envia resposta de volta para frontend
    
}) 
 
var server = http.createServer(app); 
server.listen(3031);
console.log("Servidor escutando na porta 3031...")