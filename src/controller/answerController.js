import { createAnswer } from "../services/answerServices.js"

const getAnswerList = async() => {
    
}
const newAnswer = async (answerItem, QuestionId) => {
    const Answer = await createAnswer(QuestionId, answerItem)
    return {Answer}
}

export {newAnswer}