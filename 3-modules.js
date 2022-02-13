// Modules - Encapsulated Code (Only share minimum)
// Node uses CommonJS library uner the hood, every file in node is a module (by default)

const sayHi = require("./5-utils")
const names = require("./4-names")
const data = require("./6-alternative-flavor")
require("./7-mind-grenade")

sayHi('ravi');
sayHi(names.john)
sayHi(names.peter)

console.log(data);
console.log(data.items[1]);
console.log(data.singlePerson.name);

