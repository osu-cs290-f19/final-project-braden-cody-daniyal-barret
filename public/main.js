var allBooks = [];
var favorites = [];
searchText = " ";

// ================================= Modal stuff ================================= //

// On adding new book via modal, this function grabs the data values from the modal, inserts it into the DOM, and sends it to the back end for storage
function handleModalAccept() {
    var newBook = getNewBookValsFromModal();
    insertNewBook(newBook.id, newBook.title, newBook.author, newBook.subject, newBook.photoURL, newBook.vendorURL, newBook.favorite);
    window.location.reload(false);
    storeBook(newBook.title, newBook.author, newBook.photoURL, newBook.subject, newBook.vendorURL, newBook.favorite);
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
function insertNewBook(id, title, author, subject, photoURL, vendorURL, favorite) {
    bookCardHTML = Handlebars.templates.bookCard({
        id: id,
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

function applyEventListeners() {
    var editButtons = document.querySelectorAll('.edit-button');
    var favButtons = document.querySelectorAll('.favorite-button');
    editButtons.forEach(function (currentValue) {
        currentValue.removeEventListener('click', handleEditButtonClick);
        currentValue.addEventListener('click', handleEditButtonClick);
    });
    favButtons.forEach(function (currentValue) {
        currentValue.removeEventListener('click', handleFavoriteClick);
        currentValue.addEventListener('click', handleFavoriteClick);
    });
}

// Sends information for a new book to server to be stored in JSON file
function storeBook(title, author, photoURL, subject, vendorURL, favorite) {
    var req = new XMLHttpRequest();
    req.open('POST', '/');
    req.setRequestHeader('Content-Type', 'application/json');
    req.addEventListener('load', function (event) {
        if (event.target.status !== 200) {
            var message = event.target.response;
            alert("Error storing book data: " + message);
        }
    });
    req.send(JSON.stringify({
        title: title,
        author: author,
        photoURL: photoURL,
        subject: subject,
        vendorURL: vendorURL,
        favorite: favorite
    }));
};

function toggleAddBookModal() {
    var addBookModal = document.getElementById('add-a-book-modal');
    var isHide = addBookModal.offsetParent === null;
    if (isHide) {
        addBookModal.classList.remove('slideOutRight');
        addBookModal.classList.add('slideInRight');
        addBookModal.classList.remove('hidden');
    } else {
        hideAddBookModal();
    }
}

function hideAddBookModal() {
    var addBookModal = document.getElementById('add-a-book-modal');
    addBookModal.classList.remove('slideInRight');
    addBookModal.classList.add('slideOutRight');
    setTimeout(function () {
        addBookModal.classList.add('hidden');
    }, 650);
    clearModalFields();
}

function clearModalFields() {
    document.getElementById('input-author').value = ""
    document.getElementById('input-title').value = ""
    document.getElementById('input-subject').value = ""
    document.getElementById('input-photoURL').value = ""
}

// ================================= Favorites stuff ================================= //

/* When a heart is clicked in a bookCard, this function sends a request to the server to change the 'favorite' status in JSON file
   of the book for which it was clicked. It then either adds or removes the bookCard from the favorites page and shows a snackbar message */
function handleFavoriteClick(event) {
    var bookId = event.target.parentNode.parentNode.parentNode.getAttribute('data-id');
    var req = new XMLHttpRequest();
    req.open('POST', '/favorites/' + bookId);
    req.setRequestHeader('Content-Type', 'application/json');
    req.addEventListener('load', function (event) {
        if (event.target.status !== 200) {
            var message = event.target.response;
            alert("Error processing request: " + message);
        }
    });
    req.send();

    favorites = [];
    var favorited; // A boolean value to keep track of whether the book was 'favorited' or 'unfavorited'
    var targetBook; // The title of the book that was 'favorited' or 'unfavorited'
    allBooks.forEach(function (book) {
        if (Number(book.id) === Number(bookId)) {
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

    // If the user is on the 'favorites' page, display only 'favorited' books and re-add event listener to 'favorite' buttons
    if (document.getElementById('content-container').getAttribute('page') == 'favorites') {
        renderFavorites();
        applyEventListeners();
    }
    showSnackbar(snackbarMessage);
}

// Removes and reinserts all favorites into DOM
function renderFavorites() {
    removeBooksFromDOM();
    favorites.forEach(function (book) {
        insertNewBook(book.id, book.title, book.author, book.subject, book.photoURL, book.vendorURL, book.favorite);
    })
}

function removeBooksFromDOM() {
    var bookContainer = document.getElementById('books');
    while (bookContainer.lastChild) {
        bookContainer.removeChild(bookContainer.lastChild);
    }
}

// Shows snackbar with message about which book what 'favorited' or 'unfavorited'
function showSnackbar(message) {
    var snackbar = document.getElementById("snackbar");
    snackbar.innerText = message;
    snackbar.className = "show";
    setTimeout(function () {
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
        favorite: bookElm.getAttribute('data-favorite') == 'true'
    };

    var bookImgElm = bookElm.querySelector('.card-image img');
    book.photoURL = bookImgElm.src;

    return book;
}

// ================================= Searchbar stuff ================================= //

function handleSearchKeystroke(event) {
    searchText = document.getElementById('search').value.toLowerCase().trim();
    let matchingBooks = allBooks.filter(book => book.title.toLowerCase().includes(searchText) || book.author.toLowerCase().includes(searchText));
    removeBooksFromDOM();
    matchingBooks.forEach(function (book) {
        insertNewBook(book.id, book.title, book.author, book.subject, book.photoURL, book.vendorURL, book.favorite);
    });
    applyEventListeners();
}

// ================================= Edit Book Modal stuff ================================= //

function handleEditButtonClick(event) {
    editBookID = event.target.parentNode.parentNode.parentNode.getAttribute('data-id');
    showEditBookModal();
    for (let book of allBooks) {
        if (Number(book.id) === Number(editBookID)) {
            initializeEditBookModalValues(book);
        }
    }
}

function showEditBookModal() {
    var editBookModal = document.getElementById('edit-book-modal');
    editBookModal.classList.remove('hidden');
    editBookModal.classList.remove('slideOutRight');
    editBookModal.classList.add('slideInLeft');
}

function hideEditBookModal() {
    var editBookModal = document.getElementById('edit-book-modal');
    editBookModal.classList.remove('slideInLeft');
    editBookModal.classList.add('slideOutRight');
    setTimeout(function () {
        editBookModal.classList.add('hidden');
    }, 650);
    clearEditBookModalFields();
}

function clearEditBookModalFields() {
    document.getElementById('edit-author').value = ""
    document.getElementById('edit-title').value = ""
    document.getElementById('edit-subject').value = ""
    document.getElementById('edit-photoURL').value = ""
}

function getEditedBookValsFromModal(id, isFavorite) {
    var bookVals = {
        id: id,
        author: document.getElementById('edit-author').value.trim(),
        title: document.getElementById('edit-title').value.trim(),
        subject: document.getElementById('edit-subject').value.trim(),
        photoURL: document.getElementById('edit-photoURL').value.trim(),
        favorite: isFavorite
    };
    if (!bookVals.author || !bookVals.title || !bookVals.subject || !bookVals.photoURL) {
        alert('One or more fields are blank!');
        return null;
    }
    bookVals.vendorURL = createAmazonURL(bookVals.title);
    return bookVals;
};

function initializeEditBookModalValues(book) {
    document.getElementById('edit-title').focus();
    document.getElementById('edit-title').value = book.title;
    document.getElementById('edit-author').focus();
    document.getElementById('edit-author').value = book.author;
    document.getElementById('edit-subject').focus();
    document.getElementById('edit-subject').value = book.subject;
    document.getElementById('edit-photoURL').focus();
    document.getElementById('edit-photoURL').value = book.photoURL;
}

function handleEditModalAccept(event) {
    var isFavorite;
    var bookIndex;
    for (var i = 0; i < allBooks.length; i++) {
        if (Number(allBooks[i].id) === Number(editBookID)) {
            isFavorite = allBooks[i].favorite;
            bookIndex = i;
            break;
        }
    }
    var editedBook = getEditedBookValsFromModal(editBookID, isFavorite);
    if (editedBook === null) {
        return;
    }
    allBooks[bookIndex] = editedBook;
    removeBooksFromDOM();
    hideEditBookModal();
    allBooks.forEach(function (book) {
        insertNewBook(book.id, book.title, book.author, book.subject, book.photoURL, book.vendorURL, book.favorite);
    });
    applyEventListeners();

    var req = new XMLHttpRequest();
    req.open('POST', '/edit/' + editBookID);
    req.setRequestHeader('Content-Type', 'application/json');
    req.addEventListener('load', function (event) {
        if (event.target.status !== 200) {
            var message = event.target.response;
            alert("Error processing request: " + message);
        }
    });
    req.send(JSON.stringify(editedBook));
    editBookID = null;
}

function handleDeleteBookClick(event) {
    for (var i = 0; i < allBooks.length; i++) {
        if (Number(allBooks[i].id) === Number(editBookID)) {
            allBooks.splice(i, 1);
            break;
        }
    }

    removeBooksFromDOM();
    hideEditBookModal();
    allBooks.forEach(function (book) {
        insertNewBook(book.id, book.title, book.author, book.subject, book.photoURL, book.vendorURL, book.favorite);
    });
    applyEventListeners();

    var req = new XMLHttpRequest();
    req.open('POST', '/delete/' + editBookID);
    req.setRequestHeader('Content-Type', 'application/json');
    req.addEventListener('load', function (event) {
        if (event.target.status !== 200) {
            var message = event.target.response;
            alert("Error processing request: " + message);
        }
    });
    req.send();
    editBookID = null;
}


// ================================= On DOMContentLoaded ================================= //

window.addEventListener('DOMContentLoaded', function () {

    var editBookID;

    // Initializes the allBooks array and the favorites array by filling them with books in the DOM
    var bookElms = document.getElementsByClassName('card');
    for (var i = 0; i < bookElms.length; i++) {
        var book = parseBookElm(bookElms[i]);
        allBooks.push(book);
        if (book.favorite === true) {
            favorites.push(book);
        }
    }

    var addBookButton = document.getElementById('add-a-book-button');
    if (addBookButton) {
        addBookButton.addEventListener('click', toggleAddBookModal);
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
        favButton.forEach(function (currentValue) {
            currentValue.addEventListener('click', handleFavoriteClick);
        });
    };

    var editButtons = document.querySelectorAll('.edit-button');
    if (editButtons) {
        editButtons.forEach(function (currentValue) {
            currentValue.addEventListener('click', handleEditButtonClick);
        });
    }

    var acceptEditButton = document.getElementById('accept-edit-button');
    if (acceptEditButton) {
        acceptEditButton.addEventListener('click', handleEditModalAccept)
    }

    var cancelEditButton = document.getElementById('cancel-edit-button');
    if (cancelEditButton) {
        cancelEditButton.addEventListener('click', hideEditBookModal)
    }

    var deleteBookButton = document.getElementById('delete-book-button');
    if (deleteBookButton) {
        deleteBookButton.addEventListener('click', handleDeleteBookClick);
    }
});