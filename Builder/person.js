class Person {
    constructor(builder) {
        this.name = builder.name;
        this.profile = builder.profile || "patient";
        this.designation = builder.designation;
        this.workingHours = builder.workingHours || 0;
        this.diseases = builder.diseases || [];
    }

    toString() {
        return JSON.stringify(this);
    }

    print() {
        console.log(this.toString());
    }
}

module.exports =  Person;