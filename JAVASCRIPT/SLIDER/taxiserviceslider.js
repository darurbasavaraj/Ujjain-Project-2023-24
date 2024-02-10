

const taxiservice1 = document.querySelector('.taxiservice1');
const prevBtntaxiservice1 = document.querySelector('.prev-taxiservice1');
const nextBtntaxiservice1 = document.querySelector('.next-taxiservice1');
let slideIndextaxiservice1 = 0;
let autoSlideIntervaltaxiservice1;

// Function to move the slider to a specific index
function moveToSlidetaxiservice1(index) {
    if (index < 0) {
        index = taxiservice1.children.length - 1;
    } else if (index >= taxiservice1.children.length) {
        index = 0;
    }

    const translateX = -index * 50; // Adjust the width of the product card
    taxiservice1.style.transform = `translateX(${translateX}px)`;
    slideIndextaxiservice1 = index;

    // Hide or show prevBtn and nextBtn based on slideIndex
    prevBtntaxiservice1.style.display = slideIndextaxiservice1 === 0 ? 'none' : 'block';
    nextBtntaxiservice1.style.display = slideIndextaxiservice1 === taxiservice1.children.length - 1 ? 'none' : 'block';
}

// Event listeners for previous and next buttons
prevBtntaxiservice1.addEventListener('click', () => {
    moveToSlidetaxiservice1(slideIndextaxiservice1 - 1);
    resetAutoSlidetaxiservice1(); // Reset auto-slide timer on manual interaction
});

nextBtntaxiservice1.addEventListener('click', () => {
    moveToSlidetaxiservice1(slideIndextaxiservice1 + 1);
    resetAutoSlidetaxiservice1(); // Reset auto-slide timer on manual interaction
});

// Function to start auto-sliding
function startAutoSlidetaxiservice1() {
    autoSlideIntervaltaxiservice1 = setInterval(() => {
        moveToSlidetaxiservice1(slideIndextaxiservice1 + 1);

        // Check if we reached the end, and if so, loop back to the start
        if (slideIndextaxiservice1 === taxiservice1.children.length - 1) {
            setTimeout(() => {
                moveToSlidetaxiservice1(0);
            }, 3000); // Adjust the delay if needed
        }
    }, 3000); // Adjust the interval for auto-sliding
}

// Function to stop auto-sliding
function stopAutoSlidetaxiservice1() {
    clearInterval(autoSlideIntervaltaxiservice1);
}

// Function to reset auto-slide timer
function resetAutoSlidetaxiservice1() {
    stopAutoSlidetaxiservice1();
    startAutoSlidetaxiservice1();
}

// Start auto-sliding when the page loads
startAutoSlidetaxiservice1();

// Pause auto-sliding when the user interacts with the slider
taxiservice1.addEventListener('mouseenter', stopAutoSlidetaxiservice1);
taxiservice1.addEventListener('mouseleave', startAutoSlidetaxiservice1);