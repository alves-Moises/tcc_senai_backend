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
        {
            schema: patchAnswer.route,
            response: {
                200: patchAnswer.response
            }
        }, 
        updateAnswerById
    )
}

export { anwserRoutes }