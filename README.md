# API de Loja de Departamentos

Este é um projeto de uma API desenvolvida em Node.js utilizando TypeScript e MongoDB para possibilitar o CRUD completo de produtos de uma loja de departamentos.

## Funcionalidades

A API oferece as seguintes funcionalidades:

- Listar todas as informações de todos os produtos
- Listar todas as informações de um determinado produto usando seu ID ou Nome
- Cadastrar um novo produto
- Atualizar um produto existente
- Deletar um produto

## Pré-requisitos

Antes de iniciar, certifique-se de ter o seguinte instalado em sua máquina:

- Node.js
- npm (Node Package Manager)
- MongoDB

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/IcaroWil/Desafio-Tecnico-API.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd Desafio-Tecnico-API
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

## Configuração do MongoDB

Certifique-se de ter o MongoDB instalado e em execução em sua máquina local. Se necessário, ajuste a URL de conexão do MongoDB no arquivo `src/app.ts`.

## Como Usar

1. Inicie o servidor:

   ```bash
   npm start
   ```

2. Utilize o Postman ou qualquer outra ferramenta similar para testar os endpoints da API. Consulte a seção "Testando a API" abaixo para detalhes sobre como testar cada funcionalidade.

## Testando a API

Você pode testar a API diretamente através do link de deploy:

   - Base URL: [Desafio-Tecnico-API](https://desafio-tecnico-api-qtm3.onrender.com/api/produtos)

1. **Listar todas as informações de todos os produtos**:
   - Método: `GET`
   - URL: `https://desafio-tecnico-api-qtm3.onrender.com/api/produtos`

2. **Listar todas as informações de um determinado produto usando seu ID ou Nome**:
   - Método: `GET`
   - URL: `https://desafio-tecnico-api-qtm3.onrender.com/api/produtos/{idOrName}`

3. **Cadastrar um novo produto**:
   - Método: `POST`
   - URL: `https://desafio-tecnico-api-qtm3.onrender.com/api/produtos`
   - Body: JSON com os detalhes do produto

4. **Atualizar um produto existente**:
   - Método: `PUT`
   - URL: `https://desafio-tecnico-api-qtm3.onrender.com/api/produtos/{id}`
   - Body: JSON com os detalhes atualizados do produto

5. **Deletar um produto existente**:
   - Método: `DELETE`
   - URL: `https://desafio-tecnico-api-qtm3.onrender.com/api/produtos/{id}`

## Dependências

- express
- mongoose
- body-parser
- typescript
- @types/node
- @types/express
- @types/mongoose

## Comandos Disponíveis

- `npm start`: Inicia o servidor
- `npm run dev`: Inicia o servidor em modo de desenvolvimento (com hot-reloading)
- `npm run build`: Compila o código TypeScript para JavaScript
- `npm run lint`: Executa o linter para verificar o código
- `npm test`: Executa os testes