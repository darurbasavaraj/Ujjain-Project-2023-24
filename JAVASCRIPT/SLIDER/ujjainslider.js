const cardWidth = 250 /* Replace this with the actual width of your product card */;
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let slideIndex = 0;
let autoSlideInterval;

// Function to move the slider to a specific index
function moveToSlide(index) {
    if (index < 0) {
        index = slider.children.length - 1;
    } else if (index >= slider.children.length) {
        index = 0;
    }

    const translateX = -index * 50;
    slider.style.transform = `translateX(${translateX}px)`;
    slideIndex = index;

    // Hide or show prevBtn and nextBtn based on slideIndex
    prevBtn.style.display = slideIndex === 0 ? 'none' : 'block';
    nextBtn.style.display = slideIndex === slider.children.length - 1 ? 'none' : 'block';
}

// Event listener for previous button
prevBtn.addEventListener('click', () => {
    moveToSlide(slideIndex - 1);
});

// Event listener for next button
nextBtn.addEventListener('click', () => {
    moveToSlide(slideIndex + 1);
});

// Function to start auto-sliding
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        moveToSlide(slideIndex + 1);

        // Check if we reached the end, and if so, loop back to the start
        if (slideIndex === slider.children.length - 1) {
            setTimeout(() => {
                moveToSlide(0);
            }, 3000); // Adjust the delay if needed
        }
    }, 3000); // Adjust the interval for auto-sliding
}

// Function to stop auto-sliding
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Start auto-sliding when the page loads
startAutoSlide();

// Pause auto-sliding when the user interacts with the slider
slider.addEventListener('mouseenter', stopAutoSlide);
slider.addEventListener('mouseleave', startAutoSlide);




const slider1 = document.querySelector('.slider1');
const prevBtn1 = document.querySelector('.prev-btn1');
const nextBtn1 = document.querySelector('.next-btn1');
let slideIndex1 = 0;
let autoSlideInterval1;

// Function to move the slider to a specific index
function moveToSlide4(index) {
    if (index < 0) {
        index = slider1.children.length - 1;
    } else if (index >= slider1.children.length) {
        index = 0;
    }

    const translateX = -index * 50; // Adjust the width of the product card
    slider1.style.transform = `translateX(${translateX}px)`;
    slideIndex1 = index;

    // Hide or show prevBtn and nextBtn based on slideIndex
    prevBtn1.style.display = slideIndex1 === 0 ? 'none' : 'block';
    nextBtn1.style.display = slideIndex1 === slider1.children.length - 1 ? 'none' : 'block';
}

// Event listeners for previous and next buttons
prevBtn1.addEventListener('click', () => {
    moveToSlide4(slideIndex1 - 1);
    resetAutoSlide1(); // Reset auto-slide timer on manual interaction
});

nextBtn1.addEventListener('click', () => {
    moveToSlide4(slideIndex1 + 1);
    resetAutoSlide1(); // Reset auto-slide timer on manual interaction
});

// Function to start auto-sliding
function startAutoSlide1() {
    autoSlideInterval1 = setInterval(() => {
        moveToSlide4(slideIndex1 + 1);

        // Check if we reached the end, and if so, loop back to the start
        if (slideIndex1 === slider1.children.length - 1) {
            setTimeout(() => {
                moveToSlide4(0);
            }, 3000); // Adjust the delay if needed
        }
    }, 6000); // Adjust the interval for auto-sliding
}

// Function to stop auto-sliding
function stopAutoSlide1() {
    clearInterval(autoSlideInterval1);
}

// Function to reset auto-slide timer
function resetAutoSlide1() {
    stopAutoSlide1();
    startAutoSlide1();
}

// Start auto-sliding when the page loads
startAutoSlide1();

// Pause auto-sliding when the user interacts with the slider
slider1.addEventListener('mouseenter', stopAutoSlide1);
slider1.addEventListener('mouseleave', startAutoSlide1);

