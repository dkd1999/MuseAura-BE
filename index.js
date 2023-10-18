import * as dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import express from 'express'
import './db/connection.js'
import connectDB from './db/connection.js'
// import router from './Routes/router.js'
import postRoutes from './Routes/postRoutes.js'
import dalleRoutes from './Routes/dalleRoutes.js'
const server = express()

server.use(cors())
server.use(express.json({limit:'50mb'}))

server.use('/collection',postRoutes)
server.use('/dalle',dalleRoutes)


// server.use(router)

const PORT = 3100 || process.env.PORT

const startServer = async () => {
    try {
        connectDB(process.env.DATABASE);
        server.listen(PORT, () => {
            console.log('Server online');
        })
    } catch (error) {
        console.log(error);
    }

}
startServer()

server.get('/', (req, res) => {
    res.send(`<h1 style="color: red;width:100%;text-align:center;">AI image gen server online</h1>`)
})