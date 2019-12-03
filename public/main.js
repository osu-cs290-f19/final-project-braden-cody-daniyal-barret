window.addEventListener('DOMContentLoaded', () => {
    let elem = document.getElementsByClassName('books')[0];
    Books.map(book => {

        elem.innerHTML += `
        <div class="col s12 m4 l4 books">
        <div class="card">
        <div class="card-image">
        <img src="${book.img}">
        <span class="card-title">${book.name}</span>
        <div class='rating'><i class='material-icons'>star</i> 
        <span >${book.rate} </span></div>
        </div>
        <div class="card-action">
        <a href='#' class='waves-effect ' ><i class="material-icons">add_shopping_cart</i></a>
        <a href='#' class='waves-effect' style="float: right" ><i class='material-icons' >favorite</i></a>
        </div>
        </div>
        </div>
        `
    })
})