path = require("path");

// for(let i =  0 ; i <= 10 ; i++ ){
//     let directoryPath = `lecture-${i}`;
//     fs.mkdirSync(directoryPath);
//     fs.writeFileSync(path.join(directoryPath,"readme.md"), `# Readme file of ${directoryPath}`);
// }


let extension = path.extname(path.join(__dirname, "abc.js"));
console.log(extension);


let name = path.basename(__dirname);
console.log(name);


name = path.basename(path.join(__dirname, "abc.js"));
console.log(name);
