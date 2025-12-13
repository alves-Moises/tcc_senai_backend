import { configDotenv } from "dotenv";
import mysql from "mysql2/promise"

configDotenv()
export const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: DB_NAME
})

db.on("connection", () => {console.log("coencted")})