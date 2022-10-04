const addNew = document.querySelector('#link-add');
const linkList = document.querySelector('#link-list');
const linkContact = document.querySelector('#link-contact');
const divList = document.querySelector('.container-list');
const divAdd = document.querySelector('#books');
const divContact = document.querySelector('.div-contact');

const addNewBooks = () => {
  divAdd.style.display = 'flex';
  divList.style.display = 'none';
  divContact.style.display = 'none';
  addNew.style.color = '#006abc';
  linkList.style.color = '#000';
  linkContact.style.color = '#000';
};

addNew.addEventListener('click', addNewBooks);

const linkListBooks = () => {
  divList.style.display = 'flex';
  divAdd.style.display = 'none';
  divContact.style.display = 'none';
  linkList.style.color = '#006abc';
  addNew.style.color = '#000';
  linkContact.style.color = '#000';
};

linkList.addEventListener('click', linkListBooks);

const linkContactBooks = () => {
  divContact.style.display = 'block';
  divList.style.display = 'none';
  divAdd.style.display = 'none';
  linkContact.style.color = '#006abc';
  addNew.style.color = '#000';
  linkList.style.color = '#000';
};

linkContact.addEventListener('click', linkContactBooks);
