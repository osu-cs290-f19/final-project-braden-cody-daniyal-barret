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
    res.render('partials/libraryPage', { page: 'library', pageHeader: 'Books in your library', books: bookData });
    res.status(200);
});

app.post('/', function(req, res, next) {
    var newBook = req.body;
    if (newBook) {
        newBook.id = bookData.length + 1;
        bookData.push(newBook);
        fs.writeFile('bookData.json', JSON.stringify(bookData), function() {
            res.status(200).send('Data was successfully stored');
        });
    } else {
        res.status(404).send('Data was not successfully stored');
    }
});


app.get('/favorites', function(req, res, next) {
    res.render('partials/libraryPage', { page: 'favorites', pageHeader: 'Your favorites', books: loadFavs() });
    res.status(200);
});

// A post request to this path will flip the value of 'favorite' for the book with the given id
app.post('/favorites/:id', function(req, res, next) {
    var idObject = bookData.reduce(function(map, obj) {
        map[obj.id] = obj;
        return map;
    }, {});
    var updatedBook = idObject[Number(req.params.id)];
    updatedBook.favorite = !updatedBook.favorite;
    idObject[Number(req.params.id)] = updatedBook;
    newBookData = convertObjectToArray(idObject);
    fs.writeFile('bookData.json', JSON.stringify(newBookData), function() {
        return;
    });
});

function convertObjectToArray(idObject) {
    var data = [];
    for (var bookID in idObject) {
        var book = idObject[Number(bookID)];
        data.push(book);
    }
    return data;
}


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