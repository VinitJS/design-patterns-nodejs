class Storage {
    constructor(name, inventory = [], deliveryTime = 0) {
        this.name = name;
        this.inventory = inventory;
        this.deliveryTime = deliveryTime;
        this.next = null;
    }

    setNext(obj) {
        this.next = obj;
    }

    find(itemName) {
        console.log(`Searching ${itemName} in ${this.name}`)
        let item = this.inventory.find(item => item.name === itemName);
        if(item) {
            console.log("Found!")
            item.location = this.name;
            item.deliveryTime = this.deliveryTime;
            return item;
        } else if(this.next) {
            return this.next.find(itemName);
        }
        console.log("Not found!")
    }
}

module.exports = Storage;