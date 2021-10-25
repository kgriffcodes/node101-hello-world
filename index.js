const http = require('http');
const port = 3000;

const server = http.createServer(function(req, res) {
  console.log(`received ${req.method} request for: ${req.url}`);
	res.writeHead(res.statusCode, { 'Content-Type': 'text/plain' });
	res.end('Hello World');
})

server.listen(port, function(error) {
	if (error) {
		console.log('Something went wrong', error);
	} else {
		console.log('Server is listening on port ' + port);
	}
})
