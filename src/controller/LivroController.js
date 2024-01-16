import livros from "./livros.js";

const livro = class LivroController {

    static async listarLivros (req, res) {
        const listaLivros = await livros.find({})
        res.status(200).json(listaLivros)
    };

    static async novoLivro (req, res) {
        const novoLivro = await livros.create(req.body)
        try {
            res.status(200).json({
                message: "Criado com sucesso",
                livro: novoLivro,
            })
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - erro ao cadastrar`
            })
        }
    };
}

export default livro;