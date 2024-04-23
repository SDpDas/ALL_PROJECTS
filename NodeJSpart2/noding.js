const path = require("path")

const filePath = "C:/Users/SAGAR DEEP/Desktop/ALL_PROJECTS/NodeJSpart2/files/sample.txt"

/* console.log(path.dirname(filePath)); //directory
console.log(__dirname); //directory name wrt project
console.log(path.basename(filePath)); //basename
console.log(__filename); //file name wrt project
console.log(path.extname(filePath)); //extension */

/* const sampleFile = "another.txt"

console.log(path.join(path.dirname(filePath), sampleFile));

//Used for joining the paths between files */

const fs = require("fs");
const fsPromise = require("fs");

//Reading from a file - Async method

/* fs.readFile(filePath, "utf-8", (err, data) => {
    if(err) throw new Error ("Something went wrong");
    console.log(data.toString()); //Extracting all info using file path from file if an error isn't found
});

try {
    const data = fs.readFileSync(path.join(__dirname), "utf8", "sample.txt");
} catch(err) {     //Synchronous way of reading a file
    console.log(err);
} */

const filereading = async() => {
    try {
    const data = await fsPromise.readFile(filePath, {encoding:"utf8"});
    console.log("FS PROMISES:", data);
    } catch(err){
        console.log(err);
    }
};

filereading();          //async method to call filereading function that will print file data 
                        //atleast once using promises
                        
