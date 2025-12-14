import { 
    createCompleteQuestion,
    getAllCompleteQuestions
} from "../controller/generalController.js"

import { 
    deleteQuestionById, 
    getQuestionByID, 
    listQuestions, 
    updateQuestionById
} from "../controller/questionController.js"



const questionRoutes = async (app, opt) => {
    app.get("/", listQuestions),
    app.post("/", createCompleteQuestion),
    app.get("/all", getAllCompleteQuestions)
}


export {
    questionRoutes
}
