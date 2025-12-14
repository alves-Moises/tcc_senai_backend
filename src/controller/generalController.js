import { 
    getAnswerByQuestionId, 
    newAnswer
} from "./answerController.js"
import { 
    addQuestion, 
    listCompleteQuestions 
} from "./questionController.js"


const createCompleteQuestion = async (req, res) => {
    const Question = req.body.question
    const AnswerList = req.body.answer_list
    console.log(AnswerList)

    const {id, question} =  await addQuestion(Question)
    var AnswerData = []

    AnswerList.forEach(
        async answerItem => {
            const  data = await newAnswer(answerItem, id)
            console.log(data)
            AnswerData = [...AnswerData, data]
        }
    )
    console.log(AnswerData)
    const QuestionData = await {
        "question": question,
        "answer_list": AnswerData
    }
    return res.code(201).send(QuestionData)
}

const getAllCompleteQuestions = async (req, res) => {
    const [questionList] = await listCompleteQuestions()
    const questionListComplete = await questionList.map(
        async (
            {
                question_id, 
                question
            }
        ) => {
            const questText = question
            const answerList = await getAnswerByQuestionId(question_id) 
            const resolvedList = await Promise.all(answerList)

            const data = {
                question: questText,
                answers: resolvedList[0]
            }
            return data
        }
    )
    return res.code(200).send(questionListComplete)
}

export {
    createCompleteQuestion,
    getAllCompleteQuestions

}