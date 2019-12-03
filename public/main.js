var allBooks = [];

function showAddBookModal() {
    var addBookModal = document.getElementById('add-a-book-modal');
    addBookModal.classList.remove('hidden');
}

function clearModalFields()
{
    document.getElementById('input-author').value = ""
    document.getElementById('input-title').value = ""
    document.getElementById('input-subject').value = ""
    document.getElementById('input-date').value = ""
    document.getElementById('input-photoURL').value = ""
    document.getElementById('input-vendorURL').value = ""
}

function hideAddBookModal() {
    var addBookModal = document.getElementById('add-a-book-modal');
    addBookModal.classList.add('hidden');
    clearModalFields();
}

function handleModalAccept() {
    var author = document.getElementById('input-author').value.trim();
    var title = document.getElementById('input-title').value.trim();
    var subject = document.getElementById('input-subject').value.trim();
    var date = document.getElementById('input-date').value.trim();
    var photoURL = document.getElementById('input-photoURL').value.trim();
    var vendorURL = document.getElementById('input-vendorURL').value.trim();

    if (!author || !title || !subject || !date || !photoURL || !vendorURL) {
        alert('One or more fields are blank!');
    } else {
        allBooks.push({
            author: author,
            title: title,
            subject: subject,
            date: date,
            photoURL: photoURL,
            vendorURL: vendorURL
        });
    }

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