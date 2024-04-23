/* console.log("Hi Node JS");
console.log("Code gets auto executed just by saving it from this point forward");
console.log("This is really fun"); */
//process.exit(1);
//process.exit(0);

/*My 1st nodeJS code
console.log looks in JS but is in nodeJS
as chrome's v8 engine supports this command*/

/* const _ = require("lodash");
const arr = [1, 2, 4, 6, 8];
console.log(_.last(arr));

const cowsay = require("cowsay");
console.log(cowsay.say({
text: "I'm learning NPM module",
e:"00",
t: "L",
})
); */

const { car, car2 } = require("./CarInfoFile");
console.log(JSON.stringify(car, null, 3));
console.log(JSON.stringify(car2, undefined, 2));
