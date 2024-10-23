const slider = document.querySelector('.slider');
const cards = document.querySelectorAll('.card');
let cardsToShow = 4; // Default number of cards to show
let index = 0;
let slideInterval;

function updateCardsToShow() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 600) {
        cardsToShow = 1; // Show 1 card on screens <= 600px
    } else if (screenWidth <= 900) {
        cardsToShow = 2; // Show 2 cards on screens <= 900px
    } else if (screenWidth <= 1200) {
        cardsToShow = 3; // Show 3 cards on screens <= 1200px
    } else {
        cardsToShow = 4; // Show 4 cards on larger screens
    }
}

function slide() {
    index++;
    if (index >= cards.length - cardsToShow + 1) {
        index = 0;
    }
    const offset = -index * (100 / cardsToShow); // Calculate offset based on number of visible cards
    slider.style.transform = `translateX(${offset}%)`;
}

function startSliding() {
    clearInterval(slideInterval);
    slideInterval = setInterval(slide, 3000); // Change slide every 3 seconds
}

// Initial setup
updateCardsToShow();
startSliding();

// Update on window resize
window.addEventListener('resize', () => {
    updateCardsToShow();
    // Recalculate offset to ensure it works with the new number of visible cards
    slide();
});
