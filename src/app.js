import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json())



const livros = [
    {
        id: 1,
        livro: "hp"
    },
    {
        id: 2,
        livro: "hp2"
    }
]

function BuscaLivros(id){
    return livros.findIndex(livros =>{
        return livros.id === parseInt(id)
    })
}

app.get("/", (req, res) => {
    res.status(200).send("NodeJs")
});

app.get("/livros", (req,res)=>{
    res.status(200).json(livros)
})

app.get("/livros/:id", (req, res)=>{
    const index = BuscaLivros(req.params.id);
    res.status(200).json(livros[index])
})

app.post("/livros", (req, res)=>{
    livros.push(req.body);
    res.status(201).send("Cadastrado");
})

app.put("/livros/:id", (req, res)=>{
    const index = BuscaLivros(req.params.id);
    livros[index].livro = req.body.livro;
    res.status(200).send("Alterado")
});

app.delete("/livros/:id", (req, res)=>{
    const index = BuscaLivros(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Excluido")
})

export default app;