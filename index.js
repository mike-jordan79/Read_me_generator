const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdownFile = require("./utils/markdownfile.js");

// Questions needed to satisfy User Story: Description, Installation, Usage, License, Contributing, and Tests
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "What is the title of this project?",
  },
  {
    type: "input",
    name: "projectDescription",
    message: "Please describe this project.",
  },
  {
    type: "input",
    name: "installationSteps",
    message: "Please describe installation steps for the application.",
  },
  {
    type: "input",
    name: "projectUsage",
    message: "What is the proposed usage for this project?",
  },
  {
    type: "input",
    name: "howToContribute",
    message: "Please describe how others can contribute to your project?",
  },
  {
    type: "input",
    name: "testsForProject",
    message: "Describe tests of your application.",
  },
  {
    type: "list",
    name: "projectLicense",
    message: "What license would you like to use?",
    choices: ["MIT", "Apache", "ISC", "CC0"],
  },
  {
    type: "input",
    name: "gitUsername",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// FIX THIS PART
// TODO: Create a function to write README file. This function is modeled from exercise 13 week 9
function writeToFile(data) {
  fs.writeFile("README.md", generateMarkdownFile(data), (err) =>
    err ? console.error(err) : console.log("Done")
  );
}

// TODO: Create a function to initialize app. Uses inquirer prompt
function init() {
  inquirer.prompt(questions).then((response) => {
    writeToFile(response);
  });
}

// Function call to initialize app
init();
