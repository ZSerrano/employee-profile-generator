const Employee = require('./employee');

class Engineer extends Employee {
    constructor(github) {
        super(this.name, this.id, this.email)
        this.github = github;
    }

    getGithub() {
        
    }

    getRole() {
        console.log('Engineer');
    }
}

module.exports = Engineer;