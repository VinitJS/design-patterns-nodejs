const factory = require("./factory");

// node Factory/index.js

const vinit = factory("engineer", "Vinit", "CVFY", "Design Solutions", 1);
vinit.print();

const harshita = factory("manager", "Harshita", "Salesforce", "Manage Project");
harshita.print();

const priyanka = factory("vendor", "Priyanka");
priyanka.print();