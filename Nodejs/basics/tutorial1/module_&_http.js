var http = require('http');

/* http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!')
}).listen(8080); */

var dt = require('./modules/myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.write("</br> The date and time are currently: " + dt.myDateTime());
  res.end('</br>' + 'Hello Dudde!')
}).listen(8080);

http.createServer(function (req, res){
  res.write('hello boy !')
  res.end('Tou are the last Dude !')
}).listen(8080)