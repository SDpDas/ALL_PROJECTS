const minimist = require("minimist");
//console.log(process.argv.slice(2)[0]); 

//process.argv.forEach((val, Index)) => {
//    console.log(`${index}:${val}`);
//});

const argNew = minimist(process.argv.slice(2)[0]);
console.log(argNew.name);