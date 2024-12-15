// Error Handling Logic
function showErrorMessage() {
    const errorMessage = document.getElementById("error-message");
    errorMessage.style.display = "block"; // Show the error message
}

function hideErrorMessage() {
    const errorMessage = document.getElementById("error-message");
    errorMessage.style.display = "none"; // Hide the error message
}

// Listen for any errors in the window (global error handler)
window.onerror = function (message, source, lineno, colno, error) {
    // Log the error for debugging purposes
    console.error(`Error occurred: ${message} at ${source}:${lineno}:${colno}`);
    
    // Show the error message
    showErrorMessage();
    
    // Optionally return true to prevent the default browser error handling
    return true;
};

// Detect long load times and show error if needed (e.g., for mobile)
document.addEventListener("DOMContentLoaded", function () {
    const loadTimeout = 8000; // 15 seconds
    let loadErrorTriggered = false;

    // Function to show the error message
    function showLoadErrorMessage() {
        showErrorMessage();
    }

    // Function to check if the page is taking too long to load
    setTimeout(function () {
        if (!loadErrorTriggered) {
            loadErrorTriggered = true;
            showLoadErrorMessage(); // Show the error message if load takes too long
        }
    }, loadTimeout);

    // Reset the timeout if page is loaded quickly
    window.addEventListener("load", function () {
        loadErrorTriggered = true; // Prevent showing error if page loads normally
    });

    // Optional: Handle mobile-specific cases (e.g., user interaction to cancel timeout)
    const isMobile = window.innerWidth <= 768; // Check for mobile devices
    if (isMobile) {
        window.addEventListener("scroll", function () {
            if (!loadErrorTriggered) {
                loadErrorTriggered = true;
                clearTimeout(loadTimeout); // Clear the timeout if user interacts
            }
        });
    }
});

// Book Logic
// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

// Create references for the pages dynamically
const pages = Array.from({ length: 51 }, (_, i) => document.querySelector(`#p${i + 1}`));

// Event Listener for Next and Previous buttons
prevBtn.addEventListener("pointerdown", goPrevPage);
nextBtn.addEventListener("pointerdown", goNextPage);

// Business Logic for Book Navigation
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
