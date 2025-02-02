// Sample product data
const sampleProducts = [
    {
        id: 1,
        title: "iPhone 12 Pro",
        price: 999,
        description: "Like new condition, 256GB storage",
        image: "https://images.unsplash.com/photo-1603891128711-11b4b03bb138?w=500&auto=format",
        category: "Mobile Phones",
        phone: "+1 (234) 567-8901"
    },
    {
        id: 2,
        title: "Toyota Camry 2020",
        price: 25000,
        description: "Excellent condition, low mileage",
        image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500&auto=format",
        category: "Vehicles",
        phone: "+1 (234) 567-8902"
    },
    {
        id: 3,
        title: "Modern Sofa Set",
        price: 799,
        description: "3-piece sofa set, premium fabric",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format",
        category: "Furniture",
        phone: "+1 (234) 567-8903"
    },
    {
        id: 4,
        title: "Gaming Laptop",
        price: 1299,
        description: "RTX 3060, 16GB RAM, 1TB SSD",
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&auto=format",
        category: "Electronics",
        phone: "+1 (234) 567-8904"
    },
    {
        id: 5,
        title: "Designer Watch",
        price: 299,
        description: "Luxury automatic watch, leather strap",
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&auto=format",
        category: "Fashion",
        phone: "+1 (234) 567-8905"
    },
    {
        id: 6,
        title: "Mountain Bike",
        price: 599,
        description: "Professional mountain bike, 21-speed",
        image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=500&auto=format",
        category: "Sports",
        phone: "+1 (234) 567-8906"
    },
    {
        id: 7,
        title: "Classic Literature Collection",
        price: 150,
        description: "Set of 10 classic novels, hardcover",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&auto=format",
        category: "Books",
        phone: "+1 (234) 567-8907"
    },
    {
        id: 8,
        title: "2BHK Apartment",
        price: 150000,
        description: "Modern apartment with parking, 24/7 security",
        image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=500&auto=format",
        category: "Property",
        phone: "+1 (234) 567-8908"
    },
    {
        id: 9,
        title: "Web Developer Position",
        price: 0,
        description: "Full-time position, 2+ years experience required",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format",
        category: "Jobs",
        phone: "+1 (234) 567-8909"
    },
    {
        id: 10,
        title: "House Cleaning Service",
        price: 50,
        description: "Professional cleaning service, per hour rate",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&auto=format",
        category: "Services",
        phone: "+1 (234) 567-8910"
    },
    {
        id: 11,
        title: "Golden Retriever Puppies",
        price: 800,
        description: "3 months old, vaccinated, pure breed",
        image: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=500&auto=format",
        category: "Pets",
        phone: "+1 (234) 567-8911"
    },
    {
        id: 12,
        title: "Samsung Smart Refrigerator",
        price: 1499,
        description: "Digital display, water dispenser, energy efficient",
        image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=500&auto=format",
        category: "Home Appliances",
        phone: "+1 (234) 567-8912"
    },
    {
        id: 13,
        title: "Electric Guitar",
        price: 899,
        description: "Fender Stratocaster, excellent condition",
        image: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=500&auto=format",
        category: "Musical Instruments",
        phone: "+1 (234) 567-8913"
    },
    {
        id: 14,
        title: "PS5 Console",
        price: 499,
        description: "Brand new, includes 2 controllers",
        image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=500&auto=format",
        category: "Gaming",
        phone: "+1 (234) 567-8914"
    },
    {
        id: 15,
        title: "LEGO Star Wars Set",
        price: 99,
        description: "Collector's edition, 1000+ pieces",
        image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500&auto=format",
        category: "Toys",
        phone: "+1 (234) 567-8915"
    }
];

// Add favorites array to store favorite products
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const sellButton = document.getElementById('sellButton');
const loginButton = document.getElementById('loginButton');
const sellModal = document.getElementById('sellModal');
const loginModal = document.getElementById('loginModal');
const closeBtns = document.getElementsByClassName('close');

