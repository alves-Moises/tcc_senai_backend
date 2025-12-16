import { 
    getAnswerByQuestionId, 
    newAnswer
} from "./answerController.js"
import { 
    addQuestion, 
    listCompleteQuestions 
} from "./questionController.js"
import chalk, { colorNames } from "chalk"
const bgWhite = chalk.bgWhite
const green = chalk.green

const createCompleteQuestion = async (req, res) => {
    const Question = req.body.question
    const AnswerList = req.body.answer_list

    const {id, question} =  await addQuestion(Question)
    await AnswerList.forEach(
        async answerItem => {
            newAnswer(answerItem, id)
        }
    )

    const QuestionData = await {
        "question": question,
        "answer_list": AnswerList
    }
    return res.code(201).send([QuestionData])
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

    const resolved = await Promise.all(questionListComplete)
    return res.code(200).send(resolved)
}

export {
    createCompleteQuestion,
    getAllCompleteQuestions

}