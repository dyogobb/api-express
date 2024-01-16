import livros from "./livros.js";
import bodyParser from "body-parser";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Home"));

    app.use(bodyParser.json, livros)
}

export default routes;