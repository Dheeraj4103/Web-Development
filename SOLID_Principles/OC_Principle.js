
// let's say we are given quiz type like boolean, multiple choice etc.
// we have to print it's options

function printQuizOptions(questions) {
    questions.forEach(question => {
        console.log(question.description);
        switch (question.type) {
            case 'boolean':
                console.log('1. True');
                console.log('2. False');
                break;
            
            case 'multipleChoice':
                question.options.forEach((option, index) => {
                    console.log(`${index + 1}. ${option}`);
                });
                break;
            
            case 'descriptive':
                console.log("Answer:____________");
                break;
            
        }
        console.log('')
    });
};

questions = [
    {
        type: "boolean",
        description: "Is this statement true or false ?"
    },
    {
        type: "multipleChoice",
        description: "What is your favorite language ?",
        options: ['HTML', 'CSS', 'JS', 'Python']
    },
    {
        type: 'descriptive',
        description: 'Describe your favorite concept of JS.'
    }
]

printQuizOptions(questions);