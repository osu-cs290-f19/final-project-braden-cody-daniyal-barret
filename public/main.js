function showAddBookModal() {
    var addBookModal = document.getElementById('add-a-book-modal');
    addBookModal.classList.remove('hidden');
}

function hideAddBookModal() {
    var addBookModal = document.getElementById('add-a-book-modal');
    addBookModal.classList.add('hidden');

    document.getElementById('input-author').value = ""
    document.getElementById('input-title').value = ""
    document.getElementById('input-subject').value = ""
    document.getElementById('input-photoURL').value = ""
    document.getElementById('input-vendorURL').value = ""
    document.getElementById('input-date').value = ""
}

function handleModalAccept() {
    var author = document.getElementById('input-author').value.trim();
    var title = document.getElementById('input-title').value.trim();
    var subject = document.getElementById('input-subject').value.trim();
    var photoURL = document.getElementById('input-photoURL').value.trim();
    var vendorURL = document.getElementById('input-vendorURL').value.trim();
    var date = document.getElementById('input-date').value.trim();

    if (!author || !title || !subject || !photoURL || !vendorURL || !date) {
        alert("One of the fields is empty");
    } else {

    }


}

function parseBookElem(bookElem) {
    var book = {
        title: bookElem.getAttribute('data-title'),
        author: bookElem.getAttribute('data-author'),
        subject: bookElem.getAttribute('data-subject'),
        date: bookElem.getAttribute('data-date'),
        price: bookElem.getAttribute('data-price')
    };

    var bookImgElem = bookElem.querySelector('.card-image img');
    book.photoURL = bookImgElem.src;

    return book;
}

window.addEventListener('DOMContentLoaded', function() {
    var addBookButton = document.getElementById('add-a-book-button');
    if (addBookButton) {
        addBookButton.addEventListener('click', showAddBookModal);
    }

    var cancelModalButton = document.getElementById('cancel-modal-button');
    if (cancelModalButton) {
        cancelModalButton.addEventListener('click', hideAddBookModal);
    }

});


// window.addEventListener('DOMContentLoaded', () => {

//     var sidenav = document.querySelectorAll('.sidenav');
//     var modal = document.querySelectorAll('.modal');
//     var date = document.querySelectorAll('.datepicker');

//     M.Datepicker.init(date);
//     M.Modal.init(modal);
//     M.Sidenav.init(sidenav);

//     if (window.innerWidth < 900) {
//         let nav = document.getElementsByClassName('nav-wrapper')[0];
//         let elem = document.createElement('a');

//         elem.href = '#'
//         elem.setAttribute('data-target', 'slide-out')
//         elem.setAttribute('class', 'waves-effect sidenav-trigger')

//         elem.innerHTML = `<i class='material-icons' >menu</i>`
//         nav.appendChild(elem)
//     }
// });