class Inventoryitem {
    constructor(name, price) {
        this._name = name;
        this._price = price;
    }

    writeLn() {
        process.stdout.write(`${this._name} - ${this._price}`);
    }
}

module.exports = Inventoryitem;