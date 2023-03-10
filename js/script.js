// Constructors

import Book from './book.js';
import Library from './library.js'

const library = new Library()

// DOM Element Declarations

const booksTbl = document.querySelector("#booksTbl");
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

function createTableRow(book, index) {

  const tableRow = document.createElement('tr');
  const title = document.createElement('td');
  const author = document.createElement('td');
  const pages = document.createElement('td');
  const isRead = document.createElement('td');
  const buttonGroup = document.createElement('td');
  const readBtn = document.createElement('button');
  const removeBtn = document.createElement('button');

  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = book.pages;
  isRead.textContent = book.isRead;
  readBtn.textContent = "Read";
  readBtn.onclick = toggleRead;
  removeBtn.textContent = "Remove";
  removeBtn.onclick = removeBook;
  
  buttonGroup.setAttribute("value", index)
  buttonGroup.appendChild(readBtn);
  buttonGroup.appendChild(removeBtn);

  tableRow.appendChild(title);
  tableRow.appendChild(author);
  tableRow.appendChild(pages);
  tableRow.appendChild(isRead);
  tableRow.appendChild(buttonGroup);

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

function getBookInput() {

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const isRead = document.getElementById('isRead').checked;
  return new Book(title, author, pages, isRead);

}

function refreshTable() {

  booksTbl.textContent = '';
  for (let book of library.books) {
    createTableRow(book, library.books.indexOf(book));
  }

}

function addBook(e) {

  e.preventDefault();
  const newBook = getBookInput()
  library.addBook(newBook)
  closeModal();
  refreshTable();

}

function removeBook(e) {
  
  library.removeBook(e.target.parentElement.getAttribute('value'));
  refreshTable();
 
}

function toggleRead(e) {

  library.toggleRead(e.target.parentElement.getAttribute('value'));
  refreshTable();

}

// Event Listeners

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
addBookFrm.onsubmit = addBook;


// Load Page

refreshTable();

// End
console.log("End of javascript");