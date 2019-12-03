var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bookData = require('./bookData');
var app = express();
var port = process.env.PORT || 8000;

app.engine('handlebars', exphbs({ defaultLayout: 'main', layoutsDir: path.join(__dirname, 'views', 'layouts') }));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', function(req, res, next) {
    var templateArgs = {
        books: bookData,
    };
    res.render('partials/postPage', templateArgs);
    res.status(200);
});

app.get('*', function(req, res) {});

app.listen(port, function() {
    console.log("== Server is listening on port", port);
});