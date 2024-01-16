import express from "express";
import livro from "../controller/LivroController";


const routes = express.Router();

routes.get("/livros", livro.listarLivros);

export default routes;
