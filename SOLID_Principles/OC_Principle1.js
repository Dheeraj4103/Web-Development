class Boolean {
    constructor(description) {
        this.description = description;
    }

    printOptions = () => {
        console.log('1. True');
        console.log('2. False');
    }
};

class MultipleChoise {
    constructor(description, options) {
        this.description = description;
        this.options = options;
    }

    printOptions = () => {
        this.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
        });
    }
}

class Descriptive{
    constructor(description) {
        this.description = description;
    }

    printOptions = () => {
        console.log('Answer:_________');
    }
}

function printQuizOptions(questions) {
    questions.forEach((question) => {
        console.log(question.description);
        question.printOptions();
        console.log('');
    });
}

const questions = [
    new Boolean('Is this statement true or false ?'),
    new MultipleChoise('What is your favorite language ?', ['HTML', 'CSS', 'JS', 'Python']),
    new Descriptive('Describe your favorite concept of JS.')
];

printQuizOptions(questions);