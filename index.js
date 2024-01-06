// Included the necessary packages for this repository
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
// Generate markdown to be used in separate JS file to generate README file
const generateMarkdown = require('./utils/generateMarkdown');
// Created an array of questions for user input
const questions = [
    // First six questions require direct user input for describing the project
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide instructions on how to install your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions on how to use your project.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide instructions on how others can contribute to your project.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide instructions on what tests to create and run for your project.',
    },
    // For license types, create a list to limit potential answers and allow for license badge display option
    {
        type: 'list',
        name: 'license',
        message: 'What type of license is this project covered under?',
        choices: ['None','Apache License 2.0','GNU General Public License v3.0','MIT License','BSD 2-Clause "Simplified" License','BSD 3-Clause "New" or "Revised" License','Boost Software License 1.0','Creative Commons Zero v1.0 Universal','Eclipse Public License 1.0','GNU Affero General Public License v3.0','GNU General Public License v2.0','Mozilla Public License 2.0','The Unlicense'],
    },
    // Ask for user's GitHub and email accounts
    {
        type: 'input',
        name: 'gitHub',
        message: 'Please enter your GitHub username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
    },


];

// Created a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// Created a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    // The user input data is passed into the generate markdown text
    .then((data) => {
        writeToFile('Generated_README.md', generateMarkdown({
            ...data
        }))
    })
}

// Function call to initialize app
init();
