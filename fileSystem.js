let fs = require("fs");
// let buffer = fs.readFileSync("abc.js");
// console.log("bin data"+ buffer);

// ++++++ file system +++++ //
// ++++++ files -> create,  read , update , delete ++++++++ //
// create 
// fs.openSync("abc.txt" , "w"); // -> open in writing mode
// fs.writeFileSync("abc.txt", "mai khush nhi hu "); // -> create the file and update the content
// fs.writeFileSync("abc.txt", " hum kush nhi hai");


// append the content 

// fs.appendFileSync("abc.txt"," ,bhai khush kyu nhi hai tu"); // -> append with the exiting content

// to make a directory / folder

// fs.mkdirSync("myDirectory");
// fs.writeFileSync("myDirectory/myfile.txt","the content inside the file of directory");
// fs.writeFileSync("myDirectory/myfile2.txt","the other content inside the file of directory");

// ++++++ to delete the folder +++++ // 
// first we delete the file of folder//

// let files = fs.readdirSync("myDirectory");
// console.log(files);

// for(let i = 0 ; i < files.length ; i++){
//     console.log(files[i]);
//     fs.unlinkSync("myDirectory/" + files[i]);

// }  

// to delete the folder 
// fs.rmdirSync("myDirectory");
// fs.existSync => if  file exist at a path then return return true otherwise false ;
// fs.lstatSync -> tell the path is folder or a file  

// let isexist = fs.existsSync("abc.txt");
// console.log(isexist);
// let doesexist = fs.existsSync("abcd.txt");
// console.log(doesexist);

// let details  = fs.lstatSync(__dirname + "\\abc.js");
// let ans =  details.isFile();
// console.log(ans);

//  ans = details.isDirectory();
// console.log(ans);





// ***************************************************************************// 

// to create a file in wrtie mode - openSync
// create the file and update the content - writeFileSync
// to append the content - appendFileSync
// to make a new directory -  mkdirSync 
//  to make a file insode the directory - writeFileSync 
// to delete a file - unlinkSync
// to delete a folder - rmdirSync
//  to check a file exist or not - existsSync 
// to know the  path is folder or a file - lstatSync

// **************************************************************************//


// ******* To make 10 diectories with redme file ************

// for(let i = 1 ; i <= 10 ; i++){
//     let directorypath = `Lecture-${i}` ;
//     fs.mkdirSync(directorypath);
//     fs.writeFileSync(directorypath + "\\" + "readme.md" , `# This is the readme file of ${directorypath}`);

// }


