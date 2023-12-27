// import http from "http";
import app from "./src/app.js";

const port = 8000;
const routes = {
    "/": "Node.Js",
    "/livros": "livros"
}

// const server = http.createServer((req, res) =>{
//     res.writeHead(200, {"Content-Type": "text/plain"})
//     res.end(routes[req.url]);
// })

app.listen(port, ()=>{
    console.log("Rodando")
})