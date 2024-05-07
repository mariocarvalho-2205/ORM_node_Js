const express = require("express");

const app = express();

// configurando o express
app.use(express.json());


// criando rota teste

app.get("/teste", (req, res) => {
    res.status(200).send({
        mensagem: "Boas vindas a API"
    });
});

module.exports = app