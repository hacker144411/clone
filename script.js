// Products data with real images
const products = [
    {
        id: 1,
        name: "Apple iPhone 14 Pro",
        price: "₹1,29,999",
        originalPrice: "₹1,39,999",
        discount: "7% off",
        description: "6.7-inch Super Retina XDR display, A16 Bionic chip, 48MP Main camera, Face ID, 5G capable",
        specifications: ["6.7-inch Super Retina XDR display", "A16 Bionic chip", "48MP Main camera", "Face ID", "5G capable", "256GB storage"],
        category: "mobiles",
        image: "https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        name: "Samsung Galaxy S23 Ultra",
        price: "₹1,24,999",
        originalPrice: "₹1,34,999",
        discount: "7% off",
        description: "6.8-inch Dynamic AMOLED 2X display, Snapdragon 8 Gen 2, 200MP camera, S Pen included",
        specifications: ["6.8-inch Dynamic AMOLED 2X", "Snapdragon 8 Gen 2", "200MP camera", "S Pen included", "12GB RAM", "512GB storage"],
        category: "mobiles",
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        name: "Sony WH-1000XM5",
        price: "₹29,990",
        originalPrice: "₹34,990",
        discount: "14% off",
        description: "Industry-leading noise cancellation, 30-hour battery life, touch controls, multipoint connection",
        specifications: ["Industry-leading noise cancellation", "30-hour battery life", "Touch controls", "Multipoint connection", "Foldable design", "Carrying case included"],
        category: "electronics",
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        name: "MacBook Air M2",
        price: "₹1,09,990",
        originalPrice: "₹1,19,900",
        discount: "8% off",
        description: "13.6-inch Liquid Retina display, Apple M2 chip, 8GB RAM, 256GB SSD, 18-hour battery",
        specifications: ["13.6-inch Liquid Retina display", "Apple M2 chip", "8GB RAM", "256GB SSD", "18-hour battery", "Backlit Magic Keyboard"],
        category: "laptops",
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        name: "Nike Air Max 270",
        price: "₹12,995",
        originalPrice: "₹14,995",
        discount: "13% off",
        description: "Nike's first lifestyle Air Max brings you style, comfort and big attitude in the Nike Air Max 270",
        specifications: ["Full-length Nike Air unit", "Mesh and synthetic upper", "Rubber outsole", "Lace-up closure", "Cushioned footbed", "Available in multiple colors"],
        category: "fashion",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        name: "Samsung 55-inch QLED TV",
        price: "₹64,999",
        originalPrice: "₹79,999",
        discount: "19% off",
        description: "4K QLED with Quantum Dot technology, Dual LED, Object Tracking Sound, Alexa Built-in",
        specifications: ["55-inch 4K QLED", "Quantum Dot technology", "Dual LED", "Object Tracking Sound", "Alexa Built-in", "Smart TV with apps"],
        category: "electronics",
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 7,
        name: "Amazon Echo Dot (4th Gen)",
        price: "₹4,499",
        originalPrice: "₹5,999",
        discount: "25% off",
        description: "Smart speaker with Alexa, rich sound, voice control your music, controls smart home devices",
        specifications: ["Smart speaker with Alexa", "Rich sound", "Voice control music", "Controls smart home", "Compact design", "Available in multiple colors"],
        category: "electronics",
        image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 8,
        name: "Adidas Men's Running Shoes",
        price: "₹5,999",
        originalPrice: "₹7,999",
        discount: "25% off",
        description: "Lightweight running shoes with Cloudfoam midsole for step-in comfort and superior cushioning",
        specifications: ["Lightweight design", "Cloudfoam midsole", "Step-in comfort", "Superior cushioning", "Breathable upper", "Rubber outsole"],
        category: "fashion",
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 9,
        name: "Dell XPS 13 Laptop",
        price: "₹1,29,990",
        originalPrice: "₹1,44,990",
        discount: "10% off",
        description: "13.4-inch InfinityEdge touch display, Intel Core i7, 16GB RAM, 512GB SSD, Windows 11",
        specifications: ["13.4-inch InfinityEdge display", "Intel Core i7", "16GB RAM", "512GB SSD", "Windows 11", "Backlit keyboard"],
        category: "laptops",
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 10,
        name: "OnePlus 11 5G",
        price: "₹61,999",
        originalPrice: "₹69,999",
        discount: "11% off",
        description: "6.7-inch Fluid AMOLED display, Snapdragon 8 Gen 2, 50MP Hasselblad camera, 100W fast charging",
        specifications: ["6.7-inch Fluid AMOLED", "Snapdragon 8 Gen 2", "50MP Hasselblad camera", "100W fast charging", "12GB RAM", "256GB storage"],
        category: "mobiles",
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 11,
        name: "Apple Watch Series 8",
        price: "₹45,900",
        originalPrice: "₹51,900",
        discount: "12% off",
        description: "GPS + Cellular, Always-On Retina display, ECG app, Blood Oxygen app, Water resistant",
        specifications: ["GPS + Cellular", "Always-On Retina display", "ECG app", "Blood Oxygen app", "Water resistant", "Multiple band options"],
        category: "electronics",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRNbzsq2mPi1DwKJhiYnfY9kDZv4CeANb9u_0ePxYPIpJHUHhoT"
    },
    {
        id: 12,
        name: "Sony PlayStation 5",
        price: "₹54,990",
        originalPrice: "₹59,990",
        discount: "8% off",
        description: "Lightning speed, breathtaking immersion - PlayStation 5 console with ultra-high speed SSD",
        specifications: ["Ultra-high speed SSD", "4K gaming", "Ray tracing", "Backward compatibility", "DualSense controller", "825GB storage"],
        category: "gaming",
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 13,
        name: "HP Wireless Mouse",
        price: "₹899",
        originalPrice: "₹1,299",
        discount: "31% off",
        description: "Wireless mouse with 2.4GHz USB receiver, 12-month battery life, 1600 DPI optical sensor",
        specifications: ["2.4GHz wireless", "12-month battery life", "1600 DPI optical sensor", "Plug-and-play", "Ergonomic design", "3 buttons"],
        category: "electronics",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 14,
        name: "Lenovo Yoga 9i Laptop",
        price: "₹1,49,990",
        originalPrice: "₹1,69,990",
        discount: "12% off",
        description: "14-inch 4K OLED touchscreen, Intel Core i7, 16GB RAM, 1TB SSD, 360-degree hinge",
        specifications: ["14-inch 4K OLED", "Intel Core i7", "16GB RAM", "1TB SSD", "360-degree hinge", "Windows 11"],
        category: "laptops",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 15,
        name: "Puma Men's T-Shirt",
        price: "₹899",
        originalPrice: "₹1,499",
        discount: "40% off",
        description: "Regular fit t-shirt made from 100% cotton, classic PUMA Cat logo on the chest",
        specifications: ["100% cotton", "Regular fit", "Classic PUMA logo", "Machine washable", "Available in multiple colors", "Breathable fabric"],
        category: "fashion",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 16,
        name: "Boat Airdopes 441",
        price: "₹1,799",
        originalPrice: "₹3,990",
        discount: "55% off",
        description: "True wireless earbuds with 8mm drivers, IPX7 waterproof, 6 hours playback, 300 hours standby",
        specifications: ["True wireless", "8mm drivers", "IPX7 waterproof", "6 hours playback", "300 hours standby", "Touch controls"],
        category: "electronics",
        image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 17,
        name: "LG 234L Refrigerator",
        price: "₹24,990",
        originalPrice: "₹29,990",
        discount: "17% off",
        description: "Double door refrigerator with Smart Inverter Compressor, Door Cooling+, Convertible Freezer",
        specifications: ["234L capacity", "Smart Inverter Compressor", "Door Cooling+", "Convertible Freezer", "Energy efficient", "5-year warranty"],
        category: "appliances",
        image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 18,
        name: "Nikon Z5 Mirrorless Camera",
        price: "₹1,24,995",
        originalPrice: "₹1,39,995",
        discount: "11% off",
        description: "24.3MP full-frame mirrorless camera, 4K UHD video, Dual SD card slots, 5-axis in-body stabilization",
        specifications: ["24.3MP full-frame", "4K UHD video", "Dual SD card slots", "5-axis stabilization", "273-point AF system", "Weather sealed"],
        category: "electronics",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 19,
        name: "Philips Hair Dryer",
        price: "₹1,899",
        originalPrice: "₹2,799",
        discount: "32% off",
        description: "1600W hair dryer with Cool Shot button, 3 heat/speed settings, concentrator nozzle, foldable handle",
        specifications: ["1600W power", "Cool Shot button", "3 heat/speed settings", "Concentrator nozzle", "Foldable handle", "2-year warranty"],
        category: "appliances",
        image: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 20,
        name: "Asus ROG Gaming Laptop",
        price: "₹1,69,990",
        originalPrice: "₹1,89,990",
        discount: "11% off",
        description: "15.6-inch FHD 144Hz display, Intel Core i9, 16GB RAM, 1TB SSD, NVIDIA RTX 3060 6GB",
        specifications: ["15.6-inch FHD 144Hz", "Intel Core i9", "16GB RAM", "1TB SSD", "NVIDIA RTX 3060", "RGB keyboard"],
        category: "laptops",
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

// DOM elements
const loginPage = document.getElementById('loginPage');
const appContainer = document.getElementById('appContainer');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const contactUsBtn = document.getElementById('contactUsBtn');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const productsGrid = document.getElementById('productsGrid');
const productsPage = document.getElementById('productsPage');
const productDetailsPage = document.getElementById('productDetailsPage');
const backBtn = document.getElementById('backBtn');
const checkoutModal = document.getElementById('checkoutModal');
const cancelCheckout = document.getElementById('cancelCheckout');
const checkoutForm = document.getElementById('checkoutForm');
const receiptPage = document.getElementById('receiptPage');
const homeBtn = document.getElementById('homeBtn');
const homeLink = document.getElementById('homeLink');
const userEmail = document.getElementById('userEmail');
const contactPage = document.getElementById('contactPage');
const contactForm = document.getElementById('contactForm');
const backToHomeBtn = document.getElementById('backToHomeBtn');

// Navigation elements
const navHome = document.getElementById('navHome');
const navElectronics = document.getElementById('navElectronics');
const navFashion = document.getElementById('navFashion');
const navAppliances = document.getElementById('navAppliances');
const navMobiles = document.getElementById('navMobiles');

// Current product for checkout
let currentProduct = null;

// Login functionality
loginBtn.addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email && password) {
        // Store user email
        userEmail.textContent = email;
        
        // COMPLETELY REMOVE LOGIN PAGE AND SHOW MAIN APP
        loginPage.style.display = 'none';
        appContainer.style.display = 'block';
        
        // Load products
        displayProducts(products);
    } else {
        alert('Please enter both email and password');
    }
});

