const inquirer = require("inquirer");
const fs = require("fs");
const generatorMarkdown = require("./utils/generateMarkdown.js");

const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "Username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "Email",
  },
  {
    type: "input",
    message: "What is your project's name?",
    name: "Title",
  },
  {
    type: "input",
    message: "Give me a short description of your project.",
    name: "Description",
  },
  {
    type: "input",
    message: "What do we need to install for this project.",
    name: "Installation",
  },
  {
    type: "input",
    message: "Why was this project created?",
    name: "Usage",
  },
  {
    type: "input",
    message: "What license did you use?",
    name: "License",
  },
  {
    type: "input",
    message: "What command do we need to run the test?",
    name: "Test",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile("./Produced-ReadME" + fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Success!");
  });
}

function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("README.md", generatorMarkdown(data));
  });
}

init();
