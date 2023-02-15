const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

// DB Connection
const connect = require("./src/db/connect");
connect();

// Routes
const routes = require("./src/routes/router");
app.use("/api", routes);

app.listen(3000, () => {
    console.log("Servidor online!");
});
