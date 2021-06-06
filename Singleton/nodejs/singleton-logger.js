class Logger {
    constructor() {
        this._db = [];
    }

    count() {
        return this._db.length;
    }

    log(value, timestamp) {
        this._db.push([timestamp, value]);
    }

    list() {
        this._db.forEach(([t, v]) => console.log(t, ":", v));
    }

    clear() {
        this._db = [];
    }
}

module.exports = new Logger(); // cached by nodejs