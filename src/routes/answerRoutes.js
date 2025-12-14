import { deleteAnswerById, updateAnswerById } from "../controller/answerController.js"

const anwserRoutes = async (app, opt) => {
    app.delete("/:id", deleteAnswerById),
    app.patch("/:id", updateAnswerById)
}

export { anwserRoutes }