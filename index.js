//packages for app
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require("./utils/generateMarkDown");

//array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please give your project a name",
  },
  {
    type: "input",
    name: "description",
    message: "Please Tell me what the Purpose and Functionality of this project.",
  },
  {
    type: "input",
    name: "screenshot",
    message: "Please provide the relative path to the image you want to use as the screenshot."
  },
  {
    type: "input",
    name: "link",
    message: "Please provide a URL where a user can access your deployed application."
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please pick a license that is applicable for this project",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
  },
  {
    type: "input",
    name: "require",
    message: "List project dependencies here.",
  },
  {
    type: "input",
    name: "features",
    message: "List features about this project here.",
  },
  {
    type: "input",
    name: "usage",
    message:
      "State the languages or technologies associated with this project.",
  },
  {
    type: "input",
    name: "creator",
    message: "Tell me your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "whats your email address ?",
  },
  {
    type: "input",
    name: "contributors",
    message: "who worked on this project (use GitHub Usernames) ?",
    default: "",
  },
  {
    type: "input",
    name: "test",
    message: "are there any required tests.",
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