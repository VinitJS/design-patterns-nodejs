const Shopper = require("./shopper");
const Store = require("./store");

const bb = new Store("Biny & Bony");

const vinit = new Shopper("Vinit");
bb.subscribe(vinit);

const harshita = new Shopper("Harshita");
bb.subscribe(harshita);

bb.setS
bb.setSale(20);