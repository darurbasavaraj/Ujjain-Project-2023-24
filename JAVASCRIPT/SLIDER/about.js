

const about1 = document.querySelector('.about1');
const prevBtnabout1 = document.querySelector('.prev-about1');
const nextBtnabout1 = document.querySelector('.next-about1');
let slideIndexabout1 = 0;
let autoSlideIntervalabout1;

// Function to move the slider to a specific index
function moveToSlideabout1(index) {
    if (index < 0) {
        index = about1.children.length - 1;
    } else if (index >= about1.children.length) {
        index = 0;
    }

    const translateX = -index * 50; // Adjust the width of the product card
    about1.style.transform = `translateX(${translateX}px)`;
    slideIndexabout1 = index;

    // Hide or show prevBtn and nextBtn based on slideIndex
    prevBtnabout1.style.display = slideIndexabout1 === 0 ? 'none' : 'block';
    nextBtnabout1.style.display = slideIndexabout1 === about1.children.length - 1 ? 'none' : 'block';
}

// Event listeners for previous and next buttons
prevBtnabout1.addEventListener('click', () => {
    moveToSlideabout1(slideIndexabout1 - 1);
    resetAutoSlideabout1(); // Reset auto-slide timer on manual interaction
});

nextBtnabout1.addEventListener('click', () => {
    moveToSlideabout1(slideIndexabout1 + 1);
    resetAutoSlideabout1(); // Reset auto-slide timer on manual interaction
});

// Function to start auto-sliding
function startAutoSlideabout1() {
    autoSlideIntervalabout1 = setInterval(() => {
        moveToSlideabout1(slideIndexabout1 + 1);

        // Check if we reached the end, and if so, loop back to the start
        if (slideIndexabout1 === about1.children.length - 1) {
            setTimeout(() => {
                moveToSlideabout1(0);
            }, 3000); // Adjust the delay if needed
        }
    }, 3000); // Adjust the interval for auto-sliding
}

// Function to stop auto-sliding
function stopAutoSlideabout1() {
    clearInterval(autoSlideIntervalabout1);
}

// Function to reset auto-slide timer
function resetAutoSlideabout1() {
    stopAutoSlideabout1();
    startAutoSlideabout1();
}

// Start auto-sliding when the page loads
startAutoSlideabout1();

// Pause auto-sliding when the user interacts with the slider
about1.addEventListener('mouseenter', stopAutoSlideabout1);
about1.addEventListener('mouseleave', startAutoSlideabout1);