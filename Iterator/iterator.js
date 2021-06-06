class Iterator {
    constructor(list = []) {
        this._index = 0;
        this._list = list;
    }

    current() {
        return this._list[this._index];
    }

    next() {
        if(this._index < this._list.length-1) this._index++;
        return this._list[this._index];
    }

    prev() {
        if(this._index > 0) this._index--;
        return this._list[this._index];
    }

    first() {
        this._index=0;
        return this._list[this._index];
    }

    last() {
        this._index = this._list.length-1;
        return this._list[this._index];
    }
}

module.exports = Iterator;