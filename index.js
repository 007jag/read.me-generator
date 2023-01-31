//packages for app
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require("./utils/generateMarkDown");

//array of questions for user input
const questions =[
    {
        type: 'input',
        name: 'title',
        message: 'Please give your project a name'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please Tell me what the Purpose and Functionality of this project.',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please pick a license that is applicable of this project',
        choices: ["MIT","APACHE2.0", "boost1.0", "MPL2.0", "BSD3","BSD2", "None"],
    },
    {
        type: "input",
        name: "require",
        message: "List any Project dependancies here.",
    },
    {
        type: 'input',
        name: "usage",
        message: "State the language or technologies associates with this project",
    },
    {
        type:"input",
        name:"creator",
        message: "Whats your GitHub username ?",

    },
    {
        type:"input",
        name:"name",
        message: "Whats your Full Name ?",
    },
    {
        type:"input",
        name:"email",
        message: "Whats your Email ?",
    },
    {
        type:"input",
        name:"contributers",
        message: "who worked on this project (use GitHub Usernames) ?",
        default: "",
    },
    {
        type:"input",
        name:"test",
        message: "Provide walkthrough of required tests if applicable",
    },

    
];


// Initializing app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating Professional README.md File...");
    writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
  });
}
// writing read.me file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}



init();