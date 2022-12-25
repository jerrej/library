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

const library = new Library()

library.addBook(new Book("Brave New World","Aldous Huxley"))
library.addBook(new Book("Nineteen Eighy-Four","George Orwell"))
library.addBook(new Book("Fire & Blood","George R.R. Martin"))
library.addBook(new Book("Mort","Terry Pratchett"))


for (let book of library.books) {
    console.log(book.title)
}


  console.log("End of javascript reached")