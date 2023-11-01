const myLibrary = [];

const bookContainer = document.querySelector("#book-container");
const addBook = document.querySelector("#add-book");
const dialog = document.querySelector("dialog");
const title = dialog.querySelector("#title");
const author = dialog.querySelector("#author");
const pages = dialog.querySelector("#pages");
const read = dialog.querySelector("#read");
const form = document.querySelector("form");
const submitDialog = document.querySelector("#submit-dialog");
const cancelDialog = document.querySelector("#cancel-dialog");

const GREEN = "#90ee90";
const RED = "#ee9090";


addBook.addEventListener("click", () => dialog.showModal());
form.addEventListener("submit", (event) => {
  event.preventDefault();
  addBookToLibrary(title.value, author.value, pages.value, read.checked);
  [title.value, author.value, pages.value, read.checked] = ["", "", "", false];
  dialog.close();
});
cancelDialog.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (!form.contains(event.target)) dialog.close();
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);

  const bookHTML = document.createElement("div");

  const t = document.createElement("p");
  t.textContent = "Title: " + book.title;
  const a = document.createElement("p");
  a.textContent = "Author: " + book.author;
  const p = document.createElement("p");
  p.textContent = "Pages: " + book.pages;

  const r = document.createElement("button");
  r.textContent = book.read ? "Read" : "Not read";
  r.style.backgroundColor = book.read ? GREEN : RED;
  r.addEventListener('click', () => {
    r.style.backgroundColor = book.read ? RED : GREEN;
    r.textContent = book.read ? "Not read" : "Read"
    book.read = book.read ? false : true;
  });

  const remove = document.createElement("button");
  remove.textContent = "Remove";
  remove.addEventListener("click", (event) => {
    bookContainer.removeChild(event.target.parentElement);
    myLibrary.splice(myLibrary.indexOf(book), 1);
  });

  bookHTML.appendChild(t);
  bookHTML.appendChild(a);
  bookHTML.appendChild(p);
  bookHTML.appendChild(r);
  bookHTML.appendChild(remove);

  bookContainer.appendChild(bookHTML);
}
