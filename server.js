const fs = require("fs")
const http = require("http")

http.createServer( (req,res)=>{
    const index = fs.readFileSync("index.html")
    res.write(index);
    res.end();
}

).listen(8080)