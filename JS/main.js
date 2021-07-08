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

function getDate() {
  var DateTime = luxon.DateTime;
  const dateDiv = document.getElementById('date');
  const date = DateTime.now().toFormat('MMMM dd, yyyy - HH:mm:ss');
  console.log(date);
  dateDiv.innerHTML = '';
  const datetext = document.createElement('p');
  datetext.classList.add('text-dark');
  datetext.textContent =  date;
  dateDiv.appendChild(datetext);
}

function displaybooks(show) {
  const displayBooks = document.querySelector('.display-books');
  displayBooks.innerHTML = '';
  if (show) {
    const library = new Book();
    const libraryTitle = document.createElement('h1');
    libraryTitle.classList.add('w-100');
    libraryTitle.classList.add('text-center');
    libraryTitle.id = 'books-header';
    libraryTitle.textContent = 'Books';
    displayBooks.append(libraryTitle);
    if (library.books.length > 0) {
      library.books.forEach((book, index) => {
        const mainDiv = document.createElement('div');
        mainDiv.classList.add('book');
        if (index % 2 !== 0) {
          mainDiv.classList.add('book-bg');
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
        document.getElementById('library-display').style.borderStyle = 'double';
      });
    }
  } else {
    document.getElementById('library-display').style.borderStyle = '';
  }
}

function showForm(show) {
  if (show) {
    const formDiv = document.getElementById('add-book-form');
    formDiv.innerHTML = "<form action='' class='form  text-center'><br><div class='title-border-top'></div><h2 class='add-book-title'>Add a new book</h2><br><input type='text' name='title' id='title' placeholder='Title'><br><br><input type='text' name='author' id='author' placeholder='Author'></form><div class='form-btn'> <button type='submit' class='text-center ' id='add-button'>Add</button></div>";

    const addButton = document.getElementById('add-button');
    addButton.addEventListener('click', () => {
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      const newBook = new Book(title, author);
      newBook.addBook();
      displaybooks(true);
      showForm(false);
      getDate();
    });
  } else {
    const formDiv = document.getElementById('add-book-form');
    formDiv.innerHTML = '';
  }
}

function showContact(show) {
  if (show) {
    const contactDiv = document.getElementById('contact');
    contactDiv.innerHTML = '<div class="contact-info"><h2>Contact Information</h2><p>Do you have any questions or just want to say "Hello" ? you can reach out to us 😀!</p><ul><li>Our Email: aganzemataba@gmail.com</li><li>Our Phone: +250784165089</li><li>Our Adress: Maranatha 65, 8891, Goma Town, Congo DRC </li></ul></div>';
  } else {
    const contactDiv = document.getElementById('contact');
    contactDiv.innerHTML = '';
  }
}

const libraryTab = document.getElementById('libray-tab');
libraryTab.addEventListener('click', () => {
  displaybooks(true);
  showForm(false);
  showContact(false);
  getDate();
});

const newBookTab = document.getElementById('new-book-tab');
newBookTab.addEventListener('click', () => {
  showForm(true);
  displaybooks(false);
  showContact(false);
  getDate();
});

const contactTab = document.getElementById('contact-tab');
contactTab.addEventListener('click', () => {
  showForm(false);
  displaybooks(false);
  showContact(true);
  getDate();
});

getDate();
displaybooks(true);