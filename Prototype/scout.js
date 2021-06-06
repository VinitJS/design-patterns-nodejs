const Shopper = require("./shopper");

const scout = new Shopper();
scout.possesses("Camping Bed");
scout.possesses("Tent");
scout.possesses("Backpack");
scout.possesses("Map");

module.exports = scout;