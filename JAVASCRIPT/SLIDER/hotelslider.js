const ujjainhome = document.querySelector('.ujjainhome');
const prevBtnujjainhome = document.querySelector('.prev-ujjainhome');
const nextBtnujjainhome = document.querySelector('.next-ujjainhome');
let slideIndexujjainhome = 0;
let autoSlideIntervalujjainhome;

// Function to move the slider to a specific index
function moveToSlideujjainhome(index) {
    if (index < 0) {
        index = ujjainhome.children.length - 1;
    } else if (index >= ujjainhome.children.length) {
        index = 0;
    }

    const translateX = -index * 80; // Adjust the width of the product card
    ujjainhome.style.transform = `translateX(${translateX}px)`;
    slideIndexujjainhome = index;

    // Hide or show prevBtn and nextBtn based on slideIndex
    prevBtnujjainhome.style.display = slideIndexujjainhome === 0 ? 'none' : 'block';
    nextBtnujjainhome.style.display = slideIndexujjainhome === ujjainhome.children.length - 1 ? 'none' : 'block';
}

// Event listeners for previous and next buttons
prevBtnujjainhome.addEventListener('click', () => {
    moveToSlideujjainhome(slideIndexujjainhome - 1);
    resetAutoSlideujjainhome(); // Reset auto-slide timer on manual interaction
});

nextBtnujjainhome.addEventListener('click', () => {
    moveToSlideujjainhome(slideIndexujjainhome + 1);
    resetAutoSlideujjainhome(); // Reset auto-slide timer on manual interaction
});

// Function to start auto-sliding
function startAutoSlideujjainhome() {
    autoSlideIntervalujjainhome = setInterval(() => {
        moveToSlideujjainhome(slideIndexujjainhome + 1);

        // Check if we reached the end, and if so, loop back to the start
        if (slideIndexujjainhome === ujjainhome.children.length - 1) {
            setTimeout(() => {
                moveToSlideujjainhome(0);
            }, 3000); // Adjust the delay if needed
        }
    }, 6000); // Adjust the interval for auto-sliding
}

// Function to stop auto-sliding
function stopAutoSlideujjainhome() {
    clearInterval(autoSlideIntervalujjainhome);
}

// Function to reset auto-slide timer
function resetAutoSlideujjainhome() {
    stopAutoSlideujjainhome();
    startAutoSlideujjainhome();
}

// Start auto-sliding when the page loads
startAutoSlideujjainhome();

// Pause auto-sliding when the user interacts with the slider
ujjainhome.addEventListener('mouseenter', stopAutoSlideujjainhome);
ujjainhome.addEventListener('mouseleave', startAutoSlideujjainhome);