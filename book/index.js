// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

// Create references for the pages dynamically
const pages = Array.from({ length: 51 }, (_, i) => document.querySelector(`#p${i + 1}`));

// Event Listener
prevBtn.addEventListener("pointerdown", goPrevPage);
nextBtn.addEventListener("pointerdown", goNextPage);

// Business Logic
let currentLocation = 1;
const numOfPapers = 51;

function closeBook(isAtBeginning) {
    book.style.transform = isAtBeginning ? "translateX(0%)" : "translateX(-50%)"; // Use a ternary operator for cleaner code
}

function goNextPage() {
    if (currentLocation < numOfPapers) {
        pages[currentLocation - 1].classList.add("flipped"); // Add the "flipped" class to the current page
        currentLocation++;
    }
}

function goPrevPage() {
    if (currentLocation > 1) {
        if (currentLocation === 2) {
            closeBook(true); // Close the book if we are at the first page
        }
        pages[currentLocation - 2].classList.remove("flipped"); // Remove the "flipped" class from the previous page
        currentLocation--;
    }
}
