// node builder/index.js

const PersonBuilder = require("./person-builder");

let bill = new PersonBuilder("Bill").setProfile("staff").addDesignation("doctor").build();
bill.print();
let jill = new PersonBuilder("Jill").setProfile("staff").addDesignation("nurse", 60).build();
jill.print();
let mill = new PersonBuilder("Mill").setProfile("patient").hasDiseases("Diabetes").build();
mill.print();