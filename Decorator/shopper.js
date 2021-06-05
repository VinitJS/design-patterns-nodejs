class Shopper {
    constructor(_name, _money) {
        this._name = _name;
        this._money = _money;
        this._possessions = [];
    }

    get name() {
        return this._name;
    }

    get money() {
        return this._money;
    }

    get possesssions() {
        return this._possessions;
    }

    purchase(item) {
        this._possessions.push(item.name)
        this._money = this._money - item.price;
    }

    print() {
        console.log(`${this._name} has ${this._money} rupees and ${this._possessions}.`);
    }
}

module.exports = Shopper;