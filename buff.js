var bff = require("buffer")

const buf1 = Buffer.from("Welcome")
const buf2= Buffer.from("123")

const result= buf2.copy(buf1, 2)
console.log(result)
console.log(buf1.toString())
console.log(buf2.toString())