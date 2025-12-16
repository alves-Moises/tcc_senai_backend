import { deleteAnswerById, updateAnswerById } from "../controller/answerController.js"

const anwserRoutes = async (app, opt) => {
    app.delete(
        "/:id", 
        {
            schema: deleteAnswer.route,
            response: {
                200: deleteAnswer.response 
            }
        },
        deleteAnswerById
    ),
    
    app.patch(
        "/:id", 
        updateAnswerById
    )
}

export { anwserRoutes }