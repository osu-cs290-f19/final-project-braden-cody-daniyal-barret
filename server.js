var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var express = require('express');
var exphbs = require('express-handlebars');
var bookData = require('./bookData');
var app = express();
var port = process.env.PORT || 8000;

app.engine('handlebars', exphbs({ defaultLayout: 'main', layoutsDir: path.join(__dirname, 'views', 'layouts') }));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(express.static('public'));


app.get('/', function(req, res, next) {
    res.render('partials/libraryPage', { pageHeader: 'Books in your library', books: bookData });
    res.status(200);
});

app.post('/', function(req, res, next) {
    bookData.push(JSON.stringify(req.body));
    if (req.body) {
        fs.writeFile('bookData.json', JSON.stringify(bookData), function() {
            console.log('Wrote file to store');
        });
    }
});

app.get('*', function(req, res, next) {
    res.render('partials/404page');
    res.status(404);
});

app.listen(port, function() {
    console.log("== Server is listening on port", port);
});