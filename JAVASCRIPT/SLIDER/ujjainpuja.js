const ujjainpuja = document.querySelector('.slider-wrapper');
const prevBtnujjainpuja = document.querySelector('.prev-ujjainpuja');
const nextBtnujjainpuja = document.querySelector('.next-ujjainpuja');
let slideIndexujjainpuja = 0;
let autoSlideIntervalujjainpuja;

// Function to move the slider to a specific index
function moveToSlideujjainpuja(index) {
    if (index < 0) {
        index = ujjainpuja.children.length - 1;
    } else if (index >= ujjainpuja.children.length) {
        index = 0;
    }

    const translateX = -index * 150; // Adjust the width of the product card
    ujjainpuja.style.transform = `translateX(${translateX}px)`;
    slideIndexujjainpuja = index;

    // Hide or show prevBtn and nextBtn based on slideIndex
    prevBtnujjainpuja.style.display = slideIndexujjainpuja === 0 ? 'none' : 'block';
    nextBtnujjainpuja.style.display = slideIndexujjainpuja === ujjainpuja.children.length - 1 ? 'none' : 'block';
}

// Event listeners for previous and next buttons
prevBtnujjainpuja.addEventListener('click', () => {
    moveToSlideujjainpuja(slideIndexujjainpuja - 1);
    resetAutoSlideujjainpuja(); // Reset auto-slide timer on manual interaction
});

nextBtnujjainpuja.addEventListener('click', () => {
    moveToSlideujjainpuja(slideIndexujjainpuja + 1);
    resetAutoSlideujjainpuja(); // Reset auto-slide timer on manual interaction
});

// Function to start auto-sliding
function startAutoSlideujjainpuja() {
    autoSlideIntervalujjainpuja = setInterval(() => {
        moveToSlideujjainpuja(slideIndexujjainpuja + 1);

        // Check if we reached the end, and if so, loop back to the start
        if (slideIndexujjainpuja === ujjainpuja.children.length - 1) {
            setTimeout(() => {
                moveToSlideujjainpuja(0);
            }, 3000); // Adjust the delay if needed
        }
    }, 6000); // Adjust the interval for auto-sliding
}

// Function to stop auto-sliding
function stopAutoSlideujjainpuja() {
    clearInterval(autoSlideIntervalujjainpuja);
}

// Function to reset auto-slide timer
function resetAutoSlideujjainpuja() {
    stopAutoSlideujjainpuja();
    startAutoSlideujjainpuja();
}

// Start auto-sliding when the page loads
startAutoSlideujjainpuja();

// Pause auto-sliding when the user interacts with the slider
ujjainpuja.addEventListener('mouseenter', stopAutoSlideujjainpuja);
ujjainpuja.addEventListener('mouseleave', startAutoSlideujjainpuja);

function showDescription(index) {
    const card = document.getElementById(`card-${index}`);
    const description = card.querySelector('.description');
    card.style.height = 'auto'; // Automatically adjust height
    description.style.display = 'block';
}

function hideDescription(index) {
    const card = document.getElementById(`card-${index}`);
    const description = card.querySelector('.description');
    card.style.height = ''; // Reset height
    description.style.display = 'none';
}




const ujjainhome1 = document.querySelector('.slider-wrapper1');
const prevBtnujjainhome1 = document.querySelector('.prev-puja1');
const nextBtnujjainhome1 = document.querySelector('.next-puja1');
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
