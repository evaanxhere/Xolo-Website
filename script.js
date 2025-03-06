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

    setInterval(nextSlide, 3000); // Change slide every 3 seconds

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
    // About Us link functionality
    const aboutUsLink = document.querySelector('a[href="#about-us"]');
    const aboutUsSection = document.querySelector('.about-us');

    aboutUsLink.addEventListener('click', (e) => {
        e.preventDefault();
        aboutUsSection.style.display = 'block';
        window.scrollTo({
            top: aboutUsSection.offsetTop - 100,
            behavior: 'smooth'
        });
    });

    // Learn More button functionality
    const learnMoreButton = document.querySelector('.learn-more');
    learnMoreButton.addEventListener('click', () => {
        alert('Learn more about XOLO! Stay tuned for updates.');
    });

    // Load sample products (you can replace with actual data)
    function loadProducts() {
        const productGrid = document.querySelector('.product-grid');
        const products = [
            { name: 'XOLO Runner', price: 'Rs.11999', image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/4ae3c0d4-1573-4842-9b01-5589cb11f359/NIKE+VOMERO+18.png' },
            { name: 'XOLO Sprint', price: 'Rs.10999', image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/3a1a6fce-e35c-4a32-893c-9704f2868423/NIKE+VOMERO+18.png' },
            { name: 'XOLO Classic', price: 'Rs.9999', image: 'https://static.nike.com/a/images/w_1536,c_limit/01cffb53-bc31-4a9c-99d3-5d47cb13011f/image.png' },
            { name: 'XOLO Dunks', price: 'Rs.12999', image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9275d342-c34f-4d25-8641-17357e19d6f8/AIR+JORDAN+1+RETRO+HIGH+OG.png' },
            { name: 'XOLO Sport', price: 'Rs.13999', image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/7b13bc7f-eaa8-4a70-a921-42956d8247fe/ZM+VAPOR+16+ELITE+AG-PRO.png' },
            { name: 'XOLO Sportx', price: 'Rs.16999', image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/16a7042f-9b4f-4d86-b58a-554fc38ba90e/PHANTOM+GX+II+ELITE+AG-PRO.png' },
         
        
        ];

        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="product-content">
                    <h3>${product.name}</h3>
                    
             <div class="product-price">${product.price}</div>
                </div>
            `;
            productGrid.appendChild(productDiv);
        });
    }
});
