/*
This is server.js just like what we did on assignment-4
When we got our HTML, CSS and JS we will be good to go by using this SERVER.JS
BTW, this part of program will be really flexible if we want to add any other
  newpage.
-----Barrett Li

*/

var url = require('url');
var http = require('http');
var fs = require('fs');
var port = 3000;

var lb_HTML, lb_CSS, lb_JS, lb_404;//if we dont need 404 page we can delete it;
//might put all the web code into one single file for later convience

fs.readFile('public/library.html',function(err,input){
    if(err)throw err;
    lb_HTML = input;
});

fs.readFile('public/CSS.css',function(err,input){
    if(err)throw err;
    lb_CSS = input;
});

fs.readFile('public/JS.js',function(err,input){
    if(err)throw err;
    lb_JS = input;
});

function requestHandle(require, response){
  if(require.url === "/library.html" || require.url ==="/"){
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.write(lb_HTML);
    response.end();
  }

  else if(require.url === "/CSS.css"){
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/css');
    response.write(lb_CSS);
    response.end();
  }

  else if(require.url === "/JS.js"){
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/js');
    response.write(lb_JS);
    response.end();
  }
}

var serverA = http.createServer(requestHandle);
serverA.listen(port,function(){
  console.log("listing port", port);
});
