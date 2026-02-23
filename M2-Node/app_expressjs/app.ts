import express from "express";
import clientsRouter from "./routers/clients";
import usersRouter from "./routers/users";
import db from "./db";

const app = express();

app.set("view engine","pug");
app.set("views","./views");
app.use(express.urlencoded({extended: true}));
app.use(usersRouter);
app.use(clientsRouter);



db.sync().then(()=>{
    console.log("Conectado com o banco:", db.config.database);
}).then(()=>{
    app.listen(process.env.PORT, ()=>{
    console.log("Servidor criado..")
})
})
