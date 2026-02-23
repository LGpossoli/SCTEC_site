import { Router } from "express";
import usersController from "../controller/usersController";

const router = Router();

router.get("/",usersController.login);
router.post("/login",usersController.checkLogin);


export default router;