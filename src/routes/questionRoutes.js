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

import { 
    postQuestion ,
    deleteQuestion,
    getQuestions,
    getQuestion,
    patchQuestion,
    getAllQuestions
} from "../utils/questionSchema.js"

const questionRoutes = async (app, opt) => {
    app.get(
        "/",
        {
            schema: getQuestions.route,
            response: {
                200: getQuestions.response
            }
        },
        listQuestions
    ),

    app.get(
        "/:id", 
        {
            schema: getQuestion.route,
            response: {
                200: getQuestion.response,
            }
        },
        getQuestionByID

    ),
    app.patch(
        "/:id", 
        {
            schema: patchQuestion.route,
            response: {
                200: patchQuestion.response
            }
        },
        updateQuestionById
    ),
    
    app.post(
        "/", 
        {
            schema: postQuestion.route,
            response: {
                201: postQuestion.response
            }
        },
        createCompleteQuestion
    ),

    app.delete(
        "/:id", 
        {
            schema: deleteQuestion.route,
            response: {
                200: postQuestion.response
            }
        },
        deleteQuestionById
    )
    
    app.get(
        "/all", 
        {
            schema: getAllQuestions.route,
            response: {
                200: getAllQuestions.response
            }
        },
        getAllCompleteQuestions
    )
}


export {
    questionRoutes
}
