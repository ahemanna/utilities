/**
 * Module dependencies.
 */
var express = require("express");
var app = express();
var base64 = require("./routes/services/base64.js");

app.use(function(req, res, next) {
    var data = "";
    req.setEncoding("utf8");
    req.on("data", function(chunk) { 
        data += chunk;
    });
    req.on("end", function() {
        req.rawBody = data;
        next();
    });
});

/***** Supported routes ******/
//Update with relevant paths and methods as required
//leave the path in here as a defensive mechanism

app.post("*/base64encode", base64.encode);
app.post("*/base64decode", base64.decode);


//disable the etag, x-powered-by response header added by default by express
app.disable("etag");
app.disable("x-powered-by");

// Catch all route, to catch all not supported requests (other http verbs in this case)
app.all("*", function (req, res) {
    // Headers
  res.set({
    "Content-Type": "text/plain"
  });

  res.status(404);

  res.send("Unsupported API request: " + req.method + " for resource " + req.path);
})

// start node app
app.listen(3000);
console.log("Node application has started on port 3000. Make requests to http://127.0.0.1:3000/");
