// window.addEventListener('DOMContentLoaded', () => {
//     let elem = document.getElementsByClassName('books')[0];
//     Books.map(book => {

//         elem.innerHTML += `
//         <div class="col s12 m4 l4 books">
//         <div class="card">
//         <div class="card-image">
//         <img src="${book.img}">
//         <span class="card-title">${book.name}</span>
//         <div class='rating'><i class='material-icons'>star</i> 
//         <span >${book.rate} </span></div>
//         </div>
//         <div class="card-action">
//         <a href='#' class='waves-effect ' ><i class="material-icons">add_shopping_cart</i></a>
//         <a href='#' class='waves-effect' style="float: right" ><i class='material-icons' >favorite</i></a>
//         </div>
//         </div>
//         </div>
//         `
//     })
// });

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