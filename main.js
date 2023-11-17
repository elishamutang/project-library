const myLibrary = []; // to store book objects

const submitBtn = document.querySelector("#btnSubmit");
const book = document.querySelector("div.book");
const formCon = document.querySelector("form");

submitBtn.addEventListener("click", addBookToLibrary);

// Book object constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = () => {
        return `${title}<br>${author}<br>${pages} pages <br>${read}`;
    }
}

// Takes input from user through form and creates Book object.
function addBookToLibrary(event) {

    const bookTitle = document.querySelector("#title").value;
    const bookAuthor = document.querySelector("#author").value;
    const bookPage = document.querySelector("#pages").value;
    const bookRead = document.querySelector("#read").value;

    console.log(bookTitle, bookAuthor, bookPage, bookRead);

    // Check whether user enters all input fields
    let checkInputs = document.querySelectorAll("input");
    let collectedInputs = [];

    checkInputs.forEach((input) => {
        if(input.value) {
            collectedInputs.push(input.value);
        }
    })

    if(collectedInputs.length === checkInputs.length) {
        event.preventDefault();

        let newBook = new Book(bookTitle, bookAuthor, bookPage, bookRead);
        console.log(newBook);
        myLibrary.push(newBook);

        book.innerHTML = newBook.info();

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