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

export {
    newAnswer,
    getAnswerByQuestionId
}