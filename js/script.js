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
    constructor(){
        this.books = []
    }
    
    addBook(book) {
        this.books.push(book)
    }
}

// Declarations

const library = new Library()
const booksList = document.getElementById('booksList')
const booksTable = document.getElementById('booksTable')
console.log(booksList)


// Dummy Data

library.addBook(new Book("Brave New World","Aldous Huxley",50,false))
library.addBook(new Book("Nineteen Eighy-Four","George Orwell",60,false))
library.addBook(new Book("Mort","Terry Pratchett",70,false))
library.addBook(new Book("Fire & Blood","George R.R. Martin",80,false))

// Functions

function createTableRow(book) {

    const tableRow = document.createElement('tr')
    const rowTitle = document.createElement('td')
    const rowAuthor = document.createElement('td')
    const rowPages = document.createElement('td')
    const rowIsRead = document.createElement('td')

    rowTitle.textContent = book.title
    rowAuthor.textContent = book.author
    rowPages.textContent = book.pages
    rowIsRead.textContent = book.isRead

    tableRow.appendChild(rowTitle)
    tableRow.appendChild(rowAuthor)
    tableRow.appendChild(rowPages)
    tableRow.appendChild(rowIsRead)
    booksTable.appendChild(tableRow)

}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

// Load Page

for (let book of library.books) {
    console.log(book.title)
    createTableRow(book)
}

closeForm()


console.log("End of javascript reached")