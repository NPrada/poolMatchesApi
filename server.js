const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3550;

const server = http.createServer(app); //starts the server and runs the listener method whenerver a package is recieved

server.listen(port);