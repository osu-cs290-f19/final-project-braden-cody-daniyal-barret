var path = require('path');
var fs = require('fs');

var bodyParser = require('body-parser');
var express = require('express');
var exphbs = require('express-handlebars');

var bookData = require('./bookData');

var app = express();
var port = process.env.PORT || 8991;

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

app.post('/delete/:id', function(req, res, next) {
    var id = Number(req.params.id);
    var idObject = createIdObject();
    delete idObject[id];
    bookData = convertObjectToArray(idObject);
    fs.writeFile('bookData.json', JSON.stringify(bookData), function() {
        return;
    });
});

app.post('/edit/:id', function(req, res, next) {
    var id = Number(req.params.id);
    var idObject = createIdObject();

    idObject[id] = req.body;
    var newData = convertObjectToArray(idObject);
    fs.writeFile('bookData.json', JSON.stringify(newData), function() {
        return;
    })
});

app.get('/favorites', function(req, res, next) {
    res.render('partials/libraryPage', { page: 'favorites', pageHeader: 'Your favorites', books: loadFavs() });
    res.status(200);
});

// A post request to this path will flip the value of 'favorite' for the book with the given id in the JSON storage file
app.post('/favorites/:id', function(req, res, next) {
    var id = Number(req.params.id);
    var idObject = createIdObject();
    var updatedBook = idObject[id];
    updatedBook.favorite = !updatedBook.favorite;
    idObject[id] = updatedBook;
    bookData = convertObjectToArray(idObject);
    fs.writeFile('bookData.json', JSON.stringify(bookData), function() {
        return;
    });
});

function createIdObject() {
    return bookData.reduce(function(map, obj) {
        map[obj.id] = obj;
        return map;
    }, {});
}

function convertObjectToArray(idObject) {
    var data = [];
    for (var bookID in idObject) {
        data.push(idObject[Number(bookID)]);
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