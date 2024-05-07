import express from "express";
import router from "./router";
import db from "./config/db";

async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log('Conexión exitosa')
    } catch (error) {
        console.log(error)
        console.log('Error a conectar a la base de datos')
    }

}

connectDB()

const server = express()

server.use('./api/products', router)

export default server