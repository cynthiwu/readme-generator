const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown")

// Array of questions for user. 
const questions = [
    {
        type: "input",
        message: "What is the PROJECT TITLE?",
        name: "title",
    },
    {
        type: "input",
        message: "How would you DESCRIBE the project?",
        name: "description",
    },
    {
        type: "input",
        message: "How do you INSTALL the project?",
        name: "installation",
    },
    {
        type: "input",
        message: "How do you USE the project?",
        name: "usage",
    },
    {
        type: "input",
        message: "What is the file path for your demo GIF?",
        name: "demo",
    },
    {
        type: "input",
        message: "List out the technologies used to build this project.",
        name: "builtwith",
    },
    {
        type: "input",
        message: "How can developers CONTRIBUTE to the project?",
        name: "contribution",
    },
    {
        type: "input",
        message: "How can developers run necessary TESTS?",
        name: "tests",
    },
    {
        type: "list",
        message: "Select a license to cover your project.",
        name: "license",
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Mozilla Public 2.0",
            "Apache 2.0",
            "MIT",
            "Boost Software 1.0",
            "The Unlicense",
            "None",
        ]
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is the URL for the project repository?",
        name: "respository",
    },
    {
        type: "input",
        message: "What is the URL to view the project live?",
        name: "live",
    },

];

// function to write README file. Will be specifiying where this goes. 
function writeToFile(fileName, data) {

    return fs.writeFileSync(path.join("./created", fileName), data);

}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(response => {
        console.log(response);
        writeToFile("README.md", generateMarkdown(response));
    })
}

// function call to initialize program
init();
