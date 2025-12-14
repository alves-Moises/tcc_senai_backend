import { configDotenv } from "dotenv";
import { buildApp } from "./app.js";

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

        console.log(`Server running at ${addr}`)
    }
)   

export {app}