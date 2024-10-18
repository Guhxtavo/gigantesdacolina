let currentTab = 'goleiro';
let slideIndex = 0;

function showTab(tabId) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });
    
    // Show the selected tab
    document.getElementById(tabId).style.display = 'flex';
    currentTab = tabId;
    slideIndex = 0;
    moveSlide(0); // Reset slide position
}

function moveSlide(step) {
    const carousel = document.getElementById(currentTab);
    const items = carousel.querySelectorAll('.carousel-item');
    if (!items.length) return; // No items to show

    slideIndex = (slideIndex + step + items.length) % items.length;
    const offset = -slideIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

// Initialize the first tab
showTab(currentTab);

// Optional: Automatic sliding every 3 seconds
setInterval(() => moveSlide(1), 3000);
