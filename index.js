// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const readmemaker = require('./utils/readmemaker')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your work?: ',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is a description of your work?: ',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How do you install your work?: ',
        name: 'installtion',
    },
    {
        type: 'input',
        message: 'How can you utilize your work?: ',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Who contributed your work?: ',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Who can you test your work?: ',
        name: 'testing',
    },
    {
        type: 'input',
        message: 'What is your Github username?: ',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What are links to your work?: ',
        name: 'links',
    },

];

inquirer
    .prompt(questions)
    .then(data)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, readmemaker(data), (err) =>
    err ? console.log(err) : console.log("Success!"))
}

// TODO: Create a function to initialize app
function init() {
    writeToFile("readme",data)
}
// Function call to initialize app
init();
