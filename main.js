const myLibrary = []; // To store newly created book objects

const submitBtn = document.querySelector("#btnSubmit");
const bookWrapper = document.querySelector("div.wrapper");
const formCon = document.querySelector("form");

// Event listener for when users click Add Book button in header.
submitBtn.addEventListener("click", addBookToLibrary);


// Target remove button by using event delegation (i.e Event Bubbling)
// Here I targetted bookWrapper since it is not being dynamically created using JS.
bookWrapper.addEventListener("click", function(event) {

    let removeBtnIdx = document.querySelectorAll(".removeBtn");
    let removeBook = document.querySelectorAll(".book");

    // Removes book card from HTML and myLibrary.
    if(event.target.classList.contains("removeBtn")) {

        let removeBookIdx = event.target.dataset.idx;
        console.log(`Index removed: ${removeBookIdx}`);

        removeBook.forEach((bookIndex) => {
            if(bookIndex.dataset.bookIdx == removeBookIdx) {
                bookIndex.remove();
            }

            if(bookIndex.dataset.bookIdx >= removeBookIdx) {
                bookIndex.dataset.bookIdx = `${bookIndex.dataset.bookIdx-1}`;
            }
        })

        removeBtnIdx.forEach((btnidx) => {
            if(btnidx.dataset.idx >= removeBookIdx) {
                btnidx.dataset.idx = `${btnidx.dataset.idx-1}`;
            }
        })

        myLibrary.splice(removeBookIdx, 1);
        console.log(myLibrary);
    }

    // Dynamically changes "read" status on each book card.
    if(event.target.classList.contains("slider")) {
        
        let sliderIdx = event.target.dataset.idx;
        let sliderElem = document.querySelectorAll("span.slider.round");

        // Changes read status
        sliderElem.forEach((slider) => {

            if(slider.dataset.idx == sliderIdx && slider.classList.contains("read")) {
                slider.classList.remove("read");
                myLibrary[sliderIdx].read = "no";

            } else if(slider.dataset.idx == sliderIdx) {
                slider.classList.add("read");
                myLibrary[sliderIdx].read = "yes";

            }
        })

        // Changes background color of each book card.
        removeBook.forEach((book) => {
            
            if(book.dataset.bookIdx == sliderIdx && book.classList.contains("read")) {
                book.classList.remove("read");

            } else if(book.dataset.bookIdx == sliderIdx) {
                book.classList.add("read");
            }
        })
    }
})


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

    // Check whether user enters all input fields
    let checkInputs = document.querySelectorAll("input");
    let collectedInputs = [];

    checkInputs.forEach((input) => {
        if(input.value) {
            collectedInputs.push(input.value);
        }
    })

    // If all fields are entered (including pages > 0), form is submitted.
    if(collectedInputs.length === checkInputs.length) {
        if(bookPage > 0) {      
            event.preventDefault(); // If pages > 0, disables original form function which sends data to server.

            // Create new book object each time user fills in form and push to myLibrary array.
            let newBook = new Book(bookTitle, bookAuthor, bookPage, bookRead);
            myLibrary.push(newBook);

            // Create book card
            const newBookCard = document.createElement("div");
            newBookCard.setAttribute("class", "book");

            const newBookCardBtns = document.createElement("div");
            newBookCardBtns.setAttribute("class", "buttons");

            newBookCard.append(newBookCardBtns);

            // Creates slider button
            const sliderLabel = document.createElement("label");
            sliderLabel.setAttribute("class", "switch");

            const sliderInput = document.createElement("input");
            sliderInput.setAttribute("type", "checkbox");

            const sliderSpan = document.createElement("span");
            sliderSpan.setAttribute("class", "slider round");

            newBookCardBtns.append(sliderLabel);
            sliderLabel.append(sliderInput);
            sliderLabel.append(sliderSpan);

            // Creates remove button
            const removeBtn = document.createElement("button");
            removeBtn.setAttribute("type", "button");
            removeBtn.setAttribute("class", "removeBtn");

            const removeBtnTxt = document.createTextNode("Remove");
            removeBtn.append(removeBtnTxt);

            newBookCardBtns.append(removeBtn);

            // Create book card content
            const bookContent = document.createElement("div");
            bookContent.setAttribute("class", "bookContent");
            bookContent.innerHTML = newBook.info();
            
            newBookCard.append(bookContent);

            // Append book card to wrapper
            bookWrapper.append(newBookCard);

            // Dynamically create data attribute for each book card based on index in myLibrary array
            for(let i=0; i<myLibrary.length; i++) {
                newBookCard.dataset.bookIdx = `${i}`;
                removeBtn.dataset.idx = `${i}`;
                sliderSpan.dataset.idx = `${i}`;
            };

            // Sets book card read status if book already read
            if(myLibrary[myLibrary.length-1].read == "yes") {
                
                // Read class added to slider
                sliderInput.checked = true;
                sliderSpan.setAttribute("class", "slider round read");

                // Read class added to book card div
                newBookCard.setAttribute("class", "book read");
            }

            // Resets form when submitted.
            formCon.reset();
            dialog.close();
        }
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