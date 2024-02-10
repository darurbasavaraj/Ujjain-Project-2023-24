const puja = document.querySelector('.puja');
const prevBtnpuja = document.querySelector('.prev-puja');
const nextBtnpuja = document.querySelector('.next-puja');
let slideIndexpuja = 0;
let autoSlideIntervalpuja;

// Function to move the slider to a specific index
function moveToSlidepuja(index) {
    if (index < 0) {
        index = puja.children.length - 1;
    } else if (index >= puja.children.length) {
        index = 0;
    }

    const translateX = -index * 130; // Adjust the width of the product card
    puja.style.transform = `translateX(${translateX}px)`;
    slideIndexpuja = index;

    // Hide or show prevBtn and nextBtn based on slideIndex
    prevBtnpuja.style.display = slideIndexpuja === 0 ? 'none' : 'block';
    nextBtnpuja.style.display = slideIndexpuja === puja.children.length - 1 ? 'none' : 'block';
}

// Event listeners for previous and next buttons
prevBtnpuja.addEventListener('click', () => {
    moveToSlidepuja(slideIndexpuja - 1);
    resetAutoSlidepuja(); // Reset auto-slide timer on manual interaction
});

nextBtnpuja.addEventListener('click', () => {
    moveToSlidepuja(slideIndexpuja + 1);
    resetAutoSlidepuja(); // Reset auto-slide timer on manual interaction
});

// Function to start auto-sliding
function startAutoSlidepuja() {
    autoSlideIntervalpuja = setInterval(() => {
        moveToSlidepuja(slideIndexpuja + 1);

        // Check if we reached the end, and if so, loop back to the start
        if (slideIndexpuja === puja.children.length - 1) {
            setTimeout(() => {
                moveToSlidepuja(0);
            }, 3000); // Adjust the delay if needed
        }
    }, 6000); // Adjust the interval for auto-sliding
}

// Function to stop auto-sliding
function stopAutoSlidepuja() {
    clearInterval(autoSlideIntervalpuja);
}

// Function to reset auto-slide timer
function resetAutoSlidepuja() {
    stopAutoSlidepuja();
    startAutoSlidepuja();
}

// Start auto-sliding when the page loads
startAutoSlidepuja();

// Pause auto-sliding when the user interacts with the slider
puja.addEventListener('mouseenter', stopAutoSlidepuja);
puja.addEventListener('mouseleave', startAutoSlidepuja);



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










