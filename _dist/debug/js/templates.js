this['JST'] = this['JST'] || {};

this['JST']['app/templates/dashboard.html'] = function(data) { return function (obj,_) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="row">\r\n\t<div class="span9">\r\n\t\t<h4>Dashboard</h4>\r\n\r\n\t\t<div id="modal-from-dom" class="modal hide fade">\r\n\t\t\t<div class="modal-header">\r\n\t\t\t\t<a href="#" class="close">×</a>\r\n\t\t\t\t<h3>Modal Heading</h3>\r\n\t\t\t</div>\r\n\t\t\t<div class="modal-body">\r\n\t\t\t\t<p>One fine body…</p>\r\n\t\t\t</div>\r\n\t\t\t<div class="modal-footer">\r\n\t\t\t\t<a href="#" class="btn primary">Primary</a>\r\n\t\t\t\t<a href="#" class="btn secondary">Secondary</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<button data-controls-modal="modal-from-dom" data-backdrop="true" data-keyboard="true" class="btn">Launch Modal</button>\r\n\r\n\t\t<button id="btn-create-metaitem" class="btn">Create MetaItem</button>\r\n\r\n\t</div>\r\n\t<div class="span7">\r\n\t\t\r\n\t\t<div class="notification-center">\r\n\t\t\t<ul class="tabs">\r\n\t\t\t\t<li id="activity" class="active"><a href="activity">Activity</a></li>\r\n\t\t\t\t<li id="messages"><a href="messages">Messages</a></li>\r\n\t\t\t\t<li id="actions"><a href="actions">Actions</a></li>\r\n\t\t\t\t<li id="tasks"><a href="tasks">Tasks</a></li>\r\n\t\t\t</ul>\r\n\r\n\t\t\t<div class="tab-content">\r\n\t\t\t\t<div class="tab-pane active" data-tab-id="activity">\r\n\t\t\t\t\t<table class="condensed-table">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th>Who</th>\r\n\t\t\t\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t\t\t\t\t<th>Time</th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td><a href="">@Stephanvs</a></td>\r\n\t\t\t\t\t\t\t\t<td>Lorum ipsum dolor sit amet</td>\r\n\t\t\t\t\t\t\t\t<td>12:23pm</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="tab-pane" data-tab-id="messages">\r\n\t\t\t\t\tThis is simple tab 2\'s content. Now you see it!\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="tab-pane" data-tab-id="actions">\r\n\t\t\t\t\tThis is simple tab 3\'s content. It\'s, you know...okay.\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="tab-pane" data-tab-id="tasks">\r\n\t\t\t\t\tThis is simple tab 3\'s content. It\'s, you know...okay.\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n');}return __p.join('');
}(data, _)};

