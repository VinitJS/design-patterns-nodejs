const logger = require("./singleton-logger")

class Item {
    constructor(name) {
        this._name = name
        logger.log(`Item named ${name} created.`, new Date());
    }
}

module.exports = Item;