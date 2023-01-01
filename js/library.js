export default class Library {
  constructor() {
    this.books = [];
  }

  getBook(index) {
    return this.books[index];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(index) {
    this.books.splice(index, 1);
  }

  toggleRead(index) {
    this.books[index].isRead = !this.books[index].isRead;
  }
}
