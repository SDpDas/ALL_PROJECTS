/*In node command line you can do some evaluations and calculations
To enter it simply enter the command "node", press Enter and > will appear
*/

// REPL stands for Read Evaluate Print Loop used to do calculations and checks

const repl = require("repl");

const local = repl.start("$");

local.on("exit", () => {
    console.log('exiting REPL');
    process.exit();
})