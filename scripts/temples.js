// Get menu items and heading element
const menuItems = document.querySelectorAll(".menu a");
const heading = document.getElementById("heading");

// Add click event listeners to menu items
menuItems.forEach(item => {
    item.addEventListener('click', function (event) {
        // Prevent default link behavior
        event.preventDefault();

        // Update heading text with data-title attribute of clicked menu item
        const title = item.getAttribute('data-title');
        heading.textContent = title;
    });
});

// Hamburger menu
const hamButton = document.getElementById('button');
const navigation = document.querySelector('.menu');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});