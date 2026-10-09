
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const output = path.join(root, "www");
const assets = path.join(root, "assets");

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });

const allowed = /\.(html|css|js|webmanifest|xml|txt)$/i;

for (const file of fs.readdirSync(root)) {
  const source = path.join(root, file);

  if (fs.statSync(source).isFile() && allowed.test(file)) {
    fs.copyFileSync(source, path.join(output, file));
  }
}

if (fs.existsSync(assets)) {
  fs.cpSync(assets, path.join(output, "assets"), {
    recursive: true
  });
}

console.log("Website files copied to www successfully.");
