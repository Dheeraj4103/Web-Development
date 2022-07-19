function book(title, author, pages, read) {
    this.title = title; // book title
    this.author = author; // author of the book
    this.pages = pages; // no of pages in book
    this.read = read; // whether book has already read or not

    this.info = function () {  // function to return all details
        var ans = `${this.title} by ${this.author}, ${this.pages} pages, `;
        if (read) { // if book is already read
            ans = ans + "already read";
        }
        else {
            ans = ans + "not read yet";
        }
        return ans;
    }
}

var thehobbit = new book("The Hobbit", "J.R.R. Tolkien", 295, false);

console.log(thehobbit);