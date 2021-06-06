class Shopper {
    constructor(name) {
        this._name = name;
    }

    notify(storeName, discount) {
        console.log(`New message for ${this._name}: ${discount}% discount at ${storeName}`);
    }
}

module.exports = Shopper;