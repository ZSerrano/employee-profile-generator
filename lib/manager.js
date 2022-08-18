const Employee = require('./employee');

class Manager extends Employee {
    constructor(officeNumber) {
        super(this.name, this.id, this.email)
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        console.log(this.officeNumber);
    }

    getRole() {
        console.log('Manager');
    }
}

module.exports = Manager;