import { 
    createAnswer, 
    deleteAnswer, 
    getAllAnswersByQuestion, 
    updateAnswer
} from "../services/answerServices.js"

const getAnswerByQuestionId = async (id) => {
    const answerList = await getAllAnswersByQuestion(id)
    return answerList
}


const newAnswer = async (answerItem, QuestionId) => {
    const Answer = await createAnswer(QuestionId, answerItem)
    return {Answer}
}

const deleteAnswerById = async (req, res) => {
    const removed = await deleteAnswer(req.params.id)

    if(removed.affectedRows == 0){
        res.code(404).send("Answer doesn't exist!")
    }
    res.code(200).send("Answer deleted successfull")
}

const updateAnswerById = async (req, res) => {
    const id = req.params.id
    const text = req.body.text

    const result = await updateAnswer(
        id, 
        text
    )
    if(result.affectedRows == 0){
        return res.status(404).send("Answer doesn't exist...")
    }

    return res.status(200).send("Update successfull")
}

export {
    newAnswer,
    getAnswerByQuestionId,
    deleteAnswerById,
    updateAnswerById
}