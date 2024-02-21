import express, {Request, Response} from "express";

const app = express();
const PORT = 3001;
function message(){
    console.log(`Iniciando Servidor na porta: ${PORT}`)
}
app.listen(PORT,message);
app.get('/', function(req:Request, res:Response){res.send("index.html")} );
