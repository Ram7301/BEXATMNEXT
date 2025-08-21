const fs = require("fs");
const path = require("path");

const searchDir = process.cwd(); // start from your project root

function findFiles(dir, filename) {
  let results = [];
  const list = fs.readdirSync(dir);

  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      results = results.concat(findFiles(filePath, filename));
    } else if (file === filename) {
      results.push(filePath);
    }
  });

  return results;
}

const matches = findFiles(searchDir, "C001.json");
console.log("Found page.json files:");
matches.forEach((file) => {
  console.log(file);
});
