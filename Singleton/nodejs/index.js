//node Singleton/nodejs/index.js

const Item = require("./item");
const logger = require("./singleton-logger");

logger.log("Starting application.", new Date());

console.log(logger.count());
logger.list();

const item = new Item("chocolate");

console.log(logger.count());
logger.list();