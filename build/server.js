// Require libraries
var fs = require("fs");
var express = require("express");
var site = express.createServer();

// Determine which dist directory to use
var dir = "../dist/";

site.configure('development', 'debug', function() {
    dir += "debug";
    site.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

site.configure('production', 'release', function() {
	dir += "release";
	app.use(express.errorHandler());
});
console.log(dir);

// Use custom JS folder based off debug or release
dir && site.use("/assets/js", express.static(dir + "/js"));
dir && site.use("/assets/less", express.static(dir + "/less"));

// Serve static files
site.use("/app", express.static("../app"));
site.use("/assets", express.static("../assets"));
site.use("/dist", express.static("../dist"));

// Serve favicon.ico
site.use(express.favicon("../favicon.ico"));

// Ensure all routes go home, client side app..
site.get("*", function(req, res) {
  fs.createReadStream("../index.html").pipe(res);
});

// Determine port to listen on
var port = process.env.PORT || 8000;

// Actually listen
site.listen(port);

console.log("Server listening on: " + port);
