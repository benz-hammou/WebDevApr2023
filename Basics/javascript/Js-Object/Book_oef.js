function Book(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
}

Book.prototype.summary = function () {
    console.log(`${this.title}${this.author}${this.year}`)
    return {
        title: this.title,
        author: this.author,
        year: this.year
    }
}

let Book1 = new Book('Deep Thinking', 'Garry Kasparov', 2018)
//Book1.summary()
let pickedBooks = []
pickedBooks.push(Book1.summary())
console.log(pickedBooks);