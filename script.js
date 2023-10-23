const myLibrary = [];

const bookContainer = document.querySelector("#book-container");
const addBook = document.querySelector("#add-book");
const dialog = document.querySelector("dialog");
const cancelDialog = document.querySelector("#cancel-dialog");

addBook.addEventListener("click", () => dialog.showModal());
cancelDialog.addEventListener("click", () => dialog.close());

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;
}

function addBookToLibrary(title, author, pages) {
  const book = new Book(title, author, pages);
  myLibrary.push(book);

  const bookHTML = document.createElement("div");
  const t = document.createElement("p");
  t.textContent = book.title;
  const a = document.createElement("p");
  a.textContent = book.author;
  const p = document.createElement("p");
  p.textContent = book.pages;
  const r = document.createElement("button");
  r.textContent = book.read ? "read" : "Not read";
  r.style.backgroundColor = book.read ? "green" : "red";
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", () => {
    bookContainer.removeChild(removeButton.parentElement);
    myLibrary = myLibrary.filter((item) => item != book);
  });
  bookHTML.appendChild(t, a, p, r, removeButton);
}
