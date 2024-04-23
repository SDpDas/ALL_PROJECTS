console.log("starts operation");
function sleep(milliseconds){
    console.log("Operation is running");
    setTimeout(() => {
        console.log("operation is done");
    }, milliseconds);
}

sleep(1000)

console.log("do something else....");