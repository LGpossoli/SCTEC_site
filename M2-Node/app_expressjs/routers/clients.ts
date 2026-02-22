import { Router } from "express";
import clientsController from "../controller/clientsController";

const router = Router();

router.get("/",clientsController.index)

router.get("/sobrenos",(req, res)=>{
    res.send("<h1>Rota Sobre nós</h1>")
})

router.get("/trabalheconosco",(req, res)=>{
    res.send("<h1>Opções de Carreira</h1>")
})

router.get("/contato",(req, res)=>{
    res.send("<h1>Telefone (48) 98765 4321</h1>")
})

export default router;