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
    displaybooks();
});


function removebook (){
    books.splice(this.parentNode, 1);
    this.parentNode.remove();
}

function displaybooks(){
    let displayBooks = document.querySelector('.display-books');
    displayBooks.innerHTML = "";

    books.forEach(function (book) {
        let mainDiv = document.createElement("div");
        mainDiv.classList.add('book');

        let title = document.createElement("h2");
        title.classList.add('book-title');
        title.textContent = book.title;

        let author = document.createElement("h3");
        author.classList.add('book-author');
        author.textContent = book.author;

        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("btn-danger");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", removebook);
        
        mainDiv.append(title, author,deleteBtn);
        displayBooks.appendChild(mainDiv);
    });

}