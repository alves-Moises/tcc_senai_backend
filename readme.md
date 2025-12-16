To install dependences: ```npm i```

To run: ```npm start```

# Questions's Routes

# post - /questions

``` body:
    {
        question: (question name),
        answers: [
            {
                text: (answer),
                correct: (correct/incorrect)
            },
            {
                text: (answer),
                correct: (correct/incorrect)
            },
            ...
        ]
    }
```

### get questions - ```/questions``` ( doesn't includes answers)

### get all questions - ```/questions/all``` ( includes answers)

### get Question by id - ```/questions/<id> ```

### delete question by id = ```/questions/<id>```

### update question by id = ```/questions/<id>``` ( pass question in body to update it) {question: (question here)}

# Answer's Routes

### delete answer by id = ```/answers/<id>```

### update answer by id = ``` /answers/<id> ``` ( pass text in body to update it) {text: (text here)}
