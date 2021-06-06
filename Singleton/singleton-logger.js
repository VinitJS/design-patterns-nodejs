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

class Singleton {
    constructor() {
        if(!Singleton.instance) {
            Singleton.instance = new Logger();
        }
    }

    getInstance() {
        return Singleton.instance;
    }
}

module.exports = Singleton;