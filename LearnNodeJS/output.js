//////////////////////////////

/* const x = "1";
const y = "2";

console.log(x, y); */

/* %s formats variable to string
%d formats number to string
%i formats integer to string
%o formats object to string */  /* 

console.log("I am %s and my age is %d", "Sagar", 25); */
//console.clear(); //Clears everything before this line

///////////////////////////////

/* console.count("SDD rocks");
console.count("SDD rocks");
console.count("SDD rocks");
console.count("SDD rocks");
console.count("If you are Happy");
console.count("Be Happy");
console.count("Be Happy");
console.count("Be Happy");
console.count("Be Happy");
console.countReset("Be Happy");
console.count("Be Happy");
console.count("Be Happy");
console.count("Be Happy");
 */

///////////////////////////

/* const function1 = () => console.trace(); 
const function2 = () => function1();

function2();
*/

/////////////////////////s

/* const sum = () => console.log(`Sum of 2 and 3 is: ${2 + 3}`);
const multiply = () => console.log(`Multiplication of 2 and 3 is: ${2 * 3}`);
const modulo = () => console.log(`Modulus of 2 and 3 is: ${2 % 3}`);
const division = () => console.log(`Division of 3 by 2 is: ${3 / 2}`);
const subtract = () => console.log(`Subtraction of 2 from 3 is: ${3 - 2}`);

const measureTime = () => {
    console.time("sum()");
    sum();
    console.timeEnd("sum()");

    console.time("multiply()");
    multiply();
    console.timeEnd("multiply()");

    console.time("subtract()");
    subtract();
    console.timeEnd("subtract()");

    console.time("division()");
    division();
    console.timeEnd("division()");

    console.time("modulo()");
    modulo();
    console.timeEnd("modulo()");
};
measureTime();
 */

/////////////////////////

/* const ProgressBar = require("progress/lib/node-progress");

const bar = new ProgressBar("donwloading [:bar] :rate/bps :percent :etas", {
    total: 20,
});

const timer = setInterval(()=>{
    bar.tick();
    if(bar.complete){
        clearInterval(timer);
    }
}, 1500);
 */

///////////////////////

/* const chalk = require("chalk");
console.log(chalk.blue("My name is green")); // This adds color to the text
*/