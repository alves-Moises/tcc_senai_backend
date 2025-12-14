import { 
    createAnswer, 
    getAllAnswersByQuestion 
} from "../services/answerServices.js"

const getAnswerList = async() => {
    
}

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

export {
    newAnswer,
    getAnswerByQuestionId
}