"use strict";
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).send({
        message: "Tudo funcionando na rota 3333"
    });
});
app.listen(3333, () => {
    console.log("Api funcionando");
});
 