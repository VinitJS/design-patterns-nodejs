const { writeFile, existsSync, readFileSync, unlink } = require("fs");

const fileLocation = "./Adapter/localstorage.json"

class LocalStorage {

    constructor() {
        if(existsSync(fileLocation)) {
            console.log('Loading items from localstorage.json.');
            let txt = readFileSync(fileLocation);
            this._items = JSON.parse(txt);
        } else {
            this._items = {};
        }
    }

    get length() {
        return Object.keys(this._items).length;
    }

    getItem(key) {
        return this._items[key];
    }

    setItem(key, val) {
        this._items[key] = val;
        writeFile(
            fileLocation,
            JSON.stringify(this._items),
            error => {
                console.log(error);
            })
    }

    clear() {
        this._items = {};
        unlink(
            fileLocation,
            error => {
                console.log("Local storage file removed.");
            }
        )
    }
}

module.exports = new LocalStorage();