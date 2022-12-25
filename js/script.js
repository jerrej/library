// Constructors

class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
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

library.addBook(new Book("Brave New World","Aldous Huxley"))
library.addBook(new Book("Nineteen Eighy-Four","George Orwell"))
library.addBook(new Book("Mort","Terry Pratchett"))
library.addBook(new Book("Fire & Blood","George R.R. Martin"))

// Functions

function createTableRow(book) {

    const tableRow = document.createElement('tr')
    const rowTitle = document.createElement('td')
    const rowAuthor = document.createElement('td')

    rowTitle.textContent = book.title
    rowAuthor.textContent = book.author

    tableRow.appendChild(rowTitle)
    tableRow.appendChild(rowAuthor)
    booksTable.appendChild(tableRow)

}

// Load page

for (let book of library.books) {
    console.log(book.title)
    createTableRow(book)
}


console.log("End of javascript reached")