// Require libraries
var fs = require("fs"),
    express = require("express"),
    assetManager = require('connect-assetmanager'),
    assetHandler = require('connect-assetmanager-handlers'),
    sass = require('sass'),
    less = require('less'),
    server = express.createServer(),
    port = process.env.PORT || 8000;

process.addListener('uncaughtException', function (err, stack) {
    console.log('Caught exception: ' + err);
	console.log(err.stack.split('\n'));
});

var less_compile = function(file, path, index, isLast, callback) {
    if (path.match(/\.less$/)) {
        console.log('Trying to render .less file: \'' + file + '\'');
        less.render(file, { paths: ['./assets/css'], optimization: 0 }, function (e, css) {
            callback(css);
        });
    }
    else {
      callback(file);
    }
};

// Setup groups for CSS / JS assets
var assets = assetManager({
  'js': {
    'route': /\/static\/js\/[0-9]+\/.*\.js/,
    'path': './assets/js/',
    'dataType': 'js',
    'files': ['underscore.js', 'backbone.js', 'jquery.js', 'modal.js', 'modernizr.js', 'modal.js', 'hogan.js'],
    'preManipulate': {
        '^': []
    },'postManipulate': {
      '^': [
      assetHandler.uglifyJsOptimize, function(file, path, index, isLast, callback) {
        callback(file);
        //dummyTimestamps.content = Date.now();
      }]
    }
  },
  'css': {
    'route': /\/static\/css\/[0-9]+\/.*\.css/,
    'path': './assets/css/',
    'dataType': 'css',
    'files': [
        'bootstrap.less'
    ],
    'preManipulate': {
        'msie [6-7]': [
        less_compile, assetHandler.fixVendorPrefixes, assetHandler.fixGradients, /*assetHandler.stripDataUrlsPrefix*/ ],
        '^': [
        less_compile, assetHandler.fixVendorPrefixes, assetHandler.fixGradients, /*assetHandler.replaceImageRefToBase64(__dirname + '/assets')*/ ]
    },
    'postManipulate': {
      '^': [
      assetHandler.yuiCssOptimize, function(file, path, index, isLast, callback) {
        callback(file);
        //dummyTimestamps.css = Date.now();
      }]
    }
  }
});


// Middleware
server.configure(function() {
  server.use(express.bodyParser());
  server.use(express.cookieParser());
  server.use(express.logger({
    format: ':response-time ms - :date - :req[x-real-ip] - :method :url :user-agent / :referrer'
  }));

server.use(express.static('./assets'));
  server.use(assets);
  
  server.use(server.router);

  // Serve favicon.ico
  server.use(express.favicon(__dirname + '/assets/favicon.ico'));
});

//setup the errors
server.error(function (err, req, res, next) {
    console.log(err.stack.split('\n'));
	res.render('500', {locals: {'err': err}});
});

// Ensure all routes go home, client side app..
//server.get("*", function(req, res) {
//  console.log('rendering catch-all action');
//  fs.createReadStream("./index.html").pipe(res);
//});

server.get('/', function(req, res) {
    res.render();
});

// Actually listen
server.listen(port, function () {
   console.log("Server listening on: " + port + " @ " + (process.env.NODE_ENV || 'development')); 
});

