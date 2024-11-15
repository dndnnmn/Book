// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");
const paper6 = document.querySelector("#p6");

// Event Listener
prevBtn.addEventListener("pointerdown", goPrevPage);
nextBtn.addEventListener("pointerdown", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 7;
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
        switch (currentLocation) {
            case 1:
                paper1.classList.add("flipped");
                break;
            case 2:
                paper2.classList.add("flipped");
                break;
            case 3:
                paper3.classList.add("flipped");
                break;
            case 4:
                paper4.classList.add("flipped");
                break;
            case 5:
                paper5.classList.add("flipped");
                break;
            case 6:
                paper6.classList.add("flipped");
                break;
            default:
                throw new Error("Unknown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if (currentLocation > 1) {
        switch (currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                break;
            case 3:
                paper2.classList.remove("flipped");
                break;
            case 4:
                paper3.classList.remove("flipped");
                break;
            case 5:
                paper4.classList.remove("flipped");
                break;
            case 6:
                paper5.classList.remove("flipped");
                break;
            case 7:
                paper6.classList.remove("flipped");
                break;
            default:
                throw new Error("Unknown state");
        }
        currentLocation--;
    }
}
