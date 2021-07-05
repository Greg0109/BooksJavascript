let books = [];

if (localStorage.getItem['Books'] !== null) {
  books = JSON.parse(localStorage.getItem('Books'));
}

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function newBook(title, author) {
  const newestBook = new Book(title, author);
  books.push(newestBook);
  localStorage.setItem('Books', JSON.stringify(books));
}

const addButton = document.getElementById('add-button');

function removebook() {
  books.splice(this.parentNode, 1);
  this.parentNode.remove();
  localStorage.setItem('Books', JSON.stringify(books));
}

function displaybooks() {
  const displayBooks = document.querySelector('.display-books');
  displayBooks.innerHTML = '';

  books.forEach((book) => {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('book');

    const title = document.createElement('h2');
    title.classList.add('book-title');
    title.textContent = book.title;

    const author = document.createElement('h3');
    author.classList.add('book-author');
    author.textContent = book.author;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn-danger');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', removebook);

    mainDiv.append(title, author, deleteBtn);
    displayBooks.appendChild(mainDiv);
  });
}

addButton.addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  newBook(title, author);
  displaybooks();
});

displaybooks();