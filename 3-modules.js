// MODULES
// every file is module (common js)
// modules - encapsulated code (only share minimum)

const {john,peter} = require('./4-names');
const sayHi = require('./5-utls');
require('./7-mind-grenade')

sayHi("asrar")
// sayHi(names.john);
// sayHi(names.peter);
sayHi(john);
sayHi(peter);