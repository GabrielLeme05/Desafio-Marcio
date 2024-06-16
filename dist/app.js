"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 3000;
mongoose_1.default.connect('mongodb://localhost:27017/loja-departamentos')
    .then(() => {
    console.log('Conectado ao MongoDB');
})
    .catch((err) => {
    console.log(`Erro ao conectar ao MongoDB: ${err}`);
});
app.use(body_parser_1.default.json());
const produtos_1 = __importDefault(require("./routes/produtos"));
app.use('/api/produtos', produtos_1.default);
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
