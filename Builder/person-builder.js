const Person = require("./person");

class PersonBuilder {
    constructor(name) {
        this.name = name;
    }

    setProfile(profile) {
        this.profile = profile;
        return this;
    }

    addDesignation(designation = "nurse", workingHours = 40) {
        this.designation = designation;
        this.workingHours = workingHours;
        return this;
    }

    hasDiseases() {
        /*
        * 4 Ways to get arguments in array:
        * var args = Array.prototype.slice.call(arguments);
        * var args = [].slice.call(arguments);
        * let args = Array.from(arguments);
        * let args = [...arguments];
        */
        this.diseases = Array.from(arguments);
        return this;
    }

    build() {
        return new Person(this);
    }
}

module.exports = PersonBuilder;