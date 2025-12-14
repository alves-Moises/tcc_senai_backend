import { newAnswer } from "./answerController.js"
import { addQuestion } from "./questionController.js"


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
    const QuestionData = {
        "question": question,
        "answer_list": AnswerData
    }
    return res.code(201).send(QuestionData)
}

export {createCompleteQuestion}