import cors from "@fastify/cors"
import Fastify from "fastify"

export const buildApp = () => {
    const app = Fastify({logger: true})

    app.register(cors, {origin: "*"})
    // app.register(routes ... )
    return app
}

