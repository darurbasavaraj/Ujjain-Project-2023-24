const maa = document.querySelector('.maa');
const prevBtnmaa = document.querySelector('.prev-maa');
const nextBtnmaa = document.querySelector('.next-maa');
let slideIndexmaa = 0;
let autoSlideIntervalmaa;

// Function to move the slider to a specific index
function moveToSlide5(index) {
    if (index < 0) {
        index = maa.children.length - 1;
    } else if (index >= maa.children.length) {
        index = 0;
    }

    const translateX = -index * 130; // Adjust the width of the product card
    maa.style.transform = `translateX(${translateX}px)`;
    slideIndexmaa = index;

    // Hide or show prevBtn and nextBtn based on slideIndex
    prevBtnmaa.style.display = slideIndexmaa === 0 ? 'none' : 'block';
    nextBtnmaa.style.display = slideIndexmaa === maa.children.length - 1 ? 'none' : 'block';
}

// Event listeners for previous and next buttons
prevBtnmaa.addEventListener('click', () => {
    moveToSlide5(slideIndexmaa - 1);
    resetAutoSlidemaa(); // Reset auto-slide timer on manual interaction
});

nextBtnmaa.addEventListener('click', () => {
    moveToSlide5(slideIndexmaa + 1);
    resetAutoSlidemaa(); // Reset auto-slide timer on manual interaction
});

// Function to start auto-sliding
function startAutoSlidemaa() {
    autoSlideIntervalmaa = setInterval(() => {
        moveToSlide5(slideIndexmaa + 1);

        // Check if we reached the end, and if so, loop back to the start
        if (slideIndexmaa === maa.children.length - 1) {
            setTimeout(() => {
                moveToSlide5(0);
            }, 3000); // Adjust the delay if needed
        }
    }, 6000); // Adjust the interval for auto-sliding
}

// Function to stop auto-sliding
function stopAutoSlidemaa() {
    clearInterval(autoSlideIntervalmaa);
}

// Function to reset auto-slide timer
function resetAutoSlidemaa() {
    stopAutoSlidemaa();
    startAutoSlidemaa();
}

// Start auto-sliding when the page loads
startAutoSlidemaa();

// Pause auto-sliding when the user interacts with the slider
maa.addEventListener('mouseenter', stopAutoSlidemaa);
maa.addEventListener('mouseleave', startAutoSlidemaa);



const maa1 = document.querySelector('.maa1');
const prevBtnmaa1 = document.querySelector('.prev-maa1');
const nextBtnmaa1 = document.querySelector('.next-maa1');
let slideIndexmaa1 = 0;
let autoSlideIntervalmaa1;

// Function to move the slider to a specific index
function moveToSlide6(index) {
    if (index < 0) {
        index = maa1.children.length - 1;
    } else if (index >= maa1.children.length) {
        index = 0;
    }

    const translateX = -index * 50; // Adjust the width of the product card
    maa1.style.transform = `translateX(${translateX}px)`;
    slideIndexmaa1 = index;

    // Hide or show prevBtn and nextBtn based on slideIndex
    prevBtnmaa1.style.display = slideIndexmaa1 === 0 ? 'none' : 'block';
    nextBtnmaa1.style.display = slideIndexmaa1 === maa1.children.length - 1 ? 'none' : 'block';
}

// Event listeners for previous and next buttons
prevBtnmaa1.addEventListener('click', () => {
    moveToSlide6(slideIndexmaa1 - 1);
    resetAutoSlidemaa1(); // Reset auto-slide timer on manual interaction
});

nextBtnmaa1.addEventListener('click', () => {
    moveToSlide6(slideIndexmaa1 + 1);
    resetAutoSlidemaa1(); // Reset auto-slide timer on manual interaction
});

// Function to start auto-sliding
function startAutoSlidemaa1() {
    autoSlideIntervalmaa1 = setInterval(() => {
        moveToSlide6(slideIndexmaa1 + 1);

        // Check if we reached the end, and if so, loop back to the start
        if (slideIndexmaa1 === maa1.children.length - 1) {
            setTimeout(() => {
                moveToSlide6(0);
            }, 3000); // Adjust the delay if needed
        }
    }, 5000); // Adjust the interval for auto-sliding
}

// Function to stop auto-sliding
function stopAutoSlidemaa1() {
    clearInterval(autoSlideIntervalmaa1);
}

// Function to reset auto-slide timer
function resetAutoSlidemaa1() {
    stopAutoSlidemaa1();
    startAutoSlidemaa1();
}

// Start auto-sliding when the page loads
startAutoSlidemaa1();

// Pause auto-sliding when the user interacts with the slider
maa1.addEventListener('mouseenter', stopAutoSlidemaa1);
maa1.addEventListener('mouseleave', startAutoSlidemaa1);
