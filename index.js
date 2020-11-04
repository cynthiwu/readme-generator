const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown")

// Array of questions for user //
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
        message: "What TECHNOLOGIES did you use to build the project?",
        name: "built-with",
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
            {name: "GNU AGPLv3", value: "AGPL%20v3-blue"},
            {name: "GNU GPLv3", value: "GPLv3-blue"},
            {name: "GNU LGPLv3", value: "LGPL%20v3-blue"},
            {name: "Mozilla Public 2.0", value: "MPL%202.0-brightgreen"},
            {name: "Apache 2.0", value: "Apache%202.0-blue"},
            {name: "MIT",value: "MIT-yellow"},
            {name: "Boost Software 1.0", value: "Boost%201.0-lightblue"},
            {name: "The Unlicense", value: "Unlicense-blue"},
            "None",
        ],
    },
    {
        type: "input",
        message: "What is your GitHub username? (Do NOT include '@')",
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

// function to write README file //
function writeToFile(fileName, data) {

    return fs.writeFileSync(path.join("./created", fileName), data, err => {
        if (err) {
            console.log(err);
            return
        }
    });

}

// function to initialize program //
function init() {
    inquirer.prompt(questions).then(response => {
        console.log(response);
        writeToFile("README.md", generateMarkdown(response));
      
    })
}

init();

