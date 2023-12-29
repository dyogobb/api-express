// import http from "http";
import app from "./src/app.js";

const port = 8000;
const routes = {
    "/": "Node.Js",
    "/livros": "livros"
}

app.listen(port, ()=>{
    console.log("Rodando")
})