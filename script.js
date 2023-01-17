//select addBook button
let addBookButton = document.querySelector(".add");

//select modal
let modal = document.querySelector(".modal");

let addBookForm = document.querySelector(".add-book-form");

//select booksGrid
let bookShelf = document.querySelector("#shelf");

let authorContainer = document.querySelector("#authorContainer");
//show-modal class to modal
function showForm() {
  modal.classList.toggle("show-modal");
}

//addBook event
addBookButton.addEventListener("click", showForm);

//get submit button
let submit = document.querySelector(".submit-button");

//submit trigger
submit.addEventListener("click", addBook);

function clearForm() {
  addBookForm.reset();
}

//get title input element
let bookTitle = document.querySelector("#title");

//get author input element
let bookAuthor = document.querySelector("#author");

//get pages input element
let bookPages = document.querySelector("#pages");

//get status
let isRead = document.querySelector("#read");

// book library array
let myLibrary = [];

//book constructor
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

//cardBody
let cardBody = document.createElement("div");

//delete button
let deleteButton;

const updateBooksGrid = () => {
  resetBooksGrid();
  for (let book of myLibrary) {
    printBooks(book);
  }
};

const resetBooksGrid = () => {
  bookShelf.innerHTML = "";
};
//function to print book objects in array
const printBooks = (book) => {
  //card for book
  let bookCard = document.createElement("div");

  //add card class to style bookCard div
  bookCard.classList.add("card");

  //card header for book information(title,author,pages)
  let cardHeader = document.createElement("div");
  //card footer for buttons
  let cardFooter = document.createElement("div");
  cardHeader.appendChild(addCardTitle(book.title));
  cardHeader.appendChild(addCardAuthor(book.author));
  cardHeader.appendChild(addCardPages(book.pages));

  let statusButton = document.createElement("button");
  let removeButton = document.createElement("button");
  removeButton.classList.add("remove-button");
  removeButton.innerText = "Remove";

  if (book.isRead) {
    statusButton.classList.add("read-button");
    statusButton.innerText = "Read";
  } else {
    statusButton.classList.add("notRead-button");
    statusButton.innerText = "Not Read";
  }
  cardFooter.appendChild(statusButton);
  cardFooter.appendChild(removeButton);
  bookCard.appendChild(cardHeader);
  bookCard.appendChild(cardFooter);
  bookShelf.appendChild(bookCard);
};
//addBook to Grid
let userBook;
function addBook(event) {
  //prevent form submit default
  event.preventDefault();

  let titleInput = myLibrary.find((x) => x.title === bookTitle.value);

  //check if book title and author already in array
  if (titleInput) {
    let addError = document.createElement("p");
    addError.innerText = "This book already exists in your library";
    addError.classList.add("add-error");
    authorContainer.appendChild(addError);
    //book doesn't exist. Hide form,add book, print array
  } else {
    showForm();
    userBook = new Book(
      bookTitle.value,
      author.value,
      pages.value,
      isRead.checked
    );
    myLibrary.push(userBook);
    printBooks(userBook);
    clearForm();
  }
}

//function to add book title to card header
function addCardTitle(title) {
  let cardTitle = document.createElement("p");
  cardTitle.innerText = title;
  return cardTitle;
}

//function to add book title to card header
function addCardTitle(title) {
  let cardTitle = document.createElement("p");
  cardTitle.innerText = title;
  return cardTitle;
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
