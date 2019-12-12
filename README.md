# Final project cs290


Library and Add-A-Book-Modal

OSU BookTracker is a tool for keeping track of books. The main page is called the "library."
The user can add books to the library, providing the title, author, subject, and a URL to a
photo of the book cover, by first clicking on the "add book" button in the navbar, entering the
data, and clicking on the "add book" button in the modal. The book will then be dynamically added
to the library and sent to the server to be stored.

Editing a Book

If there was a mistake made when entering a book's data, the user can click on the edit button in
the bottom center of each book card to open the edit-a-book modal. This modal is the same as the 
add-book modal, except that the values in the text input fields are pre-filled with existing data.
The user can then choose to edit a field, cancel, or delete the book entirely.

Favoriting System

In each of the book cards in the library, there is a heart button in the lower right side. Clicking
on this will either add or remove said book from "favorites." When a book is added to favorites, it
can then be viewed in the favorites page, which can be accessed by clicking on an identical heart-shaped
button in the upper right of the navbar.

Link to Vendor

In the lower right corner of each book card, there is a shopping cart button. Clicking on this button
will open a new tab to an amazon.com search for the title of the book for which it was clicked. The
URL for this link is dynamically generated when a book is first added, and when it is edited.

Search

In the navbar, there is a searchbar. A user can begin typing the name of a book's title or author, and
the books in both the library page and the favorites page will be filtered by this input.