const mongoose = require("mongoose");

async function main() {
    try {
        mongoose.set("strictQuery", true);

        await mongoose.connect(
            "mongodb+srv://felipe:yfBdT7TNef2eBBEy@cluster0.m6e6iwm.mongodb.net/?retryWrites=true&w=majority"
        );

        console.log('Conectado ao MongoDB');
    } catch (error) {
        console.log("Erro: ", error);
    }
}

module.exports = main;