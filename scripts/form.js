const products = [
    {
        id: "fc - 1888",
        name: "flux capacitor",
        avgrating: 4.5
    },
    {
        id: "fc - 2050",
        name: "power laces",
        avgrating: 4.7
    },
    {
        id: "fs - 1987",
        name: "time circuits",
        avgrating: 3.5
    },
    {
        id: "ac - 2000",
        name: "low voltage reactor",
        avgrating: 3.9
    },
    {
        id: "jj - 1969",
        name: "warp equalizer",
        avgrating: 5.0
    }
];

const productName = document.getElementById('product-name');

function populateProductOptions() {
    const selectElement = document.getElementById('product-name');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        selectElement.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', populateProductOptions);

//Counter
function incrementReviewCounter() {
    let reviewCount = localStorage.getItem('reviewCount');
    if (!reviewCount) {
        reviewCount = 0;
    }
    reviewCount = parseInt(reviewCount) + 1;
    localStorage.setItem('reviewCount', reviewCount);
    alert(`You have submitted ${reviewCount} review(s).`);
}

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    incrementReviewCounter();
});