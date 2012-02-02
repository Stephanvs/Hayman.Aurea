// Require libraries
var fs = require("fs")
    , express = require("express")
    , less = require('less')
    , lessMiddle = require('./less-middleware.js') // Just a file, not a module
    //, assetManager = require('connect-assetmanager')
    //, assetHandler = require('connect-assetmanager-handlers')
    , airbrake = require('airbrake').createClient('7cb5b338739c575567838a1525b83c33')
    , server = express.createServer()
    , port = process.env.PORT || 8000;

// Hack to compile .less files to .css
less.middleware = lessMiddle;

/* Compress generated less files  
 * Thanks to Matt Sain - http://stackoverflow.com/a/8379561/713518 */
var less;
express.compiler.compilers.less.compile = function (str, fn) {
  if (!less) { 
    less = require("less"); 
  }
    
  try {
    less.render(str, { compress : true }, fn); } 
  catch (err) {
    fn(err); }
};

// Prevents process from exiting after uncaughtException, but does report to airbrake if available.
process.addListener('uncaughtException', function (err, stack) {
    console.log('Caught exception: '+ err +'\n'+ err.stack);
    
    if (airbrake) {
        console.info('Error reported to Airbreak', err);

        airbrake.notify(err, function (err, url) {
            //if (err) throw err;
            console.log('Error reported to Airbreak @ ' + url);
        }); 
    }
});

/**********************
* Setup Routes
****/

// Setup groups for CSS / JS assets
var assetsSettings = {
    'js': {
        'route': /\/assets\/js\/[a-z0-9]+\/.*\.js/
        , 'path': './assets/js/'
        , 'dataType': 'javascript'
        , 'files': [
            '*'
            //, siteConf.uri+'/socket.io/socket.io.js' // special case since the socket.io module serves its own js
            //, 'jquery.client.js'
        ]
        , 'debug': true
        , 'postManipulate': {
            '^': [
                //assetHandler.uglifyJsOptimize
                // , function insertSocketIoPort(file, path, index, isLast, callback) {
                //     callback(file.replace(/.#socketIoPort#./, siteConf.port));
                // }
            ]
        }
    }
    , 'css': {
        'route': /\/assets\/less\/[a-z0-9]+\/.*\.less/
        , 'path': './assets/less/'
        , 'dataType': 'css'
        , 'files': [
            '*'
            //, 'client.css'
        ]
        , 'debug': true
        // , 'postManipulate': {
        //     '^': [
        //         assetHandler.fixVendorPrefixes
        //         , assetHandler.fixGradients
        //         , assetHandler.replaceImageRefToBase64(__dirname+'/public')
        //         , assetHandler.yuiCssOptimize
        //     ]
        // }
    }
};


// // Environment based configuration
// server.configure('development', 'debug', function() {

//     server.use("/assets/js", express.static("./dist/debug/js"));
//     server.use("/assets/less", express.static("./dist/debug/less"));
//     server.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

// });

// server.configure('production', 'release', function() {

//     server.use("/assets/js", express.static("./dist/release/js"));
//     server.use("/assets/less", express.static("./dist/release/less"));
//     server.use(express.errorHandler());

// });


// var assetsMiddleware = assetManager(assetsSettings);
 
// Middleware
server.configure(function() {
    server.use(express.bodyParser());
    server.use(express.cookieParser());
    //server.use(assetsMiddleware);
    server.use(express.logger({format: ':response-time ms - :date - :req[x-real-ip] - :method :url :user-agent / :referrer'}));
    server.use(less.middleware({debug: true, src: './', compile: less.render}));
    server.use('/assets/less', express.static('./assets/less'));

    // Serve favicon.ico
    server.use(express.favicon("./assets/favicon.ico"));
});

// // Serve static files
// server.use("/app", express.static("./app"));
// server.use("/assets", express.static("./assets"));
// server.use("/dist", express.static("./dist"));

// Ensure all routes go home, client side app..
server.get("*", function(req, res) {
    fs.createReadStream("./index.html").pipe(res);
});

// Actually listen
server.listen(port);

console.log("Server listening on: "+ port +" @ "+ (process.env.NODE_ENV || 'development'));