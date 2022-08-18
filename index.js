const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager')

// Utilize inquirer to gather input information from user
const initialPrompt = () => {
    return inquirer.prompt([
        {
            type: 'checkbox',
            message: 'What type of employee are you creating?',
            name: 'initial',
            choices: ['Manager', 'Engineer', 'Intern'], 
        }
    ])}; 


const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the employee?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the id number for the employee?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the email address for the employee?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the office number of the manager?',
            name: 'officeNumber',
        }
    ])
}

const engineerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the employee?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the id number for the employee?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the email address for the employee?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the link to the github profile of the engineer?',
            name: 'github',
        },
    ])
}

const internPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the employee?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the id number for the employee?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the email address for the employee?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What school does the intern attend?',
            name: 'school',
        },
    ])
}

const managerHTML = ({name, email, id, officeNumber}) =>
`<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Employee Profiles</title>
    <link rel="reset" href="./reset.css">
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <header>
        My Team
    </header>

    <div class="jumbotron jumbotron-fluid">
    <div class="container">
        <h1 class="name">Name: ${name}</h1>
        <h1 class="position>Position: Manager</h1>
        <h2 class="email">Email: ${email}</h2>
        <h2 class="id">ID: ${id}</h2>
        <h2 class="officeNumber">Office Number: ${officeNumber}</h2>
        
  </body>
  </html>`;

const engineerHTML = ({name, email, id, github}) =>
`<div class="container">
<h1 class="name">Name: ${name}</h1>
<h1 class="position>Position: Engineer</h1>
<h2 class="email">Email: ${email}</h2>
<h2 class="id">ID: ${id}</h2>
<h2 class="github">Github: ${github}</h2>
`;

const internHTML = ({name, email, id, school}) =>
`<div class="container">
<h1 class="name">Name: ${name}</h1>
<h1 class="position>Position: Intern</h1>
<h2 class="email">Email: ${email}</h2>
<h2 class="id">ID: ${id}</h2>
<h2 class="github">School: ${school}</h2>
`;

const init = () => {
    initialPrompt()
    .then(answer => {
        if(answer === 'Manager') {
            managerPrompt();
        } else if (answer === 'Engineer') {
            engineerPrompt();
        } else if (answer === 'Intern') {
            internPrompt();
        }
    })
    .catch((err) => console.error(err));
}

init();