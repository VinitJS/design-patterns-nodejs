class Manager {
    constructor(name, company, responsibility) {
        this._name = name;
        this._company = company;
        this._responsibility = responsibility;
    }
    
    print() {
        console.log(`${this._name}: ${this._company}: ${this._responsibility}`);
    }
}

class Engineer {
    constructor(name, company, responsibility, floor) {
        this._name = name;
        this._company = company;
        this._responsibility = responsibility;
        this._floor = floor;
    }

    print() {
        console.log(`${this._name}: ${this._company}: ${this._responsibility}: ${this._floor}`);
    }
}

class Vendor {
    constructor(name) {
        this._name = name;
    }
    
    print() {
        console.log(`${this._name}`);
    }
}

module.exports = {
    Manager,
    Engineer,
    Vendor
}