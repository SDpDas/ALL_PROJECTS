//const error = new Error("Something went wrong!");
//console.log(error.stack);
//console.log(error.message); //Only shows the error message
//throw new Error("I am error object");

//const {CustomError} = require("./CustomError");
//throw new CustomerError("This is a custom error");

//////////////////////Try and Catch block

/* try{
    doSomething();
} catch(e) {
    console.log("Error Occured");
    console.log(e);
} */

function doSomething(){
    
    //console.log("This is a user input error.")
    const data = fetch("localhost:3000/api");
    console.log(data);
    
}

////////////////Uncaught Exceptions

/* process.on("UncaughtException", (err) => {
    console.log("We have an uncaught exception");
    process.exit(1);
}) */

//doSomething();

////////////////////////////Exceptions with Promises

/* const promise = new Promise((resolve, reject) => {
    if(true) {
        resolve(doSomething());
    }
    else {
        reject(doSomething());
    }
});

promise
.then((val) => {
    console.log(val);
})
.catch((err) => {
    console.log("Error Occurred");
    console.log(err);
}); */

////////////////////Exception with async and await

const Funky = async() => {
    try{
        doSomething();
    } catch(err){
        throw new CustomError(err.message);
    }
};

Funky();