import { createCompleteQuestion } from "../controller/generalController.js"
import { listQuestions } from "../controller/questionController.js"


const questionRoutes = async (app, opt) => {
    app.get("/", listQuestions),
    app.post("/", createCompleteQuestion)
}


export {
    questionRoutes
}