// Logout functionality
logoutBtn.addEventListener('click', function() {
    // Show login page and hide app
    appContainer.style.display = 'none';
    loginPage.style.display = 'block';
    
    // Clear form
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    
    // Reset pages
    showProductsPage();
});

// Contact Us functionality
contactUsBtn.addEventListener('click', showContactPage);

// Back to Home from Contact
backToHomeBtn.addEventListener('click', showProductsPage);

// Navigation functionality
navHome.addEventListener('click', function(e) {
    e.preventDefault();
    showProductsPage();
});

navElectronics.addEventListener('click', function(e) {
    e.preventDefault();
    filterProductsByCategory('electronics');
});

navFashion.addEventListener('click', function(e) {
    e.preventDefault();
    filterProductsByCategory('fashion');
});

navAppliances.addEventListener('click', function(e) {
    e.preventDefault();
    filterProductsByCategory('appliances');
});

navMobiles.addEventListener('click', function(e) {
    e.preventDefault();
    filterProductsByCategory('mobiles');
});

// Display products
function displayProducts(productsToShow) {
    productsGrid.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div>
                    <span class="product-price">${product.price}</span>
                    <span class="original-price">${product.originalPrice}</span>
                    <span class="discount">${product.discount}</span>
                </div>
                <button class="buy-btn" data-id="${product.id}">Buy Now</button>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
    
    // Add event listeners to buy buttons
    document.querySelectorAll('.buy-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);
            showProductDetails(product);
        });
    });
}

