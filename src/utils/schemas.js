const questionSchema = {
    type: 'object',
    required: ['question', 'answer_list'],
    properties: {
        question: { type: 'string' },
        answer_list: [
            {
                text: {type: "string"},
                correct: {type: "string"}
            }
        ]
    }
}

export {
    questionSchema
}