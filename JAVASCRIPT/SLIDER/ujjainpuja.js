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

    const translateX = -index * 50; // Adjust the width of the product card
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

const puja1 = document.querySelector('.puja1');
const prevBtnpuja1 = document.querySelector('.prev-puja1');
const nextBtnpuja1 = document.querySelector('.next-puja1');
let slideIndexpuja1 = 0;
let autoSlideIntervalpuja1;

// Function to move the slider to a specific index
function moveToSlidepuja1(index) {
    if (index < 0) {
        index = puja1.children.length - 1;
    } else if (index >= puja1.children.length) {
        index = 0;
    }

    const translateX = -index * 50; // Adjust the width of the product card
    puja1.style.transform = `translateX(${translateX}px)`;
    slideIndexpuja1 = index;

    // Hide or show prevBtn and nextBtn based on slideIndex
    prevBtnpuja1.style.display = slideIndexpuja1 === 0 ? 'none' : 'block';
    nextBtnpuja1.style.display = slideIndexpuja1 === puja1.children.length - 1 ? 'none' : 'block';
}

// Event listeners for previous and next buttons
prevBtnpuja1.addEventListener('click', () => {
    moveToSlidepuja1(slideIndexpuja1 - 1);
    resetAutoSlidepuja1(); // Reset auto-slide timer on manual interaction
});

nextBtnpuja1.addEventListener('click', () => {
    moveToSlidepuja1(slideIndexpuja1 + 1);
    resetAutoSlidepuja1(); // Reset auto-slide timer on manual interaction
});

// Function to start auto-sliding
function startAutoSlidepuja1() {
    autoSlideIntervalpuja1 = setInterval(() => {
        moveToSlidepuja1(slideIndexpuja1 + 1);

        // Check if we reached the end, and if so, loop back to the start
        if (slideIndexpuja1 === puja1.children.length - 1) {
            setTimeout(() => {
                moveToSlidepuja1(0);
            }, 3000); // Adjust the delay if needed
        }
    }, 3000); // Adjust the interval for auto-sliding
}

// Function to stop auto-sliding
function stopAutoSlidepuja1() {
    clearInterval(autoSlideIntervalpuja1);
}

// Function to reset auto-slide timer
function resetAutoSlidepuja1() {
    stopAutoSlidepuja1();
    startAutoSlidepuja1();
}

// Start auto-sliding when the page loads
startAutoSlidepuja1();

// Pause auto-sliding when the user interacts with the slider
puja1.addEventListener('mouseenter', stopAutoSlidepuja1);
puja1.addEventListener('mouseleave', startAutoSlidepuja1);