this['JST']['app/templates/example.html'] = function(data) { return function (obj,_) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<header>  \r\n  <div>\r\n    <h1>Congratulations!</h1>\r\n    <h2>Seeing this means you have installed Backbone Boilerplate correctly.</h2>\r\n\r\n    <p>Now that you have the easiest and most-powerful Backbone boilerplate available,\r\n    you\'re probably wondering how to use it to start building applications...</p>\r\n  </div>\r\n</header>\r\n\r\n<section id="toc">\r\n  <h1>Contents</h1>\r\n\r\n  <ul>\r\n    <li><a data-bypass href="#overview">Overview</a>\r\n    <li><a data-bypass href="#getting-help">Getting help</a>\r\n    <li><a data-bypass href="#writing-app">Writing your application</a>\r\n      <ul class="nested">\r\n        <li><a data-bypass href="#cleaning">Cleaning out default files and code</a>\r\n        <ul class="nested">\r\n          <li><a data-bypass href="#git-history">Removing the Git history</a>\r\n          <li><a data-bypass href="#test-dir">Removing the test directory</a>\r\n          <li><a data-bypass href="#build-process">Removing the build process</a>\r\n          <li><a data-bypass href="#favicon">Changing the Favicon</a>\r\n          <li><a data-bypass href="#app-code">Removing default application code</a>\r\n          <li><a data-bypass href="#default-routes">Removing the default routes</a>\r\n          <li><a data-bypass href="#default-assets">Removing default assets</a>\r\n        </ul>\r\n        <li><a data-bypass href="#namespace">Setting your namespace</a>\r\n        <li><a data-bypass href="#modules">Creating a module</a>\r\n        <li><a data-bypass href="#templates">Working with templates</a>\r\n        <li><a data-bypass href="#plugins">Working with libraries and plugins</a>\r\n      </ul>\r\n    <li><a data-bypass href="#custom-build">Using the build tool</a>\r\n      <ul class="nested">\r\n        <li><a data-bypass href="#running">Running with the defaults</a>\r\n        <li><a data-bypass href="#customizing">Customizing the build configuration</a>\r\n        <li><a data-bypass href="#server">Using the development server</a>\r\n        <li><a data-bypass href="#adding-tasks">Adding new tasks</a>\r\n      </ul>\r\n    <li><a data-bypass href="#useful-resources">Useful Resources</a>\r\n  </ul>\r\n</section>\r\n\r\n<section>\r\n  <h2 id="overview">Overview</h2>\r\n\r\n  <p>Backbone Boilerplate is the product of much research and frustration. While\r\n  existing boilerplates for Backbone exist, they will often modify the Backbone\r\n  core, don\'t have an integrated build system, or impose too much on your\r\n  application\'s structure. This boilerplate attempts to improve that.\r\n\r\n  Organize your application in a logical filesystem, and develop Models,\r\n  Collections, Views, and Routers inside modules. Build your application knowing\r\n  you have efficient, compact code. Backbone Boilerplate extends on the\r\n  versatile Backbone core, and helps developers manage their application.</p>\r\n\r\n  <h3 id="core-features">Core Features</h3>\r\n  <ul>\r\n    <li><a target="_blank" href="https://github.com/h5bp/html5-boilerplate">HTML5 Boilerplate</a> included.\r\n    <li>Managed filesystem structure for application code, assets, tests, and distribution.\r\n    <li>Snippets to make common tasks easier: modules, HTML5 History API/Hash navigation, template loading and application events.\r\n    <li>Flexible and extendable build system.\r\n      <ul class="nested">\r\n        <li>Concatenate and minify all your libraries, application code, templates and CSS down to reduce transmission time.\r\n        <li>Compile underscore templates to prevent pre-processing on the client.\r\n      </ul>\r\n  </ul>\r\n</section>\r\n\r\n<section>\r\n  <h2 id="getting-help">Getting help</h2>\r\n\r\n  <p>If you\'re encountering issues, need assistance, or have a question that hasn\'t been answered in this\r\n  tutorial or <a target="blank" href="https://github.com/tbranyen/backbone-boilerplate">the GitHub project page</a>\r\n  you may find help in one of these places:</p>\r\n\r\n  <ul>\r\n    <li>IRC - #documentcloud on irc.freenode.net\r\n    <li><a target="blank" href="http://github.com/tbranyen/backbone-boilerplate/issues">GitHub Issues</a> - Please report if you\'ve found an issue,\r\n    bug, or controversial request.\r\n  </ul>\r\n\r\n  <p>I want this project to be the best it possibly can and represent the interests of the community, <b>please</b>\r\n  submit issues with features you find useful and anything that you question.</p>\r\n</section>\r\n\r\n<section>\r\n  <h2 id="writing-app">Writing your application</h2>\r\n  <p>Your application may be made up of third-party libraries, plugins, application code, templates, and lots of logic.  All of this will need\r\n  to be well structured to keep it maintainable and it also needs to be compiled if deployed into production.  Before you can get started you\r\n  will need to clean out all the existing defaults that are in the boilerplate are necessary to display this tutorial.\r\n  </p>\r\n\r\n  <p class="clues"><b>Strongly recommend you read through this tutorial before cleaning out any files that may hold clues on how to use the Boilerplate.</b></p>\r\n\r\n  <h3 id="cleaning">Cleaning out default files and code</h3>\r\n  <p>There are several places where customization may be required.</p>\r\n\r\n  <ul>\r\n    <li><h4 id="git-history">Removing the Git history</h4>\r\n      <p>If you cloned the Backbone Boilerplate with Git, you should delete the git directory and then initialize your own Git history:\r\n\r\n      <pre><code>\r\n    $ rm -rf .git\r\n    $ git init\r\n      </code></pre>\r\n      </p>\r\n\r\n    <li><h4 id="test-dir">Removing the test directory</h4>\r\n      <p>If you are not planning on testing your application with QUnit you should delete this directory.</p>\r\n\r\n    <li><h4 id="build-process">Removing the build process</h4>\r\n      <p>If you are not planning on using the provided build tool, delete the <code>build</code> folder.  It contains a lot of unnecessary code and\r\n      Node.js modules that you will not need.  You should also clear out the commented out script tags inside of <code>index.html</code>:\r\n      \r\n      <pre><code>\r\n    &lt;!--\r\n         If using the build tool you can uncomment the following lines and use\r\n         these instead.  They will toggle based on if you are using debug or\r\n         release.\r\n    --&gt;\r\n\r\n    &lt;!--\r\n    &lt;script src=&quot;/assets/js/libs.js&quot;&gt;&lt;/script&gt;\r\n    &lt;script src=&quot;/assets/js/templates.js&quot;&gt;&lt;/script&gt;\r\n    &lt;script src=&quot;/assets/js/app.js&quot;&gt;&lt;/script&gt;\r\n    --&gt;\r\n      </code></pre>\r\n      </p>\r\n\r\n    <li><h4 id="favicon">Changing the Favicon</h4>\r\n      <p>At the root level of the project simply change the <code>favicon.ico</code> file to point to your own branded icon.</p>\r\n\r\n    <li><h4 id="app-code">Removing default application code</h4>\r\n      <p>This tutorial is rendered in the <code>app/modules/example.js</code> file and written in <code>app/templates/example.html</code>.\r\n      Both of these files are safe to remove.</p>\r\n\r\n    <li><h4 id="default-routes">Removing the default routes</h4>\r\n      <p>Routes are defined in the <code>app/index.js</code> file.  Familiarize yourself with it\'s contents.  You\'ll notice the default router has two existing routes and callback defined, reset it to:\r\n\r\n      <pre><code>\r\n    // Defining the application router, you can attach sub routers here.\r\n    var Router = Backbone.Router.extend({\r\n      routes: {\r\n        "": "index",\r\n      },\r\n\r\n      index: function() {\r\n        // Put your homepage route logic here\r\n      }\r\n    });\r\n      </code></pre>\r\n      </p>\r\n\r\n\r\n      <p>Above the Router definition you\'ll see a reference to the example module,\r\n      this is safe to delete as well.\r\n\r\n      <pre><code>\r\n    // Include the example module\r\n    var Example = namespace.module("example");\r\n      </code></pre>\r\n      </p>\r\n  \r\n    <li><h4 id="default-assets">Removing default assets</h4>\r\n      <p>The default styles for this tutorial are stored in <code>assets/css/style.css</code>.  You will probably want to remove these since they only make sense for this specific page.  They start on <code>Line 209</code>.  With the following H5BP header:\r\n\r\n      <pre><code>\r\n    /* ==|== primary styles =====================================================\r\n       Author: Backbone Boilerplate <Change to your Name>\r\n       ========================================================================== */\r\n     </code></pre>\r\n     </p>\r\n\r\n     <p>You may also want to change the name to yours, if you\'re planning on putting your custom CSS here as well.</p>\r\n\r\n     <p>You should delete the <code>assets/img/backbone.png</code> file if you are not planning on using it in your app.</p>\r\n  </ul>\r\n\r\n  <h3 id="namespace">Setting your namespace</h3>\r\n  <p>This is a very important starting step to creating your application.  This brands the application to your name and makes\r\n  it something identifiable to new developers.  To set your own namespace, simply open the <code>app/index.js</code> file and\r\n  make the following modifications:\r\n\r\n    First change the name of the namespace, this is defined on <code>Line 4</code>\r\n    <pre><code>\r\n  this.myapp = {\r\n    // Assist with code organization, by breaking up logical components of code\r\n    // into modules.\r\n    module: function() {\r\n    </code></pre>\r\n    </p>\r\n\r\n    <p>Once you\'ve set the name, you\'ll want to change the reference on <code>Line 50</code> to:\r\n    \r\n    <pre><code>\r\n  // Shorthand the application namespace\r\n  var app = this.myapp;\r\n    </code></pre>\r\n    </p>\r\n  </p>\r\n\r\n  <h3 id="modules">Creating a module</h3>\r\n  <p>Following the Bocoup post on <a data-bypass target="_blank" href="http://weblog.bocoup.com/organizing-your-backbone-js-application-with-modules">Organizing Your Backbone.js Application With Modules</a> this boilerplate provides the same module definition structure.\r\n\r\n  Modules are placed in the <code>app/modules/</code> directory.  There is an example module\r\n  there named: <code>example.js</code>.  The actual module definition function is located\r\n  inside the <code>app/index.js</code> file.  You create and reference modules with the same\r\n  function call:  <code>namespace.module(&quot;&lt;module_name&gt;&quot;)</code>.\r\n\r\n  Typically a module contains a single Model/Collection/Router and many Views.\r\n  Therefore the returned module object is empty except for a Views object\r\n  property that can be used to attach many Views to, like:\r\n\r\n  <pre><code>\r\n  MyModule.Views.Detailed = Backbone.View.extend({ /* ... */ });\r\n\r\n  MyModule.Views.Main = Backbone.View.extend({ /* ... */ });\r\n  </code></pre>\r\n  </p>\r\n\r\n  <p>\r\n  Attaching Models/Collections/Routers happen on the same level of the module,\r\n  like so:\r\n\r\n  <pre><code>\r\n  MyModule.Model = Backbone.Model.extend({ /* ... */ });\r\n\r\n  MyModule.Router = Backbone.Router.extend({ /* ... */ });\r\n  </code></pre>\r\n  </p>\r\n\r\n  <h3 id="templates">Working with templates</h3>\r\n  <p>Templates are a super useful way to separate concerns in your application.  Instead of generating markup from inside your JavaScript\r\n  application, you instead create it in a separate file and load it into your application.  There are numerous ways of loading in a\r\n  template, but this boilerplate has chosen the most performant way to build all your templates into a single file.</p>\r\n\r\n  <p>This tutorial itself is a template that exists in <code>app/templates/example.html</code>.  You can edit this file and hit refresh\r\n  in here to see the changes.  The boilerplate comes with a built in function to handle the loading of templates.  It\'s called:\r\n  \r\n  <pre><code>\r\n  namespace.fetchTemplate("app/templates/name.html", function(template) {\r\n    // Template here is a function, that accepts an object.  Identical to _.template.\r\n    console.log(template({ ... }));\r\n  });\r\n  </code></pre>\r\n  </p>\r\n\r\n  <p>By defining a custom function this will ensure that if you use the build tool or AJAX, that your templates will load consistently.\r\n  You can see it in action inside the <code>app/modules/example.js</code> module.</p>\r\n\r\n  <p>If you use the build process to compile your templates, it will automatically find all the HTML files inside the templates\r\n  directory and compile them into a templates.js file.  These are actual JavaScript template functions being compiled on the server, which\r\n  is different from Jammit and most other server-side builders that just invoke functions on page load.</p>\r\n\r\n  <p>You can access a compiled template like so:\r\n\r\n  <pre><code>\r\n  var template = window.JST["app/modules/example.html"];\r\n  template({ ... });\r\n  </code></pre>\r\n  </p>\r\n\r\n  <h3 id="plugins">Working with libraries and plugins</h3>\r\n  <p>Libraries and plugins are easily added to the application, by placing them inside the <code>assets/js/libs/</code> directory.\r\n  If you have many plugins in your application, it may make sense to create a separate folder such as <code>assets/js/plugins/</code> \r\n  for them.</p>\r\n</section>\r\n\r\n<section>\r\n  <h2 id="custom-build">Using the build tool</h2>\r\n  <p>The Backbone Boilerplate build process is a state-of-the-art task driven\r\n  Node.js application that utilizes @cowboy\'s grunt project.\r\n\r\n  To run the defaults, execute the following command from the project root,\r\n  and *not from inside the build folder*.</p>\r\n\r\n  <h3 id="running">Running with the defaults</h3>\r\n  <p>To run the defaults, execute the following command from the project root,\r\n  and *not from inside the build folder*.\r\n\r\n  <pre><code>\r\n  node build\r\n  </code></pre>\r\n  </p>\r\n\r\n  <p>\r\n  This will do a number of things for you.  First it will concatenate all your\r\n  libs, app code, and templates into separate files inside the `dist/debug`\r\n  folder.  It will then minify those files and your CSS into production ready\r\n  files inside the <code>dist/release</code> folder.</p>\r\n\r\n  <h3 id="customizing">Customizing the build configuration</h3>\r\n  <p>To customize and configure the build tool, open `build/config.js` and tweak\r\nthe settings.</p>\r\n\r\n  <h3 id="server">Using the development server</h3>\r\n  <p>\r\n  While writing an application that leverages <code>pushState</code> you can run the\r\n  following command to run a server that will always resolve to the <code>index.html</code>\r\n\r\n  <pre><code>\r\n  node build/server\r\n  </code></pre>\r\n  </p>\r\n\r\n  <p>\r\n  This will spawn up an HTTP server on port <code>8000</code>.  This server is intended\r\n  for development and not production.  You should use url rewriting or forwarding\r\n  all requests in your production server to achieve this same effect.</p>\r\n\r\n  <h4>Serving the built assets</h4>\r\n\r\n  <p>If you are using the build tool in conjunction with this development server\r\n  you can optionally update the <code>index.html</code> file to remove the existing script\r\n  tags and uncomment out the scripts tag at the bottom to load the <code>dist/debug</code>\r\n  or <code>dist/release</code> assets.  You can achieve this by specifying either <b>debug</b>\r\n  or <b>release</b> after the server command, like so:\r\n\r\n  <pre><code>\r\n  node build/server release\r\n  </code></pre>\r\n  </p>\r\n\r\n  <h3 id="adding-tasks">Adding new tasks</h3>\r\n  <p>To add a new task into the build system, you simply copy and paste the task JavaScript folder/file into the <code>build/tasks</code> folder\r\n  or extract the task archive into the same directory.  At the very least in order to run this task, you\'ll need to add it to the <code>build/config.js</code>\r\n  file.  The last line should look something like:\r\n\r\n  <pre><code>\r\n  task.registerTask("default", "clean lint:files concat jst min mincss new_module_here");\r\n  </code></pre>\r\n  </p>\r\n\r\n  It\'s possible the custom task will have additional setup instructions, so make\r\n  sure you read the README for any task.</p>\r\n</section>\r\n\r\n<section id="useful-resources">\r\n  <h2>Useful resources</h2>\r\n\r\n  <ul>\r\n    <li><a href="http://backbonejs.org/">Backbone documentation</a> - Framework on which Backbone Boilerplate is built.\r\n    <li><a href="http://documentcloud.github.com/underscore/docs/underscore.html">Underscore documentation</a> - Required dependency for Backbone.\r\n  </ul>\r\n</section>\r\n');}return __p.join('');
}(data, _)};

