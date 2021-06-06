class Store {
    constructor(name) {
        this._name = name;
        this._subscribers = [];
        this._discount = 0;
    }

    subscribe(shopper) {
        this._subscribers.push(shopper);
    }

    announce() {
        this._subscribers.forEach(s => s.notify(this._name, this._discount));
    }

    setSale(discount) {
        this._discount = discount;
        this.announce();
    }
}

module.exports = Store;