import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express();
const port = 3000;


const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/loja-departamentos'

console.log(`Ambiente: ${process.env.NODE_ENV}`)
console.log(`Variável MONGODB_URI: ${process.env.MONGODB_URI}`)
console.log(`MongoDB URI usada: ${mongoUri}`)


mongoose.connect(mongoUri)
    .then(() => {
        console.log('Conectado ao MongoDB')
    })
    .catch((err) => {
        console.error(`Erro ao conectar ao MongoDB: ${err.message}`)
    })

app.use(bodyParser.json())

import produtosRoutes from './routes/produtos'
app.use('/api/produtos', produtosRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})