const shopping = document.querySelector('.shopping');
const prevBtnshopping = document.querySelector('.prev-shopping');
const nextBtnshopping = document.querySelector('.next-shopping');
let slideIndexshopping = 0;
let autoSlideIntervalshopping;

// Function to move the slider to a specific index
function moveToSlideshopping(index) {
    if (index < 0) {
        index = shopping.children.length - 1;
    } else if (index >= shopping.children.length) {
        index = 0;
    }

    const translateX = -index * 50; // Adjust the width of the product card
    shopping.style.transform = `translateX(${translateX}px)`;
    slideIndexshopping = index;

    // Hide or show prevBtn and nextBtn based on slideIndex
    prevBtnshopping.style.display = slideIndexshopping === 0 ? 'none' : 'block';
    nextBtnshopping.style.display = slideIndexshopping === shopping.children.length - 1 ? 'none' : 'block';
}

// Event listeners for previous and next buttons
prevBtnshopping.addEventListener('click', () => {
    moveToSlideshopping(slideIndexshopping - 1);
    resetAutoSlideshopping(); // Reset auto-slide timer on manual interaction
});

nextBtnshopping.addEventListener('click', () => {
    moveToSlideshopping(slideIndexshopping + 1);
    resetAutoSlideshopping(); // Reset auto-slide timer on manual interaction
});

// Function to start auto-sliding
function startAutoSlideshopping() {
    autoSlideIntervalshopping = setInterval(() => {
        moveToSlideshopping(slideIndexshopping + 1);

        // Check if we reached the end, and if so, loop back to the start
        if (slideIndexshopping === shopping.children.length - 1) {
            setTimeout(() => {
                moveToSlideshopping(0);
            }, 3000); // Adjust the delay if needed
        }
    }, 6000); // Adjust the interval for auto-sliding
}

// Function to stop auto-sliding
function stopAutoSlideshopping() {
    clearInterval(autoSlideIntervalshopping);
}

// Function to reset auto-slide timer
function resetAutoSlideshopping() {
    stopAutoSlideshopping();
    startAutoSlideshopping();
}

// Start auto-sliding when the page loads
startAutoSlideshopping();

// Pause auto-sliding when the user interacts with the slider
shopping.addEventListener('mouseenter', stopAutoSlideshopping);
shopping.addEventListener('mouseleave', startAutoSlideshopping);



const shopping1 = document.querySelector('.shopping1');
const prevBtnshopping1 = document.querySelector('.prev-shopping1');
const nextBtnshopping1 = document.querySelector('.next-shopping1');
let slideIndexshopping1 = 0;
let autoSlideIntervalshopping1;

// Function to move the slider to a specific index
function moveToSlideshopping1(index) {
    if (index < 0) {
        index = shopping1.children.length - 1;
    } else if (index >= shopping1.children.length) {
        index = 0;
    }

    const translateX = -index * 50; // Adjust the width of the product card
    shopping1.style.transform = `translateX(${translateX}px)`;
    slideIndexshopping1 = index;

    // Hide or show prevBtn and nextBtn based on slideIndex
    prevBtnshopping1.style.display = slideIndexshopping1 === 0 ? 'none' : 'block';
    nextBtnshopping1.style.display = slideIndexshopping1 === shopping1.children.length - 1 ? 'none' : 'block';
}

// Event listeners for previous and next buttons
prevBtnshopping1.addEventListener('click', () => {
    moveToSlideshopping1(slideIndexshopping1 - 1);
    resetAutoSlideshopping1(); // Reset auto-slide timer on manual interaction
});

nextBtnshopping1.addEventListener('click', () => {
    moveToSlideshopping1(slideIndexshopping1 + 1);
    resetAutoSlideshopping1(); // Reset auto-slide timer on manual interaction
});

// Function to start auto-sliding
function startAutoSlideshopping1() {
    autoSlideIntervalshopping1 = setInterval(() => {
        moveToSlideshopping1(slideIndexshopping1 + 1);

        // Check if we reached the end, and if so, loop back to the start
        if (slideIndexshopping1 === shopping1.children.length - 1) {
            setTimeout(() => {
                moveToSlideshopping1(0);
            }, 3000); // Adjust the delay if needed
        }
    }, 3000); // Adjust the interval for auto-sliding
}

// Function to stop auto-sliding
function stopAutoSlideshopping1() {
    clearInterval(autoSlideIntervalshopping1);
}

// Function to reset auto-slide timer
function resetAutoSlideshopping1() {
    stopAutoSlideshopping1();
    startAutoSlideshopping1();
}

// Start auto-sliding when the page loads
startAutoSlideshopping1();

// Pause auto-sliding when the user interacts with the slider
shopping1.addEventListener('mouseenter', stopAutoSlideshopping1);
shopping1.addEventListener('mouseleave', startAutoSlideshopping1);