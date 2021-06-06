class Store {
    constructor(name) {
        this._name = name;
        this._subscribers = [];
        this._discount = 0;
    }

    subscribe(observer) {
        this._subscribers.push(observer);
    }

    announceSale() {
        this._subscribers.forEach(s => s.notify(this._name, this._discount));
    }

    setSale(discount) {
        this._discount = discount;
        this.announceSale();
    }
}

module.exports = Store;