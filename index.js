// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const readMeMaker = require('./utils/generateMarkdown')

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
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How can you utilize your work?: ',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Who contributed to your work?: ',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Who can test your work?: ',
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
    .then(data => {
        writeToFile("README.md",data)
    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, readMeMaker(data), (err) =>
    err ? console.log(err) : console.log("Success!"))
}


