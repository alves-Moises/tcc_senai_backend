import { configDotenv } from "dotenv";
import { buildApp } from "./app.js";
import chalk from "chalk"
const yellow = chalk.yellow
const bgYellow = chalk.bgYellow
configDotenv()

const app = buildApp()

app.listen(
    {
        port: process.env.PORT,
        host: process.env.HOST,
    },
    (err, addr) => {
        if(err){
            app.log.error(err)
            process.exit(1)
        }

        console.log(`${yellow("Server running at")} ${bgYellow(addr)}`)
    }
)   

export { app }