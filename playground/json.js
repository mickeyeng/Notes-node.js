const fs = require("fs");

// const book = {
//     title: "Ego is the enemy",
//     author: 'Ryan Holiday',
// }

// let bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.JSON', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.JSON')
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON)

// console.log(data.title)

const dataBuffer = fs.readFileSync("1-json.JSON");
const dataBufferString = dataBuffer.toString();

const dataBufferObj = JSON.parse(dataBufferString);
dataBufferObj.name = "Mickey";
dataBufferObj.age = 26;
console.log(dataBufferObj.name + " " + dataBufferObj.age)

const newJson = JSON.stringify(dataBufferObj);

console.log(newJson);

fs.writeFileSync("1-json.JSON", newJson);