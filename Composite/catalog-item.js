class CatalogItem {
    constructor(_name, _price = 0) {
        this._name = _name;
        this._price = _price;
    }

    get name() {
        return this._name;
    }

    get price() {
        return this._price;
    }

    set name(_name) {
        this._name = _name;
    }

    set price(_price = 0) {
        this._price = _price;
    }

    print() {
        console.log("::",this._name, ": ", this._price);
    }
}

module.exports = CatalogItem;