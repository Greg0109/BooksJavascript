class Book {
  books = JSON.parse(localStorage.getItem('Books')) || [];

  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook() {
    const newestBook = new Book(this.title, this.author);
    if (this.books.length > 0) {
      this.books.push(newestBook);
    } else {
      this.books = [newestBook];
    }
    localStorage.setItem('Books', JSON.stringify(this.books));
  }

  removeBook(index) {
    this.books.splice(index, 1);
    window.location.reload();
    localStorage.setItem('Books', JSON.stringify(this.books));
  }
}

const addButton = document.getElementById('add-button');

function displaybooks() {
  const displayBooks = document.querySelector('.display-books');
  displayBooks.innerHTML = '';
  const library = new Book();
  if (library.books.length > 0) {
    library.books.forEach((book, index) => {
      const mainDiv = document.createElement('div');
      mainDiv.classList.add('book');
      if (index%2 != 0) {
        mainDiv.classList.add('bg-secondary')
      }

      const title = document.createElement('h2');
      title.classList.add('book-title');
      title.textContent = book.title;

      const author = document.createElement('h2');
      author.classList.add('book-author');
      author.textContent = book.author;

      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('btn-dark');
      deleteBtn.classList.add('delete-book-button');
      deleteBtn.textContent = 'Delete';
      book = new Book(book.title, book.author);
      deleteBtn.onclick = function deleteButton() {
        book.removeBook(index);
      };

      mainDiv.append(title, author, deleteBtn);
      displayBooks.appendChild(mainDiv);
    });
  }
}

addButton.addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const newBook = new Book(title, author);
  newBook.addBook();
  displaybooks();
});

displaybooks();