const Store = require("./store");
const inventory = require('./inventory');

const myStore = new Store("My Store", inventory);

let searchItem = "sunglasses";
let result = myStore.find(searchItem);
console.log(result);

searchItem = "watch";
result = myStore.find(searchItem);
console.log(result);

searchItem = "gear";
result = myStore.find(searchItem);
console.log(result);

searchItem = "cycle";
result = myStore.find(searchItem);
console.log(result);

searchItem = "random";
result = myStore.find(searchItem);
console.log(result);