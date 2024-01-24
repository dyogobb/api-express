import livros from "../models/Livros.js";
import { autor } from "../models/Autor.js";

class LivroController {

    static async listarLivros(req, res) {
        try {
            const listaLivros = await livros.find({});
            res.status(200).json(listaLivros)
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    };

    static async listarLivroPorId(req, res) {
        try {
            const id = req.params.id
            const livro = await livros.findById(id);
            res.status(200).json(livro)
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }

    };

    static async cadastrarLivro(req, res) {
        const novoCadastro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoCadastro.autor);
            const novoLivro = {...novoCadastro, autor: {...autorEncontrado._doc}}
            const livroCriado = await livros.create(novoLivro)
            res.status(201).json({
                message: "Criado com sucesso",
                livro: novoLivro,
            })
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - erro ao cadastrar`
            })
        }
    };

    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id
            await livros.findByIdAndUpdate(id, req.body);
            res.status(200).send("Cadastro atualizado")
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }

    };

    static async deletarLivro(req, res) {
        try {
            const id = req.params.id;
            await livros.findByIdAndDelete(id);
            res.status(200).send("Livro excluído")
        } catch (error) {
            res.status(500).json({
                message: `Falha ao excluir o livro - ${error.message}`
            })
        }
    }
}

export default LivroController;