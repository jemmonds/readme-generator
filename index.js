const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [    {
  type: "input",
  name: "title",
  message: "What do you want the title of your project to be? "
},
{
type: "input",
name: "description",
message: "Write a description for your project? "
},
{
  type: "input",
  name: "installation",
  message: "What needs to be installed to be able to run this program?",
  },
  {
    type: "input",
    name: "usage",
    message: "How should this be used?",
    },
    {
      type: "list",
      name: "License",
      message: "Which license would you like to use?",
      choices: ["MIT License","GNU","BSD-2-Clause","Boost Software"],
  },

  {
    type: "input",
    name: "contributions",
    message: "Are you open to contributions?",
},
];


// function to write README file
function writeToFile(fileName, data) {
}
// function to initialize program
function init() {
    inquirer.prompt(questions) .then((answers) => {
      const exampleFile = `<div> ${answers.title} </div> <div> ${answers.description} </div> <div> ${answers.installation} </div> <div> ${answers.installation}</div> <div> ${answers.usage} </div> <div> ${answers.License} </div>`;

      fs.writeFile("log.html", exampleFile, (err) => err ? console.log(err) : console.log("Success!"));
  }
  );
}
// function call to initialize program
init();