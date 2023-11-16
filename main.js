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
    const checkInput = document.querySelectorAll("input");
    console.log(checkInput);

    checkInput.forEach((input) => {
        if(input.value != "") {
            console.log(input.value);
        } else {
            console.log("empty");
        }
    })
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