// Filter products by category
function filterProductsByCategory(category) {
    if (category === 'all') {
        displayProducts(products);
        showProductsPage();
        return;
    }
    
    const filteredProducts = products.filter(product => 
        product.category === category
    );
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; font-size: 1.2rem;">No products found in this category.</p>';
    } else {
        displayProducts(filteredProducts);
    }
    
    showProductsPage();
}

// Show product details
function showProductDetails(product) {
    currentProduct = product;
    
    // Update product details page
    document.getElementById('detailsTitle').textContent = product.name;
    document.getElementById('detailsPrice').textContent = product.price;
    document.getElementById('detailsOriginalPrice').textContent = product.originalPrice;
    document.getElementById('detailsDiscount').textContent = product.discount;
    document.getElementById('detailsDescription').textContent = product.description;
    document.getElementById('detailsImg').src = product.image;
    
    // Update specifications list
    const specsList = document.getElementById('specificationsList');
    specsList.innerHTML = '';
    product.specifications.forEach(spec => {
        const li = document.createElement('li');
        li.textContent = spec;
        specsList.appendChild(li);
    });
    
    // Show product details page
    productsPage.style.display = 'none';
    productDetailsPage.style.display = 'block';
    receiptPage.style.display = 'none';
    contactPage.style.display = 'none';
}

