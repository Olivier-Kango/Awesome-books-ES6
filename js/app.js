const list = document.getElementById('lists');
const form = document.querySelector('form');
const author = document.getElementById('atr');
const title = document.getElementById('ttl');

const bookCollection = [];

function collection(title, author) {
  this.title = title;
  this.author = author;
}

function alocalStorage() {
  const key = title.value;
  localStorage.setItem(key, JSON.stringify(bookCollection));
}

function newCollection() {
  // eslint-disable-next-line new-cap
  const newCollectionList = new collection(title.value, author.value);
  bookCollection.push(newCollectionList);
  alocalStorage();
}

form.addEventListener('submit', newCollection);

function dataOutput() {
  Object.keys(localStorage).forEach((key) => {
    const dataForLocalstorage = JSON.parse(localStorage.getItem(key));
    if (localStorage) {
      dataForLocalstorage.forEach((collection) => {
        const li = document.createElement('li');
        const theBookTitle = document.createElement('span');
        const theBookAuthor = document.createElement('span');
        const deleteBtn = document.createElement('button');

        deleteBtn.textContent = 'Remove';
        deleteBtn.classList.add('Remove');
        theBookTitle.textContent = collection.title;
        theBookAuthor.textContent = collection.author;
        deleteBtn.addEventListener('click', (e) => {
          const key = collection.title;
          localStorage.removeItem(key);
          e.target.parentNode.remove();
        });
        li.classList.add('newCollection');
        theBookTitle.style.display = 'block';
        theBookAuthor.style.display = 'block';
        li.appendChild(theBookTitle);
        li.appendChild(theBookAuthor);
        li.appendChild(deleteBtn);
        list.appendChild(li);
      });
    }
  });
}

dataOutput();