import { configDotenv } from "dotenv";
import { buildApp } from "./app.js";

configDotenv()

const app = buildApp()

app.listen({
    port: process.env.PORT,
    host: process.env.HOST
})
export {app}