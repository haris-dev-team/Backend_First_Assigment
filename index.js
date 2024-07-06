const { log } = require("console");
const fs = require("fs");

// ****************************** Make Folder ******************************

// fs.mkdirSync("new_Folder");

// ****************************** Make File ******************************

// fs.writeFileSync("new_Folder/new_Folder.txt", "My Name Is Muhammad Haris.");

// ****************************** Edit File ******************************

// fs.appendFileSync(
//   "new_Folder/new_Folder.txt",
//   "My Father Name Is Muhammad Haroon."
// );
// fs.unlinkSync("new_Folder/new_Folder.txt");

// ****************************** Delete Folder ******************************

// fs.rmdirSync("new_Folder");

// ****************************** Read File ******************************

// const readable_Instence = fs.readFileSync("new_Folder/new_Folder.txt", "utf-8");

// console.log(readable_Instence);

// ****************************** Create Server ******************************

const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request);

  return response.end("Server Is Running!");
});

server.listen(5000);
