import express from "express";
import livros from "./livrosRoutes.js"
import autores from "./autorRoutes.js"
import bodyParser from "body-parser";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));
  app.use(bodyParser.json(), livros);
  app.use(bodyParser.json(), autores )
};

export default routes;