// Show products page
function showProductsPage() {
    productsPage.style.display = 'block';
    productDetailsPage.style.display = 'none';
    receiptPage.style.display = 'none';
    contactPage.style.display = 'none';
}

// Show contact page
function showContactPage() {
    productsPage.style.display = 'none';
    productDetailsPage.style.display = 'none';
    receiptPage.style.display = 'none';
    contactPage.style.display = 'block';
}

// Back button functionality
backBtn.addEventListener('click', showProductsPage);
homeLink.addEventListener('click', function(e) {
    e.preventDefault();
    showProductsPage();
});

// Search functionality
searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        displayProducts(products);
        return;
    }
    
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; font-size: 1.2rem;">No products found for your search.</p>';
    } else {
        displayProducts(filteredProducts);
    }
}

// Contact form submission
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value;
    const category = document.getElementById('contactCategory').value;
    
    // In a real application, you would send this data to a server
    // For this demo, we'll just show a confirmation message
    alert(`Thank you for your message, ${name}! We have received your ${category} inquiry and will get back to you at ${email} within 24 hours.`);
    
    // Reset form
    contactForm.reset();
    
    // Go back to home
    showProductsPage();
});

// Buy button functionality in product details
document.getElementById('detailsBuyBtn').addEventListener('click', function() {
    document.getElementById('checkoutProductTitle').textContent = currentProduct.name;
    
    // Pre-fill email if available
    const checkoutEmail = document.getElementById('checkoutEmail');
    if (userEmail.textContent !== 'Welcome') {
        checkoutEmail.value = userEmail.textContent;
    }
    
    checkoutModal.style.display = 'flex';
});

// Cancel checkout
cancelCheckout.addEventListener('click', function() {
    checkoutModal.style.display = 'none';
});

// Checkout form submission
checkoutForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('checkoutEmail').value;
    const phone = document.getElementById('phone').value;
    const pincode = document.getElementById('pincode').value;
    const address = document.getElementById('address').value;
    
    // Generate order ID
    const orderId = 'ORD' + Date.now().toString().substr(-8);
    
    // Calculate total with tax
    const price = parseInt(currentProduct.price.replace(/[^0-9]/g, ''));
    const tax = Math.round(price * 0.18);
    const total = price + tax + 99; // 99 shipping
    
    // Format total for display
    const formattedTotal = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0
    }).format(total);
    
    // Update receipt
    document.getElementById('receiptDetails').innerHTML = `
        <div class="receipt-row">
            <span class="label">Order ID</span>
            <span class="value">${orderId}</span>
        </div>
        <div class="receipt-row">
            <span class="label">Product</span>
            <span class="value">${currentProduct.name}</span>
        </div>
        <div class="receipt-row">
            <span class="label">Price</span>
            <span class="value">${currentProduct.price}</span>
        </div>
        <div class="receipt-row">
            <span class="label">Tax (18%)</span>
            <span class="value">₹${tax}</span>
        </div>
        <div class="receipt-row">
            <span class="label">Shipping</span>
            <span class="value">₹99</span>
        </div>
        <div class="receipt-row">
            <span class="label">Delivery Address</span>
            <span class="value">${address}</span>
        </div>
        <div class="receipt-row">
            <span class="label">Phone</span>
            <span class="value">${phone}</span>
        </div>
        <div class="receipt-row">
            <span class="label">Email</span>
            <span class="value">${email}</span>
        </div>
    `;
    
    document.getElementById('receiptTotal').textContent = `Total: ${formattedTotal}`;
    
    // Hide modal and show receipt
    checkoutModal.style.display = 'none';
    productsPage.style.display = 'none';
    productDetailsPage.style.display = 'none';
    receiptPage.style.display = 'block';
    contactPage.style.display = 'none';
    
    // Reset form
    checkoutForm.reset();
});

// Home button in receipt
homeBtn.addEventListener('click', showProductsPage);

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Show login page by default
    loginPage.style.display = 'block';
    appContainer.style.display = 'none';
});