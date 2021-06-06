class Shopper {
    constructor(name) {
        this._name = name;
        this._possessions = [];
    }
    
    get name() {
        return this._name;
    }

    get possessions() {
        return this._possessions;
    }

    possesses(itemName) {
        this._possessions.push(itemName);
    }

    clone(name) {
        const proto = Object.getPrototypeOf(this);
        const cloned = Object.create(proto);
        cloned._name = name || this._name;
        cloned._possessions = [...this._possessions];
        return cloned;
    }
}

module.exports = Shopper;