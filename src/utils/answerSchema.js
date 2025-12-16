const deleteAnswer = {
    route: {
        description: "Delete an answer",
        tags: ["Answers"]
    },
    response: {
        type: "string"
    }
}

const patchAnswer = {
    route: {
        description: "Update an answer",
        tags: ["Answers"],
        body: {
            type: "object",
            required: [
                "text"
            ],
            properties: {
                text: {
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
    deleteAnswer,
    patchAnswer
}