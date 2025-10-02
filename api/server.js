import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'
import municipioRoutes from './routes/MunicipioRoutes.js'

const app = express()
app.use(cors())
app.use(express.json())

const uri = process.env.MONGODB_URI
const port = process.env.PORT

console.log(uri);

mongoose
    .connect(uri)
    .then(() => console.log('MongoDB Conectado'))
    .catch((err) => {
        console.error('Erro ao conectar no MongoDB')
        process.exit(1)
    })

app.get('/', (req, res) => res.json({
    ok: true,
    msg: 'Servidor Funcionando'
}))

app.use(municipioRoutes)

app.use((err, req, res, next) => {
    console.error(err)
    res.json(err.status || 500).json({
        error: err.message || 'Erro Inteno'
    })
})

app.listen(port, () => console.log("http://localhost: " + port))