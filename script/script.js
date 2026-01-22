const addBookBtn = document.getElementById("add-book-btn");
const addBookForm = document.getElementById("add-book-form");
const cancelAddBookBtn = document.getElementById("cancel-add-book");
const fileInput = document.getElementById("book-file");
const availableBooksSection = document.querySelector(".available-books");

// Show form
addBookBtn.addEventListener("click", () => {
    addBookForm.style.display = "block";
    addBookBtn.style.display = "none";
});

// Cancel
cancelAddBookBtn.addEventListener("click", () => {
    addBookForm.reset();
    addBookForm.style.display = "none";
    addBookBtn.style.display = "inline-block";
});

// Submit
addBookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const file = fileInput.files[0];
    if (!file) return;

    const bookItem = document.createElement("p");
    bookItem.textContent = `📘 ${file.name}`;

    availableBooksSection.appendChild(bookItem);

    addBookForm.reset();
    addBookForm.style.display = "none";
    addBookBtn.style.display = "inline-block";
});
