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
app.use(bodyParser.json());
app.use(express.static('public'));


app.get('/', function(req, res, next) {
    res.render('partials/libraryPage', { pageHeader: 'Books in your library', books: bookData });
    res.status(200);
});

app.post('/', function(req, res, next) {
    console.log(req.body);
    if (req.body) {
        bookData.push(req.body);

        fs.writeFile('bookData.json', JSON.stringify(bookData), function() {
            console.log('Wrote file to store');
            res.status(200);
        });
    } else {
        console.log('API received an empty request body');
        res.status(404);
    }
});

app.get('/favorites', function(req, res, next) {
    var favorites = [];
    for (var i = 0; i < bookData.length; i++) {
        if (bookData[i].favorite == true) {
            favorites.push(bookData[i]);
        }
    }
    res.render('partials/libraryPage', { pageHeader: 'Your favorites', books: favorites });
})

app.get('*', function(req, res, next) {
    res.render('partials/404page');
    res.status(404);
});

app.listen(port, function() {
    console.log("== Server is listening on port", port);
});