//packages for app
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require("./untils/generateMarkDown");

//array of questions for user input
const questions =[
    {
        type: 'input',
        name: 'title',
        message: 'Please give your project a name'
    },
    
]