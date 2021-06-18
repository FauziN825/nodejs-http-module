var fs = require('fs')
var http = require('http');

var port = 8080

endpoint = "/food-list"

var server = http.createServer(function(req, res){
    var databuffer = fs.readFileSync("food-list.json")

    if(req.url === endpoint ){
        res.writeHead(200)
        res.end(databuffer)
        return console.log("Server is Running on Port " +port)
    }
    else{
        res.writeHead(404)
        res.end("Sorry " + req.url + " is Not Found")
        return console.log("Endpoint Wrong")
    }
})

server.listen(port)

