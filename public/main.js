window.addEventListener('DOMContentLoaded', function() {
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
            currentValue.addEventListener('click', handleFavoriteButton);
        });
    };

    var searchText = document.getElementById('search');
    if(searchText) {
        searchText.addEventListener('keypress', )
    }
});
wordFromKeys = '';
function keyPress(event) {
    theKey = ' ';
    theKey = event.key;
    wordFromKey.concat(theKey);
    console.log('the key pressed is:', theKey);
    console.log('the word is:', wordFromKey);
}

function showSnackbar() {
    var snackbar = document.getElementById("snackbar");

    snackbar.className = "show";

    setTimeout(function() { console.log('FIRED!!!'); }, 3000);
}

function handleFavoriteButton(event) {
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
    //window.location.reload(false);
    showSnackbar();
}

function handleModalAccept() {
    var newBook = getNewBookVals();

    insertNewBook(newBook.title, newBook.photoURL);
    storeBook(newBook.title, newBook.photoURL);
    hideAddBookModal();
}

function showAddBookModal() {
    var addBookModal = document.getElementById('add-a-book-modal');
    addBookModal.classList.remove('hidden');
}

function getNewBookVals() {
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

    var vendorURL = "https://www.amazon.com/s?k=";
    var titleWords = bookVals.title.split(' ');
    for (var i = 0; i < titleWords.length; i++) {
        vendorURL += titleWords[i].toLowerCase();
        if (i !== titleWords.length) {
            vendorURL += '+';
        }
    }
    bookVals.vendorURL += "&ref=nb_sb_noss_2";

    return bookVals;

};

function insertNewBook(title, photoURL) {
    bookCardHTML = Handlebars.templates.bookCard({
        title: title,
        photoURL: photoURL
    });

    var bookCardContainer = document.querySelector('#books');
    bookCardContainer.insertAdjacentHTML('beforeend', bookCardHTML);
}

function storeBook(title, photoURL) {
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
        photoURL: photoURL
    }));
};

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