var path = require("path")

var p = "C:\Users/user/Documents/Training/Edueka/React.ppt";
//var p ="https://www.facebook.com/profile.php?id=100009226659643"
console.log(path.dirname(p))
console.log(path.basename(p))
console.log(path.extname(p))
console.log(path.isAbsolute(p))