//select addBook button
let addBookButton = document.querySelector('.add');

//select form
let addBookForm = document.querySelector('.modal');

//select booksGrid
let bookShelf = document.querySelector('#shelf');

//show-modal class to modal
function showForm() {
    addBookForm.classList.toggle("show-modal");
}

//trigger handler
function windowOnClick(event) {
    if (event.target === addBookButton) {
        console.log(event.target);
    }
}

//listen for trigger
window.addEventListener("click",windowOnClick);

//addBook event
addBookButton.addEventListener("click",showForm);

//get submit button
let submit = document.querySelector('.submit-button');

//submit trigger
submit.addEventListener("click",addBook);

//get title
let bookTitle = document.querySelector('#title');

//get title
let bookAuthor = document.querySelector('#author');

//get title
let bookPages = document.querySelector('#pages');

// book library array
let myLibrary = [];

//book constructor
function Book(title,author,pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}




//cardBody
let cardBody = document.createElement("div");

//read button
let readButton;
//delete button
let deleteButton;

function printBooks() {
    myLibrary.forEach(book => {
        //card for book
        let bookCard = document.createElement("div");
        //card header
        let cardHeader = document.createElement("div");
        cardHeader.appendChild(addCardTitle(book.title));
        cardHeader.appendChild(addCardAuthor(book.author));
        cardHeader.appendChild(addCardPages(book.pages));

        bookCard.appendChild(cardHeader);
        bookShelf.appendChild(bookCard);
        console.log(bookShelf);

    })
}
//addBook to Grid
function addBook(event) {
    //prevent form submit default
    event.preventDefault();
    //hide modal
    showForm();
    //an individual book
    let userBook = new Book(bookTitle.value,author.value,pages.value);
    myLibrary.push(userBook);
    printBooks();
    
}


//function to add book title to card header
function addCardTitle(title) {
    let cardTitle = document.createElement("p");
    cardTitle.innerText = title;
    return cardTitle

}

//function to add book title to card header
function addCardTitle(title) {
    let cardTitle = document.createElement("p");
    cardTitle.innerText = title;
    return cardTitle

}

//function to add book author to card header
function addCardAuthor(author) {
    let cardAuthor = document.createElement("p");
    cardAuthor.innerText = author;
    return cardAuthor;

}

//function to add book pages to card header
function addCardPages(pages) {
    let cardPages = document.createElement("p");
    cardPages.innerText = pages;
    return cardPages;

}