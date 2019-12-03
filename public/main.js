function showAddBookModal() {
    var addBookModal = document.getElementById('add-a-book-modal');
    addBookModal.classList.remove('hidden');
}

function hideAddBookModal() {
    var addBookModal = document.getElementById('add-a-book-modal');
    addBookModal.classList.add('hidden');
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