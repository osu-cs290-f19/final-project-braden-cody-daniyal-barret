var allBooks = [];
var favorites = [];

// On adding new book via modal, this function grabs the data values from the modal, inserts it into the DOM, and sends it to the back end for storage
function handleModalAccept() {
    var newBook = getNewBookValsFromModal();
    insertNewBook(newBook.title, newBook.author, newBook.subject, newBook.photoURL, newBook.photoURL, newBook.vendorURL);
    storeBook(newBook.title, newBook.author, newBook.photoURL, newBook.subject);
    hideAddBookModal();
}

// Gets book data values from modal
function getNewBookValsFromModal() {
    var bookVals = {
        author: document.getElementById('input-author').value.trim(),
        title: document.getElementById('input-title').value.trim(),
        subject: document.getElementById('input-subject').value.trim(),
        photoURL: document.getElementById('input-photoURL').value.trim(),
        favorite: false
    };
    if (!bookVals.author || !bookVals.title || !bookVals.subject || !bookVals.photoURL) {
        alert('One or more fields are blank!');
        return undefined;
    }
    bookVals.vendorURL = createAmazonURL(bookVals.title);
    return bookVals;
};

// Creates a URL to an Amazon search for the input title
function createAmazonURL(title) {
    var titleWords = title.split(' ');
    var vendorURL = "https://www.amazon.com/s?k=";
    for (var i = 0; i < titleWords.length; i++) {
        vendorURL += titleWords[i].toLowerCase();
        if (i !== titleWords.length) {
            vendorURL += '+';
        }
    }
    vendorURL += "&ref=nb_sb_noss_2";
    return vendorURL;
}

// Creates a new bookCard with Handlebars and inserts it into DOM
function insertNewBook(title, author, subject, photoURL, vendorURL, favorite) {
    bookCardHTML = Handlebars.templates.bookCard({
        title: title,
        author: author,
        subject: subject,
        photoURL: photoURL,
        vendorURL: vendorURL,
        favorite: favorite
    });

    var bookCardContainer = document.querySelector('#books');
    bookCardContainer.insertAdjacentHTML('beforeend', bookCardHTML);
}

// Sends information for a new book to server to be stored in JSON file
function storeBook(title, author, photoURL, subject) {
    var req = new XMLHttpRequest();
    req.open('POST', '/');
    req.setRequestHeader('Content-Type', 'application/json');
    req.addEventListener('load', function(event) {
        if (event.target.status !== 200) {
            var message = event.target.response;
            alert("Error storing book data: " + message);
        }
    });
    req.send(JSON.stringify({
        title: title,
        author: author,
        photoURL: photoURL,
        subject: subject
    }));
};

function showAddBookModal() {
    var addBookModal = document.getElementById('add-a-book-modal');
    addBookModal.classList.remove('hidden');
}

function hideAddBookModal() {
    var addBookModal = document.getElementById('add-a-book-modal');
    addBookModal.classList.add('hidden');
    clearModalFields();
}

function clearModalFields() {
    document.getElementById('input-author').value = ""
    document.getElementById('input-title').value = ""
    document.getElementById('input-subject').value = ""
    document.getElementById('input-photoURL').value = ""
}

/* When a heart is clicked in a bookCard, this function sends a request to the server to change the 'favorite' status in JSON file
   of the book for which it was clicked. It then either adds or removes the bookCard from the favorites page and shows a snackbar message */
function handleFavoriteClick(event) {
    var bookId = event.target.parentNode.parentNode.parentNode.getAttribute('data-id');
    var req = new XMLHttpRequest();
    req.open('POST', '/favorites/' + bookId);
    req.setRequestHeader('Content-Type', 'application/json');
    req.addEventListener('load', function(event) {
        if (event.target.status !== 200) {
            var message = event.target.response;
            alert("Error processing request: " + message);
        }
    });
    req.send(JSON.stringify({
        id: bookId
    }));

    favorites = [];
    var favorited; // A boolean value to keep track of whether the book was 'favorited' or 'unfavorited'
    var targetBook; // The title of the book that was 'favorited' or 'unfavorited'
    allBooks.forEach(function(book) {
        if (book.id === Number(bookId)) {
            book.favorite = !book.favorite;
            favorited = book.favorite;
            targetBook = book.title;
        }
        if (book.favorite === true) {
            favorites.push(book);
        }
    });

    var snackbarMessage = targetBook;
    if (favorited) {
        snackbarMessage += " was added to your favorites!";
    } else {
        snackbarMessage += " was removed from your favorites!";
    }

    if (document.getElementById('content-container').getAttribute('page') == 'favorites') {
        renderFavorites();
    }
    showSnackbar(snackbarMessage);
}

