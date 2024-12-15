
// JavaScript Code
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector(".book");

const numOfPages = 51; // Total number of pages
let currentPage = 0; // Track the current page (0 = cover, 1 = first page, etc.)

// Dynamically create pages and add to the book
const createPage = (pageNumber) => {
    const pageContainer = document.createElement("div");
    pageContainer.classList.add("paper");
    pageContainer.dataset.page = pageNumber;

    const frontPage = document.createElement("div");
    frontPage.classList.add("front");

    if (pageNumber === 0) {
        frontPage.style.backgroundImage = `url('pages/front page.png')`;
    } else {
        frontPage.style.backgroundImage = `url('pages/page${pageNumber}.png')`;
    }

    const backPage = document.createElement("div");
    backPage.classList.add("back");
    backPage.style.backgroundImage = `url('pages/back.png')`;

    pageContainer.appendChild(frontPage);
    pageContainer.appendChild(backPage);
    book.appendChild(pageContainer);
};

// Initialize the book with pages
for (let i = 0; i < numOfPages; i++) {
    createPage(i);
}

// Adjust the z-index of the pages
function adjustPageZIndex() {
    const allPages = document.querySelectorAll(".paper");
    allPages.forEach((page, index) => {
        if (index < currentPage) {
            page.style.zIndex = index + 1; // Ensure flipped pages stay in order
        } else if (index === currentPage) {
            page.style.zIndex = allPages.length + 1; // Current page on top
        } else {
            page.style.zIndex = allPages.length - index; // Maintain proper layering
        }
    });
}

// Go to the next page
function goNextPage() {
    if (currentPage < numOfPages - 1) {
        const currentPaper = document.querySelectorAll(".paper")[currentPage];
        currentPaper.classList.add("flipped");
        currentPage++;
        adjustPageZIndex();
    }
}

// Go to the previous page
function goPrevPage() {
    if (currentPage > 0) {
        const currentPaper = document.querySelectorAll(".paper")[currentPage - 1];
        currentPaper.classList.remove("flipped");
        currentPage--;
        adjustPageZIndex();
    }
}

// Initialize the book
function initializeBook() {
    adjustPageZIndex();
}
initializeBook();

// Event Listeners for Navigation Buttons
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);