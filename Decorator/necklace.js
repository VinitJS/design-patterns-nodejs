class Item {
    constructor(_name, _price) {
        this._name = _name;
        this._price = _price;
    }

    get name() {
        return this._name;
    }

    get price() {
        return this._price;
    }

    print() {
        console.log(`Price of ${this.name} is ${this._price}`);
    }
}

class GoldItem {
    constructor(item) {
        this._name = "Gold "+item.name;
        this._price = item.price + 1000;
    }

    get name() {
        return this._name;
    }

    get price() {
        return this._price;
    }

    print() {
        console.log(`Price of ${this.name} is ${this._price}`);
    }
}

class DiamondItem {
    constructor(item) {
        this._name = "Diamond "+item.name;
        this._price = item.price + 3000;
        this._cutsGlass = true;
    }

    get name() {
        return this._name;
    }

    get price() {
        return this._price;
    }

    get cutsGlass() {
        return this.cutsGlass;
    }

    print() {
        console.log(`Price of ${this.name} is ${this._price}`);
    }
}

module.exports = { Item, GoldItem, DiamondItem };