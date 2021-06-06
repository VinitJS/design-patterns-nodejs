const Logger = require("./singleton-logger")

const logger = new Logger().getInstance();

class Item {
    constructor(name) {
        this._name = name
        logger.log(`Item named ${name} created.`, new Date());
    }
}

module.exports = Item;