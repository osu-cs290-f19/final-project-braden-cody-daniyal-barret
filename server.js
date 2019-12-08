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
    var newBook = req.body;
    if (newBook) {
        newBook.id = bookData.length() + 1;
        bookData.push(newBook);
        fs.writeFile('bookData.json', JSON.stringify(bookData), function() {
            res.status(200).send('Data was successfully stored');
        });
    } else {
        res.status(404).send('Data was not successfully stored');
    }
});


app.get('/favorites', function(req, res, next) {
    res.render('partials/libraryPage', { pageHeader: 'Your favorites', books: loadFavs() });
    res.status(200);
});

app.post('/favorites/:id', function(req, res, next) {
    console.log(typeof(bookData));
    for (var i = 0; i < bookData.length(); i++) {
        if (bookData[i].id == req.params.id) {
            bookData[i].favorite = !bookData[i].favorite;
            res.status(200).send('Object was successfully updated');
            return;
        }
    }
    res.status(404).send('Could not update object');
});

function loadFavs() {
    var favorites = [];
    for (var i = 0; i < bookData.length; i++) {
        if (bookData[i].favorite == true) {
            favorites.push(bookData[i]);
        }
    }
    return favorites;
}

app.get('*', function(req, res, next) {
    res.render('partials/404page');
    res.status(404);
});

app.listen(port, function() {
    console.log("== Server is listening on port", port);
});