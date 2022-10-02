/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */

function getInput() {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const book = new Book(title.value, author.value, Math.random());
  return book;
}

class Library {
  constructor() {
    this.data = [];
  }

  addBook(book) {
    if (getInput().title !== '' && getInput().author !== '') {
      this.data.push(book);
      localStorage.setItem('library', JSON.stringify(this.data));
      addToUI(book);
    }
  }

  removeBook(id) {
    const book = document.getElementById(id);
    book.remove();
    this.data = this.data.filter((bookObj) => bookObj.id !== id);
    localStorage.setItem('library', JSON.stringify(this.data));
  }
}

const library = new Library();

function addToUI(bookObj) {
  const bookList = document.getElementById('lists');
  const book = document.createElement('li');
  book.setAttribute('id', bookObj.id);
  book.innerHTML = `<p>"${bookObj.title}" by ${bookObj.author}</p>`;
  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'effacer');
  deleteBtn.innerHTML = 'Remove';
  deleteBtn.addEventListener('click', () => {
    library.removeBook(bookObj.id);
  });
  book.appendChild(deleteBtn);
  bookList.appendChild(book);
  if (localStorage.getItem('library').length > 1) {
    bookList.style.border = '2px solid black';
  }
}

// Add Button
const addButton = document.getElementById('btn');
addButton.addEventListener('click', () => {
  const book = getInput();
  library.addBook(book);
  // library.addNewBooks();
});

// Load page
window.onload = () => {
  library.data = JSON.parse(localStorage.getItem('library' || '[]'));
  if (library.data === null) {
    library.data = [];
    return;
  }

  library.data.forEach((book) => addToUI(book));
};