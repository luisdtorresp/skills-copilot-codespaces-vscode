// Create a web server that can respond to requests for /comments.json
// with a JSON representation of the array of comments.
// Use our new json() function, which sends a JSON response.
// Use the commentsPage() function to generate the array of comments.

var http = require("http");

var commentsPage = require("./comments_page");

var server = http.createServer(function(request, response) {
  if (request.url === "/comments.json") {
    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(JSON.stringify(commentsPage.comments));
    response.end();
  } else {
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Not Found\n");
    response.end();
  }
});

server.listen(8000);
console.log("Server running at http://localhost:8000/");