this['JST']['app/templates/metaitem-create.html'] = function(data) { return function (obj,_) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="row">\r\n\t<div class="span16">\r\n\r\n\t\t<div class="alert-message">\r\n\t\t\tYou are currently creating a definition in the <strong>English</strong> language.\r\n\t\t\t<a href="" class="close">&times;</a>\r\n\t\t</div>\r\n\r\n\t\t<div class="alert-message block-message info">\r\n\t\t\t<a href="" class="close">&times;</a>\r\n\t\t\t<h3>What are MetaItems? <small>for detailed explanation see the <a href="#">reference documentation</a></small></h3>\r\n\t\t\t<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>\r\n\t\t</div>\r\n\r\n\t\t<div class="alert-message block-message warning">\r\n\t\t\t<a href="" class="close">&times;</a>\r\n\t\t\t<strong>Approval Status: Unsubmitted</strong>\r\n\t\t\t<p>This Action Type must be submitted for approval in order for it be visible to all users.</p>\r\n\t\t</div>\r\n\t\t\r\n\t\t<form class="form-stacked">\r\n\t\t\t\r\n\t\t\t<h1>Give your object a name</h1>\r\n\t\t\t<div class="clearfix">\r\n\t\t\t\t<label for="input:name">Name</label>\r\n\t\t\t\t<div class="input">\r\n\t\t\t\t\t<input class="xlarge input-text" id="input:name" size="30" type="text" /> \r\n\t\t\t\t\t<span class="help-block"><span class="label notice">Examples</span> <span>company, department, employee</span></span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<h1>Pluralization</h1>\r\n\t\t\t<div class="clearfix">\r\n\t\t\t\t<label for="input:singular-noun">Singular Noun</label>\r\n\t\t\t\t<div class="input">\r\n\t\t\t\t\tYou liked\r\n\t\t\t\t\t<select>\r\n\t\t\t\t\t\t<option selected>a</option>\r\n\t\t\t\t\t\t<option>an</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t\t<input class="input-text xlarge" id="input:singular-noun" size="30" type="text" />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class="clearfix">\r\n\t\t\t\t<label for="input:plural-noun">Plural Noun</label>\r\n\t\t\t\t<div class="input">\r\n\t\t\t\t\t<input class="input-text xlarge" id="input:plural-noun" size="30" type="text" />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<h1>Describe your object</h1>\r\n\t\t\t<table class="zebra-striped">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<th>Name</th>\r\n\t\t\t\t\t\t<th>Type</th>\r\n\t\t\t\t\t\t<th>Sample</th>\r\n\t\t\t\t\t\t<th></th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>URL</td>\r\n\t\t\t\t\t\t<td>URL</td>\r\n\t\t\t\t\t\t<td>http://api.hayman.com/123545245/{your-object}</td>\r\n\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>name</td>\r\n\t\t\t\t\t\t<td>text</td>\r\n\t\t\t\t\t\t<td><input type="text" class="span4" /></td>\r\n\t\t\t\t\t\t<td><a href="" class="close">&times;</a></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>name</td>\r\n\t\t\t\t\t\t<td>text</td>\r\n\t\t\t\t\t\t<td><input type="text" class="span4" /></td>\r\n\t\t\t\t\t\t<td><a href="" class="close">&times;</a></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t\t<a class="btn">Add another property</a> <span class="label notice">Examples</span> <span>Author, Distance, Director, Length</span>\r\n\t\t\t\r\n\t\t</form>\r\n\t\t\r\n\r\n\t\t<div class="actions">\r\n\t\t\t<a class="btn primary" id="btn-create">Create object</a>\r\n\t\t\t<a class="btn secondary" id="btn-cancel">Cancel</a>\r\n\t\t</div>\r\n\t</div>\r\n</div>');}return __p.join('');
}(data, _)};