import { v4 } from "uuid";
import { db } from "../database/connection.js";

// const getAnswerList = async

const createAnswer = async ( 
    QuestionId,
    { 
        text, 
        correct 
    } 
) => {
    const id = v4()
    const query = `
        insert into answers
        (answer_id, text, question_id, correct)
        values
        ( ?, ?, ?, ?);
    `
    
    await db.query(
        query,
        [    
            id, 
            text, 
            QuestionId,
            correct
        ]
    )
    const data = await {
        id: id,
        text: text, 
        correct: correct,
    }

    return data
}

const getAllAnswersByQuestion = async (
    questionId
) => {
    const query = `
        select * from answers where question_id = '${questionId}';
    `

    const AnswerList = await db.query(query)
    return AnswerList
}


export {
    createAnswer
}