// Display products
function displayProducts(products) {
    productsGrid.innerHTML = '';
    products.forEach(product => {
        const isFavorite = favorites.includes(product.id);
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="favorite-btn ${isFavorite ? 'active' : ''}" data-id="${product.id}">
                <i class="fas fa-heart"></i>
            </div>
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <div class="product-info">
                <h3>${product.title}</h3>
                <p class="product-price">$${product.price}</p>
                <p>${product.description}</p>
            </div>
            <div class="product-actions">
            </div>
        `;
        productsGrid.appendChild(productCard);

        // Add click event for favorite button
        const favoriteBtn = productCard.querySelector('.favorite-btn');
        favoriteBtn.addEventListener('click', function() {
            const productId = parseInt(this.dataset.id);
            toggleFavorite(productId, this);
        });
    });
}

// Function to toggle favorite status
function toggleFavorite(productId, buttonElement) {
    const index = favorites.indexOf(productId);
    if (index === -1) {
        // Add to favorites
        favorites.push(productId);
        buttonElement.classList.add('active');
    } else {
        // Remove from favorites
        favorites.splice(index, 1);
        buttonElement.classList.remove('active');
    }
    // Save to localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Add favorites filter button to show only favorite items
function showFavorites() {
    const favProducts = sampleProducts.filter(product => favorites.includes(product.id));
    displayProducts(favProducts);
}

// Modal functionality
sellButton.onclick = () => sellModal.style.display = "block";
loginButton.onclick = () => loginModal.style.display = "block";

Array.from(closeBtns).forEach(btn => {
    btn.onclick = function() {
        sellModal.style.display = "none";
        loginModal.style.display = "none";
    }
});

window.onclick = function(event) {
    if (event.target == sellModal || event.target == loginModal) {
        sellModal.style.display = "none";
        loginModal.style.display = "none";
    }
}

// Form submissions
document.getElementById('sellForm').onsubmit = function(e) {
    e.preventDefault();
    // Add logic to handle new listing submission
    alert('Your ad has been posted!');
    sellModal.style.display = "none";
}

document.getElementById('loginForm').onsubmit = function(e) {
    e.preventDefault();
    // Add logic to handle login
    alert('Login successful!');
    loginModal.style.display = "none";
}

// Category filtering
const categoryButtons = document.querySelectorAll('.category-list button');
categoryButtons.forEach(button => {
    button.onclick = function() {
        const category = this.textContent;
        const filteredProducts = category === 'All' 
            ? sampleProducts 
            : sampleProducts.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
});

// Initialize the page with sample products
displayProducts(sampleProducts);

// Search functionality
const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');

function searchProducts(query) {
    const filteredProducts = sampleProducts.filter(product => 
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
    displayProducts(filteredProducts);
}

searchButton.onclick = () => searchProducts(searchInput.value);
searchInput.onkeyup = (e) => {
    if (e.key === 'Enter') {
        searchProducts(searchInput.value);
    }
}

// Social Login Configuration
// Initialize Facebook SDK
window.fbAsyncInit = function() {
    FB.init({
        appId: 'YOUR_FACEBOOK_APP_ID', // Replace with your Facebook App ID
        cookie: true,
        xfbml: true,
        version: 'v18.0'
    });
};

// Google Client ID Configuration
const googleClientId = 'YOUR_GOOGLE_CLIENT_ID'; // Replace with your Google Client ID

// Initialize Google Sign-In
function initializeGoogleSignIn() {
    google.accounts.id.initialize({
        client_id: googleClientId,
        callback: handleGoogleSignIn
    });
}

// Handle Google Sign-In
function handleGoogleSignIn(response) {
    const credential = response.credential;
    const profile = JSON.parse(atob(credential.split('.')[1]));
    
    // Here you would typically send this token to your backend
    console.log('Google Sign-In Successful', profile);
    
    // Close the login modal
    loginModal.style.display = 'none';
    
    // Update UI to show logged-in state
    updateUIAfterLogin(profile.name);
}

// Handle Facebook Sign-In
function handleFacebookSignIn() {
    FB.login(function(response) {
        if (response.authResponse) {
            FB.api('/me', { fields: 'name, email' }, function(response) {
                // Here you would typically send this data to your backend
                console.log('Facebook Sign-In Successful', response);
                
                // Close the login modal
                loginModal.style.display = 'none';
                
                // Update UI to show logged-in state
                updateUIAfterLogin(response.name);
            });
        } else {
            console.log('Facebook Sign-In Failed');
        }
    }, { scope: 'public_profile,email' });
}

// Update UI after successful login
function updateUIAfterLogin(userName) {
    const loginButton = document.getElementById('loginButton');
    loginButton.textContent = userName;
    // Add any additional UI updates here
}

// Event Listeners for Social Login Buttons
document.getElementById('googleLogin').addEventListener('click', () => {
    google.accounts.id.prompt();
});

document.getElementById('facebookLogin').addEventListener('click', handleFacebookSignIn);

// Initialize Google Sign-In when the page loads
window.addEventListener('load', initializeGoogleSignIn);

// Get current location functionality
document.getElementById('getCurrentLocation').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async function(position) {
                try {
                    const response = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
                    );
                    const data = await response.json();
                    
                    // Format the address
                    const address = data.address;
                    let locationString = '';
                    
                    if (address.city || address.town) {
                        locationString += address.city || address.town;
                    }
                    if (address.state) {
                        locationString += locationString ? `, ${address.state}` : address.state;
                    }
                    if (address.country) {
                        locationString += locationString ? `, ${address.country}` : address.country;
                    }
                    
                    // Update the location input
                    document.getElementById('location').value = locationString;
                } catch (error) {
                    console.error('Error getting location:', error);
                    alert('Unable to get location. Please enter it manually.');
                }
            },
            function(error) {
                console.error('Geolocation error:', error);
                alert('Unable to get location. Please enter it manually.');
            }
        );
    } else {
        alert('Geolocation is not supported by your browser. Please enter location manually.');
    }
});

// Chat functionality
const chatModal = document.getElementById('chatModal');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendMessageBtn = document.getElementById('sendMessage');

// Sample chat data structure
const chats = {};

// Function to create a new chat or open existing chat
function openChat(userId, userName, itemTitle) {
    // Clear previous messages
    chatMessages.innerHTML = '';
    
    // Update chat header
    document.getElementById('chatUserName').textContent = userName;
    document.getElementById('chatItemTitle').textContent = itemTitle;
    
    // Load existing messages or create new chat
    if (!chats[userId]) {
        chats[userId] = [];
    }
    
    // Display existing messages
    displayMessages(chats[userId]);
    
    // Show chat modal
    chatModal.style.display = 'block';
    
    // Focus on input
    chatInput.focus();
    
    // Scroll to bottom
    scrollToBottom();
}

// Function to display messages
function displayMessages(messages) {
    chatMessages.innerHTML = messages.map(msg => `
        <div class="message ${msg.sent ? 'message-sent' : 'message-received'}">
            <div class="message-content">${msg.text}</div>
            <span class="message-time">${msg.time}</span>
        </div>
    `).join('');
}

// Function to add new message
function addMessage(userId, text, sent = true) {
    const message = {
        text,
        sent,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    chats[userId].push(message);
    
    // Add message to display
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sent ? 'message-sent' : 'message-received'}`;
    messageDiv.innerHTML = `
        <div class="message-content">${text}</div>
        <span class="message-time">${message.time}</span>
    `;
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    scrollToBottom();
}

// Function to scroll chat to bottom
function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Event listener for send button
sendMessageBtn.addEventListener('click', () => {
    const text = chatInput.value.trim();
    if (text) {
        // Get current chat user ID (in a real app, this would be stored when opening the chat)
        const currentUserId = 'sample-user-id';
        addMessage(currentUserId, text);
        chatInput.value = '';
        
        // Simulate received message (in a real app, this would come from the server)
        setTimeout(() => {
            addMessage(currentUserId, 'Thanks for your message! I\'ll get back to you soon.', false);
        }, 1000);
    }
});

// Event listener for enter key in chat input
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessageBtn.click();
    }
});

