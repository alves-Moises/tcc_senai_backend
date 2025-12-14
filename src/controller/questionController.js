import { createQuestion, getAllQuestions } from "../services/questionServices.js"


const listQuestions = async (req, res) => {
    const [questionList] = await getAllQuestions()
    return res.send(questionList)
}

const listCompleteQuestions = async () => {
    const questionList = await getAllQuestions()
    return questionList
}

const addQuestion = async (question) => {
    const CreatedQuestion = await createQuestion(question)
    return CreatedQuestion
}

export { 
    listQuestions,
    listCompleteQuestions,
    addQuestion
}