// Constructors

class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }
}

// Declarations

const library = new Library()
const booksTbl = document.querySelector("#booksTbl");
const addBookFrm = document.querySelector("#addBookFrm");
const addBookBtn = document.querySelector("#addBookBtn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

// Dummy Data

library.addBook(new Book("Brave New World", "Aldous Huxley", 50, false));
library.addBook(new Book("Nineteen Eighy-Four", "George Orwell", 60, false));
library.addBook(new Book("Mort", "Terry Pratchett", 70, false));
library.addBook(new Book("Fire & Blood", "George R.R. Martin", 80, false));

// Functions

function createTableRow(book) {

  const tableRow = document.createElement('tr');
  const rowTitle = document.createElement('td');
  const rowAuthor = document.createElement('td');
  const rowPages = document.createElement('td');
  const rowIsRead = document.createElement('td');

  rowTitle.textContent = book.title;
  rowAuthor.textContent = book.author;
  rowPages.textContent = book.pages;
  rowIsRead.textContent = book.isRead;

  tableRow.appendChild(rowTitle);
  tableRow.appendChild(rowAuthor);
  tableRow.appendChild(rowPages);
  tableRow.appendChild(rowIsRead);
  booksTbl.appendChild(tableRow);

}

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Event Listeners

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);


// Load Page

for (let book of library.books) {
  console.log(book.title);
  createTableRow(book);
}

closeModal;

console.log("End of javascript reached");