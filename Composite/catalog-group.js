class CatalogGroup {
    constructor(_name, _composites) {
        this._name = _name;
        this._composites = _composites;
    }

    get name() {
        return this._name;
    }

    set name(_name) {
        this._name = _name;
    }

    total() {
        return this._composites.reduce((t, n) => t+n.price, 0);
    }

    print() {
        console.log("::::",this._name, ": ", this.total());
        this._composites.forEach(n => n.print());
    }
}

module.exports = CatalogGroup;