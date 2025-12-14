import cors from "@fastify/cors"
import Fastify from "fastify"
import { questionRoutes } from "./routes/questionRoutes.js"
import { configDotenv } from "dotenv"
import fastifySwagger from "@fastify/swagger"
import fastifySwaggerUi from "@fastify/swagger-ui"
import { anwserRoutes } from "./routes/answerRoutes.js"

configDotenv()
export const buildApp = () => {
    const app = Fastify({logger: false})

    app.register(
        cors, 
        {origin: "*"}
    )

    app.register(
        fastifySwagger, {
            swagger: {
                info: {
                    title: "QuizzApi",
                    description: "quizzAPi docs",
                    version: "1.0.0.1"
                },
                host: `http://${process.env.HOST}/${process.env.PORT}`,
                schemes: ['http'],
                consumes: ['application/json'],
                produces: ['application/json']
            }
        }
    )

    app.register(
        fastifySwaggerUi,
        {
            routePrefix: "/docs",
            exposeRoute: true
        }
    )

    app.register(
        questionRoutes, 
        {prefix: "/questions"} 
    )
    app.register(
        anwserRoutes,
        {prefix: "/answers"}
    )


    
    return app
}

