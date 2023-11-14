const myLibrary = []; // to store book objects

function Book() {

}

function addBookToLibrary() {

}

// Opens up dialog which contains a form to insert book data

const addBook = document.getElementById("addBtn");
const closeDialog = document.querySelector("dialog > button");
const dialog = document.querySelector("dialog");

addBook.addEventListener("click", () => {
    dialog.showModal();
})

closeDialog.addEventListener("click", () => {
    dialog.close();
})