import colors from 'colors'
import express from "express";
import swaggerUi from 'swagger-ui-express'
import { swaggerSpect, swaggerUiOptions } from './config/swagger';
import router from "./router";
import db from "./config/db";

async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        // console.log(colors.magenta('Conexión exitosa'))
    } catch (error) {
        console.log(error)
        console.log(colors.bgRed.white('Error a conectar a la base de datos'))
    }

}

connectDB()

const server = express()
server.use(express.json())

server.use('/api/products', router)

server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpect, swaggerUiOptions))

export default server