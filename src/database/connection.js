import { configDotenv } from "dotenv";
import mysql from "mysql2/promise"

import chalk from "chalk"

const green = chalk.green
const yellow = chalk.yellow
const bgYellow = chalk.bgYellow

configDotenv()
export const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})
console.log("conected")console.log(green("conected..."))
const Host = `${db.host}/${db.port}`
db.on(
    "conection", 
    () => {
        console.log(`${yellow("Database conected on")} ${bgYellow(Host)}`)
    }
)
