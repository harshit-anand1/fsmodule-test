const fs= require("fs");


fs.writeFileSync('bio.txt',"This is a sample file");
fs.appendFileSync('bio.txt'," second line of text in the file");

const data = fs.readFileSync('bio.txt',"utf-8");
console.log(data);