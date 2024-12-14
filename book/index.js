// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

// Create references for the pages dynamically
const pages = [];
for (let i = 1; i <= 51; i++) {
    pages.push(document.querySelector(`#p${i}`));
}

// Event Listener
prevBtn.addEventListener("pointerdown", goPrevPage);
nextBtn.addEventListener("pointerdown", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 51;
let maxLocation = numOfPapers + 1;

function closeBook(isAtBeginning) {
    if (isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(-50%)"; // Adjust as needed
    }
}

function goNextPage() {
    if (currentLocation < maxLocation) {
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
