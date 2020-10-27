const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const generateMarkdown = require("./utils/generateMarkdown")

// Array of questions for user. 
const questions = [
    {
        type: "input",
        message: "What is the Project Title?",
        name: "title",
    },

    {
        type: "list",
        message: "Select a license.",
        name: "license",
        choices: [
            "MIT",
            "Apache 2.0",
            "GPL 3.0",
            "None",
        ]
    }

];

// function to write README file. Will be specifiying where this goes. 
function writeToFile(fileName, data) {

    return fs.writeFileSync(path.join(__dirname, fileName), data);

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
