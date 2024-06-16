import express, { Request, Response } from 'express'
import Produto from '../models/produto'

const router = express.Router()


router.get('/', async (req: Request, res: Response) => {
    try {
        const produtos = await Produto.find()
        res.json(produtos)
    } catch(err) {
        res.status(500).json({ message: (err as Error).message })
    }
})


router.get('/:idOrName', async (req: Request, res: Response) => {
    try {
        const idOrName = req.params.idOrName
        const produto = await Produto.findOne({ $or: [{ _id: idOrName }, { nome: idOrName }]})
        if(!produto) {
            return res.status(404).json({ message: 'Produto não encontrado '})
        }
        res.json(produto)
    } catch(err) {
        res.status(500).json({ message: (err as Error).message })
    }
})

router.post('/', async (req: Request , res: Response) => {
    const produto = new Produto({
        nome: req.body.nome,
        descricao: req.body.descricao,
        cor: req.body.cor,
        peso: req.body.peso,
        tipo: req.body.tipo,
        preco: req.body.preco,
        dataCadastro: req.body.dataCadastro || new Date()
    })

    try {
        const novoProduto = await produto.save()
        res.status(201).json(novoProduto)
    } catch(err) {
        res.status(400).json({ message: (err as Error).message })
    }
})

router.put('/:id', async (req: Request, res: Response) => {
    try {
        const produto = await Produto.findById(req.params.id)
        if(!produto) {
            return res.status(404).json({ message: 'Produto não encontrado' })
        } 

        produto.nome = req.body.nome || produto.nome
        produto.descricao = req.body.descricao || produto.descricao
        produto.cor = req.body.cor || produto.cor
        produto.peso = req.body.peso || produto.peso
        produto.tipo = req.body.tipo || produto.tipo
        produto.preco = req.body.preco || produto.preco
        produto.dataCadastro = req.body.dataCadastro || produto.dataCadastro

        const produtoAtualizado = await produto.save()
        res.json(produtoAtualizado)
    } catch(err) {
        res.status(400).json({ message: (err as Error).message })
    }
})

router.delete('/:id', async(req: Request, res: Response) => {
    try { 
        const produto = await Produto.findByIdAndDelete(req.params.id)
        if(!produto) {
            return res.status(404).json({ message: 'Produto não encontrado' })
        }

        res.json({ message: 'Produto deletado' })
    } catch(err) {
        res.status(500).json({ message: (err as Error).message})
    }
})

export default router