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
    app.get("/:id", getQuestionByID),
    app.patch("/:id", updateQuestionById),
    app.post("/", createCompleteQuestion),
    app.delete("/:id", deleteQuestionById),
    app.get("/all", getAllCompleteQuestions)
}


export {
    questionRoutes
}
