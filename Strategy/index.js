const Logger = require("./logger");

const logger = new Logger();
logger.log("Hello");
logger.log("How are you?");
logger.changeStrategy("toFile");
logger.log("Let's start over.");
logger.log("Hello");
logger.log("How are you?");
logger.changeStrategy("none");
logger.log("One last time.");
logger.log("Hello");
logger.log("How are you?");
