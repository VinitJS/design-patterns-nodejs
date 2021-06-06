const { Manager, Engineer, Vendor } = require("./profiles");

function factory(profile, name, company, responsibility, floor=0) {
    switch (profile) {
        case "manager":
            return new Manager(name, company, responsibility);
        case "engineer":
            return new Engineer(name, company, responsibility, floor);
        case "vendor":
            return new Vendor(name); 
        default:
            break;
    }
}

module.exports = factory;