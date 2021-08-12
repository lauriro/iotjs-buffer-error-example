var fs = require("fs")
, chunks = []


fs
.createReadStream(process.argv[2] || "8kb.txt", {bufferSize:256, highWaterMark:256})
.on("data", function(data) {
	chunks.push(data)
})
.on("close", function() {
	console.log("Same", chunks[0] === chunks[1])
	console.log(chunks)
})

