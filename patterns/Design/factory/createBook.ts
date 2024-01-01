export class Book {
  title: string;
  author: string;
  isbn: string;

  constructor(title: string, author: string, isbn: string ) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }

  getBook () {
    return this;
  }
}
