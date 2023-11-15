const myLibrary = []; // to store book objects
// const title = document.getElementById("title");
// const author = document.getElementById("author");
const submitBtn = document.querySelector("#submit");
const book = document.querySelector("div.main");

submitBtn.addEventListener("click", addBookToLibrary);

function Book() {

}

function addBookToLibrary() {
    console.log(e);
    let bookTitle = document.getElementById("title");
    let author = document.getElementById("author").value;

    console.log(bookTitle);
}

// Opens up dialog which contains a form to insert book data

const addBook = document.getElementById("addBtn");
const closeDialog = document.querySelector("button[formmethod=dialog]");
const dialog = document.querySelector("dialog");

addBook.addEventListener("click", () => {
    dialog.showModal();
})

closeDialog.addEventListener("click", () => {
    dialog.close();
})