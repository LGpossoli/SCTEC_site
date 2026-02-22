import { Request, Response } from "express";

function index (req: Request, resp: Response, next: any){
    resp.render("index")
}

export default {index};