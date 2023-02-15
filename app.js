const express = require("express");
const cors = require("cors");
const connect = require("./src/db/connect");

const app = express();

app.use(cors());

app.use(express.json());

connect();

app.listen(3000, () => {
    console.log("Servidor online!");
});
