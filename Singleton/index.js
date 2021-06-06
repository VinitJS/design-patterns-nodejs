// node Singleton/index.js

const Item = require("./item");
const Logger = require("./singleton-logger");

const logger = new Logger().getInstance();

logger.log("Starting application.", new Date());

console.log(logger.count());
logger.list();

const item = new Item("chocolate");

console.log(logger.count());
logger.list();