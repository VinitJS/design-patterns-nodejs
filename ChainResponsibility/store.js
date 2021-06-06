const Storage = require("./storage");

class Store {
    constructor(name, inventory = []) {
        this.name = name;
        
        let floor = new Storage("store floor", inventory.floor);
        let backroom = new Storage("store backroom", inventory.backroom);
        let localstore = new Storage("nearby store", inventory.localstore, 1);
        let warehouse = new Storage("warehouse", inventory.warehouse, 5);

        floor.setNext(backroom);
        backroom.setNext(localstore);
        localstore.setNext(warehouse);

        this.storage = floor;
    }

    find(itemName) {
        return this.storage.find(itemName);
    }
}

module.exports = Store;