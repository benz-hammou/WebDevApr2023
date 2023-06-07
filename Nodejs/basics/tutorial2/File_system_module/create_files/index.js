var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    fs.open('myP.html', 'w', function (err, file) {
        if (err) throw err;
        console.log('I Open whit w !');
      });
    fs.writeFile(
      "myP.html",
      "<html><body><h1>Hello Dude!</h1><p>This is My P like paragraph.</p></body></html>",
      function (err) {
        if (err) throw err;
        console.log("Saved!");
      }
    );
    fs.appendFile('myP.html', "<html><body><h2>Hello World!</h2><p>This is My Append P like append child element.</p></body></html>", function (err) {
        if (err) throw err;
        console.log('Append one more!');
      });
    fs.readFile("myP.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
