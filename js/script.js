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

const library = new Library()

// DOM Element Declarations

const booksTbl = document.querySelector("#booksTbl");
const addBookBtn = document.querySelector("#addBookBtn");
const addBookFrm = document.querySelector("#addBookFrm");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");
const submitBtn = document.querySelector(".btn-submit");

// Dummy Data

library.addBook(new Book("Brave New World", "Aldous Huxley", 50, false));
library.addBook(new Book("Nineteen Eighy-Four", "George Orwell", 60, false));
library.addBook(new Book("Mort", "Terry Pratchett", 70, false));
library.addBook(new Book("Fire & Blood", "George R.R. Martin", 80, true));

// Functions

function createTableRow(book, id) {

  const tableRow = document.createElement('tr');
  const rowTitle = document.createElement('td');
  const rowAuthor = document.createElement('td');
  const rowPages = document.createElement('td');
  const rowIsRead = document.createElement('td');
  const rowDelete = document.createElement('td');
  const deleteBtn = document.createElement('button');

  rowTitle.textContent = book.title;
  rowAuthor.textContent = book.author;
  rowPages.textContent = book.pages;
  rowIsRead.textContent = book.isRead;
  deleteBtn.textContent = "Delete" + id; 
  rowDelete.appendChild(deleteBtn);

  tableRow.appendChild(rowTitle);
  tableRow.appendChild(rowAuthor);
  tableRow.appendChild(rowPages);
  tableRow.appendChild(rowIsRead);
  tableRow.appendChild(rowDelete);
  booksTbl.appendChild(tableRow);

}

function openModal() {

  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");

}
function closeModal() {

  modal.classList.add("hidden");
  overlay.classList.add("hidden");

}

function getAddBookInput() {

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const isRead = document.getElementById('isRead').checked;
  return new Book(title, author, pages, isRead);

}


function refreshTable() {

  booksTbl.textContent = "";
  for (let book of library.books) {
    console.log(book.title);
    console.log(library.books.indexOf(book))
    createTableRow(book, library.books.indexOf(book));
  }
    
}

function addBook(e) {
  
  e.preventDefault();
  const newBook = getAddBookInput()
  library.addBook(newBook)
  closeModal();
  refreshTable();

}

function removeBook(e) {
  console.log(e.value); 
  //library.removeBook(book)

}

// Event Listeners

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
addBookFrm.onsubmit = addBook;
//deleteBtn.onclick = removeBook;


// Load Page

refreshTable()


console.log("End of javascript reached");