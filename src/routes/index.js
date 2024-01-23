import express from "express";
import livros from "./livrosRoutes.js"
import bodyParser from "body-parser";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));
  app.use(bodyParser.json(), livros);
};

export default routes;