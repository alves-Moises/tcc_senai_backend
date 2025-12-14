import { v4 } from "uuid";
import {db} from "../database/connection.js"


const getAllQuestions = async () => {
    const questionList = await db.query("select * from questions;")
    return questionList
}

const getQuestion = async (id) => {
    const query = "select  * from questions where question_id = ?"
    const Question = await db.query(query, [id])
    
    return Question
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

const deleteQuestion = async (id) => {
    const query = `
        delete from questions
        where question_id = '${id}'
    `

    const [data] = await db.query(query)
    return data
}

const updateQuestion = async (id, question) => {
    const query = `
        update questions
        set question = ?
        where question_id = ?
    `
    const [result] = await db.query(
        query, 
        [
            question,
            id
        ]
    )

    return result
}




export { 
    getAllQuestions, 
    createQuestion 
}

