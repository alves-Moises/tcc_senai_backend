const postQuestion = {
    route: {
        description: 'Crete a new question',
        tags: ['Questions'],
        body: {
            type: 'object',
            required: [
                'question', 
                'answer_list'
            ],
            properties: {
                question: { 
                    type: 'string' 
                },
                answer_list: {
                    type: "array",
                    items: {
                        type: "object",
                        required: [
                            "text", 
                            "correct"
                        ],
                        properties: {
                            text: {
                                type: "string",
                            },
                            correct: {
                                type: "string"
                            }
                        }
                    }
                }
            }
        }
    },
    response: {
        type: 'object',
        required: [
            'question', 
            'answer_list'
        ],
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
}

const getAllQuestions = {
    route: {
        description: "Get all questions with response",
        tags: ["Questions"]
    },
    response: {
        body: {
            type: "array",
            items: {
                type: "object",
                required: [
                    "question",
                    "answers",
                    "created_at",
                    "midified_at"
                ],
                properties: [
                    {
                        question: {
                            type: "string"
                        },
                        created_at: {
                            type: "string"
                        },
                        modified_at: {
                            type: "string"
                        },
                        answers: {
                            type: "array",
                            items: {
                                type: "object",
                                required: [
                                    "answer_id",
                                    "text",
                                    "question_id",
                                    "correct"
                                ],
                                properties: [
                                    {
                                        ansers_id: {
                                            type: "string"
                                        }
                                    },
                                    {
                                        text: {
                                            type: "string"
                                        }
                                    },
                                    {
                                        question_id: {
                                            type: "string"
                                        }
                                    },
                                    {
                                        correct: {
                                            type: "string"
                                        }
                                    }
                                ]
                                
                            }

                        }
                    }
                ]
            }
        }
    }
}

const  deleteQuestion = {
    route: {
        description: "Delete a question",
        tags: ["Questions"]
    },
    response: {
        type: "string"
    }
}

const getQuestions = {
    route: {
        description: "Get question list",
        tags: ["Questions"]       
    },
    response: {
        type: "array",
        items: {
            type: "object",
            required: [
                "question_id",
                "question",
                "created_at",
                "modified_at"
            ],
            properties: [
                { 
                    question_id: {
                        type: "string"
                    }
                },
                { 
                    question: {
                        type: "string"
                    }
                },
                { 
                    created_at: {
                        type: "string"
                    }
                },
                { 
                    modified_at: {
                        type: "string"
                    }
                }
            ],
            
        }
    }
    
}

const getQuestion = {
    route: {
        description: "Get a question by id...",
        tags: ["Questions"]
    },
    response: {
        type: "object",
        required: [
            "question_id",
            "question",
            "created_at",
            "modified_at"
        ],
        properties: [
            { 
                question_id: {
                    type: "string"
                }
            },
            { 
                question: {
                    type: "string"
                }
            },
            { 
                created_at: {
                    type: "string"
                }
            },
            { 
                modified_at: {
                    type: "string"
                }
            }
        ],
    }
}

const patchQuestion = {
    route : {
        description: "Update a question's text",
        tags: ["Questions"],
        body: {
            type: "object",
            required: [
                "question"
            ],
            properties: {
                question: {
                    type: "string"
                }
            }
        }
    },
    response: {
        type: "string"
    }
}

export {
    postQuestion,
    deleteQuestion, 
    getQuestions,
    getQuestion,
    getAllQuestions,
    patchQuestion
}
