import express from "express";
import bodyParser from "body-parser";
import connectDb from "./config/dbConnect.js";
import routes from "./routes/index.js";

const app = express();

//Conexão no banco de dados
app.use(bodyParser.json())
const conexao = await connectDb();
conexao.on("error", (erro) => {
    console.error("Erro de conexão ", erro)
})
conexao.once("open", () => {
    console.log("Conexão bem sucedida")
})
//Fim conexão no banco de dados

routes(app)

app.delete("/livros/:id", (req, res) => {
    const index = BuscaLivros(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Excluido")
})

export default app;

