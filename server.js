var fs = require("fs")
var http = require("http")
var port = 8000

http.createServer(function(request, response) {
	console.log("Request for path: " + request.url)

	fs.createReadStream(request.url === "/b" ? "8kb.txt": "4kb.txt").pipe(response)
})
.listen(port, function() {
	console.log('HTTP server listening on port: ' + port)
})

