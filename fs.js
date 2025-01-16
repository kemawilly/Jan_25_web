const fs = require("fs")
const quote="Welcome to node js progrmming in pdf"

fs.writeFileSync("awesome.pdf", quote)