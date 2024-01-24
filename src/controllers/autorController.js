import bodyParser from "body-parser";
import { autor } from "../models/Autor.js";

class AutorController {

    static async listarAutores(req, res) {
        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores)
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    };

    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body)
            res.status(201).json({
                message: "Criado com sucesso",
                autor: novoAutor,
            })
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - erro ao cadastrar`
            })
        }
    };

    static async atualizarAutor(req, res) {
        try {
            const id = req.params.id
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).send("Cadastro atualizado")
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }

    };

    static async deletarAutor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).send("Autor excluído")
        } catch (error) {
            res.status(500).json({
                message: `Falha ao excluir o autor - ${error.message}`
            })
        }
    }

    static async listarAutorPorId(req, res) {
        try {
            const id = req.params.id
            const autores = await autor.findById(id)
            res.status(200).json(autor)
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }

    };
}

export default AutorController;