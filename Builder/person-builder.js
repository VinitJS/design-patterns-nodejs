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
        this.diseases = Array.from(arguments);
        return this;
    }

    build() {
        return new Person(this);
    }
}

module.exports = PersonBuilder;