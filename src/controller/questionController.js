import { 
    createQuestion, 
    deleteQuestion, 
    getAllQuestions, 
    getQuestion,
    updateQuestion
} from "../services/questionServices.js"

// requested directly by route
const listQuestions = async (req, res) => {
    const [questionList] = await getAllQuestions()
    return res.send(questionList)
}

//requested by generalContoller
const listCompleteQuestions = async () => {
    const questionList = await getAllQuestions()
    return questionList
}

const getQuestionByID = async (req, res) => {
    const question = await getQuestion(req.params.id)

    return question
}

const addQuestion = async (question) => {
    const CreatedQuestion = await createQuestion(question)
    return CreatedQuestion
}

const deleteQuestionById = async (req, res) => {
    const removed = await deleteQuestion(req.params.id)

    if(removed.affectedRows == 0){
        return res.code(404).send("Question does not exist!")
    }
    return res.status(200).send(`Deleted successful.`)
}

const updateQuestionById = async (req, res) => {
    const id = req.params.id
    const question = req.body.question

    const result = await updateQuestion(id, question)
    if(result.affectedRows == 0){
        return res.status(404).send("Question id doesn't exist...")
    }

    return res.status(200).send("Update successful")
}

export { 
    listQuestions,
    listCompleteQuestions,
    getQuestionByID,
    updateQuestionById,
    addQuestion,
    deleteQuestionById
}