const Employee = require('./employee');

class Manager extends Employee {
    constructor(officeNumber) {
        super(this.name, this.id, this.email)
        this.officeNumber = officeNumber;
    }

    getRole() {
        console.log('Manager');
    }
}

module.exports = Manager;