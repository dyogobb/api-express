import app from "./src/app.js";
import "dotenv/config.js";

const port = 8000;
const routes = {
    "/": "Node.Js",
    "/livros": "livros"
}

app.listen(port, ()=>{
    console.log("Rodando")
})