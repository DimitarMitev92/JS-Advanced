class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            throw new Error(`Not enough space in the collection.`);
        }

        this.books.push({ bookName, bookAuthor, payed: false });
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        if (!this.books.find(book => book.bookName === bookName)) {
            throw new Error(`${bookName} is not in the collection.`);
        }
        let index = this.books.findIndex(book => book.bookName === bookName);
        if (this.books[index].payed === true) {
            throw new Error(`${bookName} has already been paid.`);
        } else {
            this.books[index].payed = true;
            return `${bookName} has been successfully paid.`;
        }
    }

    removeBook(bookName) {
        if (!this.books.find(book => book.bookName === bookName)) {
            throw new Error(`The book, you're looking for, is not found.`);
        }
        let index = this.books.findIndex(book => book.bookName === bookName);
        if (this.books[index].payed === false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        } else {
            this.books.splice(index, 1);
            return `${bookName} remove from the collection.`;
        }
    }

    getStatistics(bookAuthor) {
        if (bookAuthor === undefined) {
            let result = [`The book collection has ${this.capacity - this.books.length} empty spots left.`];

            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName)).forEach(book => result.push(`${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.`));
            return result.join('\n');
        } else if (!this.books.find(book => book.bookAuthor === bookAuthor)) {
            throw new Error(`${bookAuthor} is not in the collection.`);
        } else if (this.books.find(book => book.bookAuthor === bookAuthor)) {
            let currentBook = this.books.find(book => book.bookAuthor === bookAuthor);
            return `${currentBook.bookName} == ${currentBook.bookAuthor} - ${currentBook.payed ? 'Has Paid' : 'Not Paid'}.`;
        }
    }
}