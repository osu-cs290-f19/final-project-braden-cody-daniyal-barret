var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');
var bookData = require('./bookData');
var app = express();
var port = process.env.PORT || 8000;

app.engine('handlebars', exphbs({ defaultLayout: 'main', layoutsDir: path.join(__dirname, 'views', 'layouts') }));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', function(req, res, next) {
    res.render('partials/libraryPage', { books: bookData });
    res.status(200);
});

app.post('/', function(req, res, next) {
    console.log(req.body);
    //fs.writeFile('bookData.json', , 'utf8');
});

app.get('*', function(req, res, next) {
    res.render('partials/404page');
    res.status(404);
});

app.listen(port, function() {
    console.log("== Server is listening on port", port);
});