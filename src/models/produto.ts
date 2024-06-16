import mongoose, { Schema } from "mongoose"

interface IProduto extends Document {
    nome: string
    descricao: string
    cor: string
    peso: number
    tipo: string
    preco: number
    dataCadastro: Date
}

const produtoSchema: Schema = new Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    cor: { type: String, required: true },
    peso: { type: Number, required: true},
    tipo: { type: String, required: true},
    preco: { type: Number, required: true},
    dataCadastro: { type: Date, default: Date.now}
})

const Produto = mongoose.model<IProduto>('Produto', produtoSchema)
export default Produto