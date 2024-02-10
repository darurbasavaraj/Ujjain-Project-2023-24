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

    const translateX = -index * 210; // Adjust the width of the product card
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


const ujjainhome1 = document.querySelector('.ujjainhome1');
const prevBtnujjainhome1 = document.querySelector('.prev-ujjainhome1');
const nextBtnujjainhome1 = document.querySelector('.next-ujjainhome1');
let slideIndexujjainhome1 = 0;
let autoSlideIntervalujjainhome1;

// Function to move the slider to a specific index
function moveToSlideujjainhome1(index) {
    if (index < 0) {
        index = ujjainhome1.children.length - 1;
    } else if (index >= ujjainhome1.children.length) {
        index = 0;
    }

    const translateX = -index * 60; // Adjust the width of the product card
    ujjainhome1.style.transform = `translateX(${translateX}px)`;
    slideIndexujjainhome1 = index;

    // Hide or show prevBtn and nextBtn based on slideIndex
    prevBtnujjainhome1.style.display = slideIndexujjainhome1 === 0 ? 'none' : 'block';
    nextBtnujjainhome1.style.display = slideIndexujjainhome1 === ujjainhome1.children.length - 1 ? 'none' : 'block';
}

// Event listeners for previous and next buttons
prevBtnujjainhome1.addEventListener('click', () => {
    moveToSlideujjainhome1(slideIndexujjainhome1 - 1);
    resetAutoSlideujjainhome1(); // Reset auto-slide timer on manual interaction
});

nextBtnujjainhome1.addEventListener('click', () => {
    moveToSlideujjainhome1(slideIndexujjainhome1 + 1);
    resetAutoSlideujjainhome1(); // Reset auto-slide timer on manual interaction
});

// Function to start auto-sliding
function startAutoSlideujjainhome1() {
    autoSlideIntervalujjainhome1 = setInterval(() => {
        moveToSlideujjainhome1(slideIndexujjainhome1 + 1);

        // Check if we reached the end, and if so, loop back to the start
        if (slideIndexujjainhome1 === ujjainhome1.children.length - 1) {
            setTimeout(() => {
                moveToSlideujjainhome1(0);
            }, 3000); // Adjust the delay if needed
        }
    }, 3000); // Adjust the interval for auto-sliding
}

// Function to stop auto-sliding
function stopAutoSlideujjainhome1() {
    clearInterval(autoSlideIntervalujjainhome1);
}

// Function to reset auto-slide timer
function resetAutoSlideujjainhome1() {
    stopAutoSlideujjainhome1();
    startAutoSlideujjainhome1();
}

// Start auto-sliding when the page loads
startAutoSlideujjainhome1();

// Pause auto-sliding when the user interacts with the slider
ujjainhome1.addEventListener('mouseenter', stopAutoSlideujjainhome1);
ujjainhome1.addEventListener('mouseleave', startAutoSlideujjainhome1);
