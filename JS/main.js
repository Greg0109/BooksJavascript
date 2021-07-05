let books = [];

function book(title, author) {
    this.title = title;
    this.author = author;
}
 
function newBook(title, author) {
    let newestBook = new book(title, author);
    books.push(newestBook);
}

let addButton = document.getElementById("add-button");

addButton.addEventListener("click", (data) => {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    newBook(title, author);
    //console.log(books)
});