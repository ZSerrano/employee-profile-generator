const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager')

// Utilize inquirer to gather input information from user
inquirer 
    .prompt([
        {
            type: '',
            message: '',
            name: '' 
        }
    ]) 
// Write a .then method to return the input data into an employees.json file to store information

// Classes can be used to pull their information from the employees.json file





// Create a card to hold all employee information
// Create heading to hold employee position
// Create text body to hold employee data
// Append heading and text body to card
// Append card to html in specific div