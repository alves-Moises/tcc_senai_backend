import { v4 } from "uuid";
import {db} from "../database/connection.js"


const getAllQuestions = async () => {
    const questionList = await db.query("select  *  from questions")
    return questionList
}


const createQuestion = async (question) => {
    const QuestionID = v4()
    const QuestionQuery = `
        insert into questions
        (question_id, question)
        values
        (?, ?);
    `
    
        await db.query(
        QuestionQuery, 
        [
            QuestionID,
            question
        ]
    )

    return {
        id: QuestionID,
        question: question
    }

}
export { getAllQuestions, createQuestion }

