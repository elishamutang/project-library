const myLibrary = []; // to store book objects
const submitBtn = document.querySelector("#btnSubmit");
const book = document.querySelector("div.main");
const formCon = document.querySelector("form");

submitBtn.addEventListener("click", addBookToLibrary);

// Book object constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Takes input from user through form and creates Book object.
function addBookToLibrary(event) {

    // Check whether user has filled in all inputs
    const collectInputs = document.querySelectorAll("input");
    let collectedInputs = [];

    collectInputs.forEach((input) => {
        if(input.value) {
            collectedInputs.push(input.value);
        }
    })

    if(collectedInputs.length === collectInputs.length) {
        event.preventDefault();
        console.log(collectedInputs);
        formCon.reset();
        dialog.close();
    }
}

// Opens up dialog which contains a form to insert book data

const addBook = document.getElementById("addBtn");
const closeDialog = document.querySelector("button[formmethod=dialog]");
const dialog = document.querySelector("dialog");

addBook.addEventListener("click", (event) => {
    dialog.showModal();
})

closeDialog.addEventListener("click", () => {
    dialog.close();
})