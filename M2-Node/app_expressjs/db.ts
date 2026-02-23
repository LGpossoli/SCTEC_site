import { Sequelize } from "sequelize";

const dbname = process.env.DB_NAME!;
const dbuser = process.env.DB_USER!;
const dbpass = process.env.DB_PASS!;
const dbhost = process.env.DB_HOST!;

const sequelize = new Sequelize(dbname, dbuser,dbpass,{
    dialect: "mysql",
    host: dbhost
});

export default sequelize;