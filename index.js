const inquirer = require('inquirer');
const fs = require('fs');
// const { stringify } = require('querystring');

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log('Success!')
    );

}



// function to initialize program
function init() {
    inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the Project Title?',
        name: 'projectTitle',
      },
      {
        type: 'input',
        message: 'Please describe your project',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Installation Instructions',
        name: 'Installation',
      },
      {
        type: 'input',
        message: 'What is this app used for?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Contributors',
        name: 'contributorName',
      },
      {
        type: 'input',
        message: 'Test Instructions',
        name: 'testInstructions',
      },
      {
        type: 'list',
        message: 'Specify License',
        name: 'License',
        choices: ['MIT', 'apache', 'GPL'],
      },

      
    ])
    .then((response) =>{
        console.log(response)
        writeToFile("Readme.md", JSON.stringify(response))
        }
    );
}

// function call to initialize program
init();
