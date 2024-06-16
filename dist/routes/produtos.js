"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const produto_1 = __importDefault(require("../models/produto"));
const router = express_1.default.Router();
// Lista todos os produtos
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const produtos = yield produto_1.default.find();
        res.json(produtos);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
// Lista um produto por ID ou Nome
router.get('/:idOrName', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idOrName = req.params.idOrName;
        const produto = yield produto_1.default.findOne({ $or: [{ _id: idOrName }, { nome: idOrName }] });
        if (!produto) {
            return res.status(404).json({ message: 'Produto não encontrado ' });
        }
        res.json(produto);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const produto = new produto_1.default({
        nome: req.body.nome,
        descricao: req.body.descricao,
        cor: req.body.cor,
        peso: req.body.peso,
        tipo: req.body.tipo,
        preco: req.body.preco,
        dataCadastro: req.body.dataCadastro || new Date()
    });
    try {
        const novoProduto = yield produto.save();
        res.status(201).json(novoProduto);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const produto = yield produto_1.default.findById(req.params.id);
        if (!produto) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }
        produto.nome = req.body.nome || produto.nome;
        produto.descricao = req.body.descricao || produto.descricao;
        produto.cor = req.body.cor || produto.cor;
        produto.peso = req.body.peso || produto.peso;
        produto.tipo = req.body.tipo || produto.tipo;
        produto.preco = req.body.preco || produto.preco;
        produto.dataCadastro = req.body.dataCadastro || produto.dataCadastro;
        const produtoAtualizado = yield produto.save();
        res.json(produtoAtualizado);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const produto = yield produto_1.default.findByIdAndDelete(req.params.id);
        if (!produto) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }
        res.json({ message: 'Produto deletado' });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
exports.default = router;
