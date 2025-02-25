document.addEventListener('DOMContentLoaded', () => {
    // Slideshow functionality
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) slide.classList.add('active');
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000); // Change slide every 5 seconds

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        navUl.classList.toggle('active');
    });

    // Explore button functionality
    const exploreButton = document.querySelector('.explore-button');
    const productsSection = document.querySelector('.products');

    exploreButton.addEventListener('click', () => {
        productsSection.style.display = 'block';
        window.scrollTo({
            top: productsSection.offsetTop - 100,
            behavior: 'smooth'
        });
        loadProducts();
    });

    // Load sample products (you can replace with actual data)
    function loadProducts() {
        const productGrid = document.querySelector('.product-grid');
        const products = [
            { name: 'XOLO Runner', price: 'Rs.12999', image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/ed8d46c0-d433-467c-a72a-c850d6380c85/NIKE+SB+DUNK+LOW+PRO.png' },
            { name: 'XOLO Sprint', price: 'Rs.14999', image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/3a1a6fce-e35c-4a32-893c-9704f2868423/NIKE+VOMERO+18.png' },
            { name: 'XOLO Classic', price: 'Rs.10999', image: 'https://static.nike.com/a/images/w_1536,c_limit/01cffb53-bc31-4a9c-99d3-5d47cb13011f/image.png' }
        ];

        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="product-content">
                    <h3>${product.name}</h3>
                    <p>Premium quality shoes for all occasions.</p>
                    <div class="product-price">${product.price}</div>
                </div>
            `;
            productGrid.appendChild(productDiv);
        });
    }
});
