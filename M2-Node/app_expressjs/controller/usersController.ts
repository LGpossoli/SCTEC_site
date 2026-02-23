import { Request, Response } from "express";
import { IUsers } from "../model/users";
import usersModel from "../model/usersModel";
import { error } from "node:console";

function login (req: Request, res: Response, next: any){
    
    res.render("login");
}

async function checkLogin (req: Request, res: Response, next: any){
    
    const login = req.body as IUsers;

    try{
        let logado = await usersModel.findOne({
                where: {
                    user: login.user,
                    password: login.password
                }
            });

            if( logado != null){
       return res.redirect("/clients");
    }
    else {
        //console.log("Senha inválida");
        throw new Error("Senha inválida");
    }
    }catch(erro){
        console.log(erro);
        res.status(500).end();
    }

}


export default {login,checkLogin};