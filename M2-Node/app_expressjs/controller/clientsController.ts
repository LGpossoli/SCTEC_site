import { Request, Response } from "express";
import { Iclients } from "../model/clients";
import clientModel from "../model/clientModel";

async function index (req: Request, res: Response, next: any){
    const clients = await clientModel.findAll();
    res.json(clients)
}

async function show (req: Request, res: Response, next: any){
    const client = await clientModel.findByPk(req.params.id as string);
    res.json(client)
}

async function create(req: Request, res: Response, next: any) {
    res.render("create")
}

async function store (req: Request, res: Response, next: any){
    const clients = req.body as Iclients;
    await clientModel.create({...clients});
    res.redirect("/");
}

async function edit (req: Request, res: Response, next: any){
    const client = await clientModel.findByPk(req.params.id as string);
    res.render("edit", {client:client});
}

async function update (req: Request, res: Response, next: any){
    await clientModel.update(
    req.body as Iclients, {
        where:{id: req.params.id}
    });
    res.redirect("/");
}

async function del (req: Request, res: Response, next: any){
    await clientModel.destroy(
        {
            where:{
                id: req.params.id
            }
        }
    );
    res.redirect("/");
}

export default {index, create, store, show, edit, update, del};