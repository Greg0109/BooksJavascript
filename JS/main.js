let books = [];

if ('Books' in localStorage) {
  books = JSON.parse(localStorage.getItem('Books'));
}

class Book {
  constructor (title, author) {
    this.title = title;
    this.author = author;
  }

  addBook() {
    let newestBook = new Book(this.title, this.author);
    if (books.length > 0) {
      books.push(newestBook);
    } else {
      books = [newestBook];
    }
    localStorage.setItem('Books', JSON.stringify(books));
  }

  removeBook(index) {
    books.splice(index, 1);
    location.reload();
    localStorage.setItem('Books', JSON.stringify(books));
  }
}

const addButton = document.getElementById('add-button');

function displaybooks() {
  const displayBooks = document.querySelector('.display-books');
  displayBooks.innerHTML = '';

  if (books.length > 0) {
    books.forEach(function(book,index) {
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
      book = new Book(book.title, book.author);
      deleteBtn.onclick = function() {
        book.removeBook(index);
      }

      mainDiv.append(title, author, deleteBtn);
      displayBooks.appendChild(mainDiv);
    });
  }
}

addButton.addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  let newBook = new Book(title, author);
  newBook.addBook();
  displaybooks();
});

displaybooks();