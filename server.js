import "dotenv/config"
import app from "./src/app.js";

const port = 8000;


app.listen(port, ()=>{
    console.log("Rodando")
})