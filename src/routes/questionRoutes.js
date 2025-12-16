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

import { questionSchema } from "../utils/schemas.js"



const questionRoutes = async (app, opt) => {
    

    app.get("/" ,listQuestions),
    app.get("/:id", getQuestionByID),
    app.patch("/:id", updateQuestionById),
    
    app.post(
        "/", 
        {
            schema: {
                description: 'Crete a new question',
                tags: ['Questions'],
                body: {
                    type: 'object',
                    required: ['question', 'answer_list'],
                    properties: {
                        question: { type: 'string' },
                        answer_list: {
                            type: "array",
                            items: {
                                type: "object",
                                required: [
                                    "text", 
                                    "correct"
                                ],
                                properties: {
                                    text: {
                                        type: "string",
                                    },
                                    correct: {
                                        type: "string"
                                    }
                                }

                            }

                        }
                    }
                }
            },
            response: {
                201: questionSchema
            }
        },
        createCompleteQuestion
    ),


    app.delete("/:id", deleteQuestionById),
    app.get("/all", getAllCompleteQuestions)
}


export {
    questionRoutes
}
