const Employee = require('./employee');

class Intern extends Employee {
    constructor(school) {
        super(this.name, this.id, this.email)
        this.school = school;
    }

    getSchool() {
        
    }

    getRole() {
        console.log('Intern');
    }
}

module.exports = Intern;