const http = require('http');
const port = 3000;

const server = http.createServer(function(req, res) {
  console.log(`received ${req.method} request for: ${req.url}`);
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Hello World');
})

server.listen(port, function(error) {
	if (error) {
		console.log('Something went wrong', error);
	} else {
		console.log('Server is listening on port ' + port);
	}
})