// Add chat button to product cards
function addActionButtons(productCard, product) {
    const actionsDiv = productCard.querySelector('.product-actions');
    
    // Add chat button
    const chatButton = document.createElement('button');
    chatButton.className = 'action-btn chat-btn';
    chatButton.innerHTML = '<i class="fas fa-comments"></i>';
    chatButton.title = 'Chat with Seller'; // Add tooltip
    chatButton.onclick = (e) => {
        e.preventDefault();
        openChat(product.id, 'Seller Name', product.title);
    };
    
    // Add call button
    const callButton = document.createElement('button');
    callButton.className = 'action-btn call-btn';
    callButton.innerHTML = '<i class="fas fa-phone"></i>';
    callButton.title = 'Call Seller'; // Add tooltip
    callButton.onclick = (e) => {
        e.preventDefault();
        handleCall(product);
    };
    
    actionsDiv.appendChild(chatButton);
    actionsDiv.appendChild(callButton);
}

// Handle phone call
function handleCall(product) {
    // Create modal content for phone call
    const modalContent = `
        <div class="call-info">
            <h3>Contact Seller</h3>
            <p class="phone-number">
                <i class="fas fa-phone"></i>
                <a href="tel:${product.phone}">${product.phone}</a>
            </p>
            <div class="call-actions">
                <a href="tel:${product.phone}" class="primary-btn">
                    <i class="fas fa-phone"></i> Call Now
                </a>
                <button onclick="copyPhoneNumber('${product.phone}')" class="secondary-btn">
                    <i class="fas fa-copy"></i> Copy Number
                </button>
            </div>
        </div>
    `;
    
    // Show the modal with call information
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content call-modal">
            <span class="close">&times;</span>
            ${modalContent}
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close button functionality
    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = () => {
        modal.remove();
    };
    
    // Close on outside click
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.remove();
        }
    };
}

// Function to copy phone number to clipboard
function copyPhoneNumber(phone) {
    navigator.clipboard.writeText(phone).then(() => {
        alert('Phone number copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy phone number:', err);
    });
}

// Update displayProducts function to include action buttons
const originalDisplayProducts = displayProducts;
displayProducts = function(products) {
    originalDisplayProducts(products);
    document.querySelectorAll('.product-card').forEach((card, index) => {
        addActionButtons(card, products[index]);
    });
};

// Initialize the page with sample products (now with chat buttons)
displayProducts(sampleProducts);