// Removes and reinserts all favorites into DOM
function renderFavorites() {
    var bookContainer = document.getElementById('books');
    while (bookContainer.lastChild) {
        bookContainer.removeChild(bookContainer.lastChild);
    }
    favorites.forEach(function(book) {
        insertNewBook(book.title, book.author, book.subject, book.photoURL, book.vendorURL, book.favorite);
    })
}

// Shows snackbar with message about which book what 'favorited' or 'unfavorited'
function showSnackbar(message) {
    var snackbar = document.getElementById("snackbar");
    snackbar.innerText = message;
    snackbar.className = "show";
    setTimeout(function() {
        snackbar.className = snackbar.className.replace("show", "");
    }, 1500);
}

// Builds a book object from data attributes of a bookCard element in the DOM
function parseBookElm(bookElm) {
    var book = {
        id: Number(bookElm.getAttribute('data-id')),
        title: bookElm.getAttribute('data-title'),
        author: bookElm.getAttribute('data-author'),
        subject: bookElm.getAttribute('data-subject'),
        vendorURL: bookElm.getAttribute('data-vendorURL'),
        favorite: Boolean(bookElm.getAttribute('data-favorite'))
    };

    var bookImgElm = bookElm.querySelector('.card-image img');
    book.photoURL = bookImgElm.src;

    return book;
}

window.addEventListener('DOMContentLoaded', function() {

    // Initializes the allBooks array and the favorites array by filling them with books in the DOM
    var bookElms = document.getElementsByClassName('card');
    for (var i = 0; i < bookElms.length; i++) {
        var book = parseBookElm(bookElms[i]);
        allBooks.push(book);
        if (book.favorite === true) {
            favorites.push(bookElms[i]);
        }
    }

    var addBookButton = document.getElementById('add-a-book-button');
    if (addBookButton) {
        addBookButton.addEventListener('click', showAddBookModal);
    }

    var cancelModalButton = document.getElementById('cancel-modal-button');
    if (cancelModalButton) {
        cancelModalButton.addEventListener('click', hideAddBookModal);
    }

    var acceptModalButton = document.getElementById('accept-modal-button');
    if (acceptModalButton) {
        acceptModalButton.addEventListener('click', handleModalAccept);
    }

    var favButton = document.querySelectorAll('.favorite-button');
    if (favButton) {
        favButton.forEach(function(currentValue) {
            currentValue.addEventListener('click', handleFavoriteClick);
        });
    };

    var searchText = document.getElementById('search');
    if(searchText){
        //searchText.addEventListener('keypress')
    }
});

function replaceAt(searchString, indexOfLastChar, chr) {
    if(indexOfLastChar > searchString.length-1) return searchString;
    return searchString.substr(0,indexOfLastChar) + chr + searchString.substr(indexOfLastChar+1);
}

//string to hold the searchbar text value
wordFromKeys = " ";

//function that grabs the searchbar text value
function keyPress(event){

    //grabs the stringified version of the unicode keypressed
    var theKey = " ";
    theKey = String.fromCharCode(event.keyCode);
    var theKeyUni = (event.keyCode);
    console.log('the keypressed is:', theKey);
    /*
    if the user presses delete it will remove the last char in the string
    reflecting the value in the actual searchbar
    */
    if(event.keyCode == 8)
    {
        var lastChar = wordFromKeys.substr(wordFromKeys.length - 1);
        console.log('the last char is:', lastChar)
        var lastCharIndex = (wordFromKeys.length - 1);
        console.log('the last charindex is:', lastCharIndex)
        wordFromKeys = replaceAt(wordFromKeys , lastCharIndex, '');
        console.log('the new word is:', wordFromKeys);
    }
    /*
    if the user does not press delete it will, then otherwise concatinate 
    the entered words from the searchbar
    */
    else{
        if (/[a-zA-Z0-9-_ ]/.test(theKey)){
            wordFromKeys = wordFromKeys.concat(theKey);
        }
    }
}