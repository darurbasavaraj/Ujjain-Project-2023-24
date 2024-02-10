const omkareshwar = document.querySelector('.omkareshwar');
const prevBtnomkareshwar = document.querySelector('.prev-omkareshwar');
const nextBtnomkareshwar = document.querySelector('.next-omkareshwar');
let slideIndexomkareshwar = 0;
let autoSlideIntervalomkareshwar;

// Function to move the slider to a specific index
function moveToSlideomkareshwar(index) {
    if (index < 0) {
        index = omkareshwar.children.length - 1;
    } else if (index >= omkareshwar.children.length) {
        index = 0;
    }

    const translateX = -index * 130; // Adjust the width of the product card
    omkareshwar.style.transform = `translateX(${translateX}px)`;
    slideIndexomkareshwar = index;

    // Hide or show prevBtn and nextBtn based on slideIndex
    prevBtnomkareshwar.style.display = slideIndexomkareshwar === 0 ? 'none' : 'block';
    nextBtnomkareshwar.style.display = slideIndexomkareshwar === omkareshwar.children.length - 1 ? 'none' : 'block';
}

// Event listeners for previous and next buttons
prevBtnomkareshwar.addEventListener('click', () => {
    moveToSlideomkareshwar(slideIndexomkareshwar - 1);
    resetAutoSlideomkareshwar(); // Reset auto-slide timer on manual interaction
});

nextBtnomkareshwar.addEventListener('click', () => {
    moveToSlideomkareshwar(slideIndexomkareshwar + 1);
    resetAutoSlideomkareshwar(); // Reset auto-slide timer on manual interaction
});

// Function to start auto-sliding
function startAutoSlideomkareshwar() {
    autoSlideIntervalomkareshwar = setInterval(() => {
        moveToSlideomkareshwar(slideIndexomkareshwar + 1);

        // Check if we reached the end, and if so, loop back to the start
        if (slideIndexomkareshwar === omkareshwar.children.length - 1) {
            setTimeout(() => {
                moveToSlideomkareshwar(0);
            }, 3000); // Adjust the delay if needed
        }
    }, 6000); // Adjust the interval for auto-sliding
}

// Function to stop auto-sliding
function stopAutoSlideomkareshwar() {
    clearInterval(autoSlideIntervalomkareshwar);
}

// Function to reset auto-slide timer
function resetAutoSlideomkareshwar() {
    stopAutoSlideomkareshwar();
    startAutoSlideomkareshwar();
}

// Start auto-sliding when the page loads
startAutoSlideomkareshwar();

// Pause auto-sliding when the user interacts with the slider
omkareshwar.addEventListener('mouseenter', stopAutoSlideomkareshwar);
omkareshwar.addEventListener('mouseleave', startAutoSlideomkareshwar);



const omkareshwar1 = document.querySelector('.omkareshwar1');
const prevBtnomkareshwar1 = document.querySelector('.prev-omkareshwar1');
const nextBtnomkareshwar1 = document.querySelector('.next-omkareshwar1');
let slideIndexomkareshwar1 = 0;
let autoSlideIntervalomkareshwar1;

// Function to move the slider to a specific index
function moveToSlideomkareshwar1(index) {
    if (index < 0) {
        index = omkareshwar1.children.length - 1;
    } else if (index >= omkareshwar1.children.length) {
        index = 0;
    }

    const translateX = -index * 50; // Adjust the width of the product card
    omkareshwar1.style.transform = `translateX(${translateX}px)`;
    slideIndexomkareshwar1 = index;

    // Hide or show prevBtn and nextBtn based on slideIndex
    prevBtnomkareshwar1.style.display = slideIndexomkareshwar1 === 0 ? 'none' : 'block';
    nextBtnomkareshwar1.style.display = slideIndexomkareshwar1 === omkareshwar1.children.length - 1 ? 'none' : 'block';
}

// Event listeners for previous and next buttons
prevBtnomkareshwar1.addEventListener('click', () => {
    moveToSlideomkareshwar1(slideIndexomkareshwar1 - 1);
    resetAutoSlideomkareshwar1(); // Reset auto-slide timer on manual interaction
});

nextBtnomkareshwar1.addEventListener('click', () => {
    moveToSlideomkareshwar1(slideIndexomkareshwar1 + 1);
    resetAutoSlideomkareshwar1(); // Reset auto-slide timer on manual interaction
});

// Function to start auto-sliding
function startAutoSlideomkareshwar1() {
    autoSlideIntervalomkareshwar1 = setInterval(() => {
        moveToSlideomkareshwar1(slideIndexomkareshwar1 + 1);

        // Check if we reached the end, and if so, loop back to the start
        if (slideIndexomkareshwar1 === omkareshwar1.children.length - 1) {
            setTimeout(() => {
                moveToSlideomkareshwar1(0);
            }, 3000); // Adjust the delay if needed
        }
    }, 3000); // Adjust the interval for auto-sliding
}

// Function to stop auto-sliding
function stopAutoSlideomkareshwar1() {
    clearInterval(autoSlideIntervalomkareshwar1);
}

// Function to reset auto-slide timer
function resetAutoSlideomkareshwar1() {
    stopAutoSlideomkareshwar1();
    startAutoSlideomkareshwar1();
}

// Start auto-sliding when the page loads
startAutoSlideomkareshwar1();

// Pause auto-sliding when the user interacts with the slider
omkareshwar1.addEventListener('mouseenter', stopAutoSlideomkareshwar1);
omkareshwar1.addEventListener('mouseleave', startAutoSlideomkareshwar1);