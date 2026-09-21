const API_BASE_URL = "https://sneaker-store-8ie7.onrender.com";
// 1. Sneaker Catalog Data (12 Verified Models)
const SNEAKERS_DATA = [
  {
    id: 1,
    name: "Air Jordan 1 Retro High OG 'Pine Green'",
    category: "high-tops",
    categoryLabel: "High-Tops",
    badge: "Trending",
    badgeType: "trending",
    color: "Pine Green / White / Metallic",
    bestFor: "Streetwear, casual drip, hype events",
    price: 14999,
    originalPrice: 17999,
    rating: 4.9,
    reviews: 142,
    image: "imagess/sneaker 1.jpeg",
    description: "The Air Jordan 1 Retro High OG 'Pine Green' brings a vibrant emerald metallic shine to the iconic silhouette. Crafted with premium full-grain leather, padded ankle collar, and Nike Air encapsulation for legendary comfort."
  },
  {
    id: 2,
    name: "Air Jordan 1 High OG 'Washed Heritage'",
    category: "high-tops",
    categoryLabel: "High-Tops",
    badge: "Bestseller",
    badgeType: "bestseller",
    color: "Atmosphere Grey / Sail / White",
    bestFor: "Clean minimal fits, everyday luxury",
    price: 13499,
    originalPrice: 15999,
    rating: 4.8,
    reviews: 98,
    image: "imagess/sneaker 2.jpeg",
    description: "Featuring soft washed suede overlays paired with crisp white leather underlays and a vintage sail midsole. Subtle, sophisticated, and effortlessly versatile for any modern wardrobe."
  },
  {
    id: 3,
    name: "Air Jordan 1 Mid 'Chicago Black Toe'",
    category: "mids",
    categoryLabel: "Mids",
    badge: "Hot Drop",
    badgeType: "hot",
    color: "Gym Red / Black / White",
    bestFor: "Basketball legacy, daily rotation",
    price: 11999,
    originalPrice: 13999,
    rating: 4.9,
    reviews: 215,
    image: "imagess/sneaker 3.jpeg",
    description: "A tribute to Chicago basketball royalty. Combining the timeless black toe color-blocking with vibrant Gym Red ankle collars and swoosh detailing for quintessential Jordan style."
  },
  {
    id: 4,
    name: "Air Jordan 1 High OG 'Across The Spider-Verse'",
    category: "limited",
    categoryLabel: "Limited Edition",
    badge: "Rare Grail",
    badgeType: "grail",
    color: "University Red / Black / Multi",
    bestFor: "Collectors, comic cons, statement outfits",
    price: 18999,
    originalPrice: 22999,
    rating: 5.0,
    reviews: 320,
    image: "imagess/sneaker 4.jpeg",
    description: "Inspired by Miles Morales and the multiverse animation style. Features multi-textured patchwork leather, comic halftone dot graphics, and vibrant red accents that pop from every angle."
  },
  {
    id: 5,
    name: "Air Jordan 1 Low 'University Blue'",
    category: "lows",
    categoryLabel: "Lows",
    badge: "Popular",
    badgeType: "popular",
    color: "UNC Blue / Black / White",
    bestFor: "Summer fits, skate & campus strolls",
    price: 9999,
    originalPrice: 11499,
    rating: 4.8,
    reviews: 184,
    image: "imagess/sneaker 5.jpeg",
    description: "The low-cut classic in the celebrated UNC Tar Heels colorway. Crisp premium leather base paired with obsidian black panels and powder blue accents for effortless summer styling."
  },
  {
    id: 6,
    name: "Air Jordan 1 Zoom CMFT 2 'Pale Vanilla'",
    category: "high-tops",
    categoryLabel: "High-Tops",
    badge: "Ultra Comfort",
    badgeType: "comfort",
    color: "Sail / Gold / Pale Vanilla",
    bestFor: "All-day walking, plush comfort",
    price: 12499,
    originalPrice: 14999,
    rating: 4.7,
    reviews: 86,
    image: "imagess/sneaker 6.jpeg",
    description: "Engineered with Formula 23 foam and Zoom Air cushioning for next-level step-in comfort. Soft textured suede and cut-out metallic gold swoosh deliver a refined artisan aesthetic."
  },
  {
    id: 7,
    name: "Air Jordan 1 Low Craft 'Inside Out'",
    category: "lows",
    categoryLabel: "Lows",
    badge: "Deconstructed",
    badgeType: "craft",
    color: "Taupe Haze / Celestial Gold / Grey",
    bestFor: "Artsy streetwear, relaxed chic",
    price: 10499,
    originalPrice: 12999,
    rating: 4.9,
    reviews: 112,
    image: "imagess/sneaker  7.jpeg",
    description: "An inverted deconstructed masterpiece featuring exposed foam edges, inverted toe box overlays, and delicate orange accent stitching on the stitched swoosh."
  },
  {
    id: 8,
    name: "Air Jordan 1 High OG 'Dark Iris Court Purple'",
    category: "high-tops",
    categoryLabel: "High-Tops",
    badge: "Exclusive",
    badgeType: "exclusive",
    color: "Dark Iris Purple / Black / White",
    bestFor: "Night outs, monochrome contrast fits",
    price: 13999,
    originalPrice: 16499,
    rating: 4.8,
    reviews: 129,
    image: "imagess/sneaker 8.jpeg",
    description: "Regal court purple leather combined with jet black overlays and a speckled eco-midsole. A dark-mode sneakerhead essential built with durable craftsmanship."
  },
  {
    id: 9,
    name: "Air Jordan 1 Mid SE 'Lucky Green Desert'",
    category: "mids",
    categoryLabel: "Mids",
    badge: "Vibrant",
    badgeType: "vibrant",
    color: "Lucky Green / Desert Ochre / Coral",
    bestFor: "Festival wear, color pop outfits",
    price: 11499,
    originalPrice: 13499,
    rating: 4.7,
    reviews: 79,
    image: "imagess/sneaker 9.jpeg",
    description: "Bold earthy desert ochre suede blended with lush green leather and neon coral swoosh accents. A show-stopping color palette that elevates any sneaker rotation."
  },
  {
    id: 10,
    name: "Air Jordan 1 Zoom CMFT 2 'Palomino Melon'",
    category: "high-tops",
    categoryLabel: "High-Tops",
    badge: "New Season",
    badgeType: "new",
    color: "Palomino / Melon Tint / Black",
    bestFor: "Autumn streetwear, warm tone fits",
    price: 12999,
    originalPrice: 15499,
    rating: 4.8,
    reviews: 94,
    image: "imagess/sneaker 10.jpeg",
    description: "Luxurious palomino tan suede coupled with warm melon tint collar accents and responsive Zoom Air cushioning for unmatched everyday walkability."
  },
  {
    id: 11,
    name: "Air Jordan 1 High OG 'Tiffany Aqua Dream'",
    category: "high-tops",
    categoryLabel: "High-Tops",
    badge: "Grail Drop",
    badgeType: "grail",
    color: "Tiffany Aqua / Pure White",
    bestFor: "Clean aesthetic, luxury streetwear",
    price: 15499,
    originalPrice: 18999,
    rating: 4.9,
    reviews: 164,
    image: "imagess/sneaker 11.jpeg",
    description: "Crisp white leather paired with electrifying Tiffany turquoise overlays and pristine wings branding. A fresh, icy silhouette that commands instant attention."
  },
  {
    id: 12,
    name: "Air Jordan 1 Retro High OG 'White Cement'",
    category: "limited",
    categoryLabel: "Limited Edition",
    badge: "Heritage",
    badgeType: "heritage",
    color: "Tech Grey / Elephant / Black",
    bestFor: "Heritage collectors, iconic OG style",
    price: 17999,
    originalPrice: 20999,
    rating: 5.0,
    reviews: 280,
    image: "imagess/sneaker 12.jpeg",
    description: "Borrowing the legendary elephant print from the Air Jordan 3, this special release features textured cement overlays across a smooth white leather canvas."
  }
];

// Available shoe sizes
const SIZES = ["UK 6.5", "UK 7", "UK 7.5", "UK 8", "UK 8.5", "UK 9", "UK 9.5", "UK 10", "UK 10.5", "UK 11"];

// Application State
let cart = JSON.parse(localStorage.getItem('kicks_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('kicks_wishlist') || '[]');
let currentUser = JSON.parse(localStorage.getItem('sneaker_user') || 'null');
let orderHistory = [];
let currentFilter = 'all';
let currentSort = 'featured';
let searchQuery = '';
let currentModalShoe = null;
let selectedModalSize = "UK 8";
let appliedPromo = null; // e.g. { code: 'SNEAKER20', discountPercent: 20 }
let pendingAuthAction = null; // Callback to run after login
let selectedPayment = 'upi';

// DOM Elements
const shoesGrid = document.getElementById('shoesGrid');
const searchInput = document.getElementById('searchInput');
const searchClearBtn = document.getElementById('searchClearBtn');
const filterButtons = document.querySelectorAll('.filter-btn');
const sortSelect = document.getElementById('sortSelect');
const resultsCount = document.getElementById('resultsCount');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartTriggerBtn = document.getElementById('cartTriggerBtn');
const cartCloseBtn = document.getElementById('cartCloseBtn');
const cartItemsContainer = document.getElementById('cartItems');
const cartBadge = document.getElementById('cartBadge');
const cartSubtotalEl = document.getElementById('cartSubtotal');
const cartTotalEl = document.getElementById('cartTotal');
const cartDiscountEl = document.getElementById('cartDiscount');
const cartCountSummary = document.getElementById('cartCountSummary');
const emptyCartView = document.getElementById('emptyCartView');
const cartCheckoutBtn = document.getElementById('cartCheckoutBtn');
const quickViewModal = document.getElementById('quickViewModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const toastContainer = document.getElementById('toastContainer');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const wishlistCountBadge = document.getElementById('wishlistBadge');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

// Auth & Additional Modals DOM Elements
const authModal = document.getElementById('authModal');
const authOverlay = document.getElementById('authOverlay');
const authTriggerBtn = document.getElementById('authTriggerBtn');
const userDropdown = document.getElementById('userDropdown');
const authShoeBanner = document.getElementById('authShoeBanner');
const authShoeThumb = document.getElementById('authShoeThumb');
const authShoeName = document.getElementById('authShoeName');
const authShoePrice = document.getElementById('authShoePrice');
const authShoeBadge = document.getElementById('authShoeBadge');
const wishlistDrawer = document.getElementById('wishlistDrawer');
const wishlistOverlay = document.getElementById('wishlistOverlay');
const wishlistItemsContainer = document.getElementById('wishlistItems');
const wishlistCountSummary = document.getElementById('wishlistCountSummary');
const checkoutModal = document.getElementById('checkoutModal');
const checkoutOverlay = document.getElementById('checkoutOverlay');
const orderSuccessModal = document.getElementById('orderSuccessModal');
const orderSuccessOverlay = document.getElementById('orderSuccessOverlay');
const ordersModal = document.getElementById('ordersModal');
const ordersOverlay = document.getElementById('ordersOverlay');

// INR Currency Formatter
const formatINR = (val) => '₹' + Number(val).toLocaleString('en-IN');

// 2. Initialize Application
async function loadProductsFromBackend() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/products`);

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const products = await response.json();

    console.log("Products loaded from MongoDB:", products);

    // Replace frontend product data with MongoDB data
    SNEAKERS_DATA.length = 0;
    SNEAKERS_DATA.push(...products);

    renderSneakers();

  } catch (error) {
    console.error("Backend connection error:", error);
    showToast("Unable to load products from server.", "warn");

    // Fallback to existing frontend data
    renderSneakers();
  }
}
async function initApp() {
  await loadProductsFromBackend();

  await loadCartFromBackend();

  await loadWishlistFromBackend();

  updateAuthUI();
  setupEventListeners();
  setupTheme();
  setupScrollAnimations();
}

// 3. Render Sneakers to Grid
function renderSneakers() {
  if (!shoesGrid) return;

  // Synchronize category filter pills
  filterButtons.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-filter') === currentFilter);
  });

  // Filter by category and search
  let filtered = SNEAKERS_DATA.filter(item => {
    const matchesCategory = currentFilter === 'all' || item.category === currentFilter;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.bestFor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort logic
  if (currentSort === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (currentSort === 'reviews') {
    filtered.sort((a, b) => b.reviews - a.reviews);
  }

  // Update results counter
  if (resultsCount) {
    resultsCount.textContent = `${filtered.length} Sneaker${filtered.length === 1 ? '' : 's'} Found`;
  }

  // Empty search state
  if (filtered.length === 0) {
    shoesGrid.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">👟</div>
        <h3>No matching kicks found</h3>
        <p>Try adjusting your search terms or filter selection.</p>
        <button class="btn btn-primary" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  // Render cards
  shoesGrid.innerHTML = filtered.map((shoe, idx) => {
    const isWishlisted = wishlist.includes(shoe.id);
    const discountPercent = Math.round(((shoe.originalPrice - shoe.price) / shoe.originalPrice) * 100);

    return `
      <article class="card" data-id="${shoe.id}" style="animation-delay: ${idx * 45}ms">
        <div class="card-inner">
          <div class="card-badge badge-${shoe.badgeType}">
            <span>${shoe.badge}</span>
          </div>

          <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" 
                  onclick="toggleWishlist(${shoe.id}, event)" 
                  aria-label="Save to Wishlist" title="Save to Wishlist">
            <svg class="heart-icon" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>

          <div class="image-wrapper" onclick="handleShoeChoose(${shoe.id})">
            <img src="${shoe.image}" alt="${shoe.name}" loading="lazy" class="sneaker-img" />
            <div class="quick-view-overlay">
              <span class="quick-view-btn">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                Quick View
              </span>
            </div>
          </div>

          <div class="details">
            <div class="category-tag">${shoe.categoryLabel}</div>
            <h3 class="shoe-title" onclick="handleShoeChoose(${shoe.id})" title="${shoe.name}">${shoe.name}</h3>
            
            <div class="specs">
              <div class="stock-info">
                ${Number(shoe.stock) <= 0
        ? `<span class="out-of-stock">Out of Stock</span>`
        : Number(shoe.stock) <= 3
          ? `<span class="low-stock">Only ${shoe.stock} left</span>`
          : `<span class="in-stock">In Stock</span>`
      }
              </div>
              <div class="spec-item">
                <span class="spec-label">Color:</span>
                <span class="spec-value">${shoe.color}</span>
              </div>
              
              <div class="spec-item">
                <span class="spec-label">Best for:</span>
                <span class="spec-value">${shoe.bestFor}</span>
              </div>
            </div>

            <div class="rating-row">
              <div class="stars">
                ${renderStars(shoe.rating)}
              </div>
              <span class="rating-score">${shoe.rating}</span>
              <span class="reviews-count">(${shoe.reviews})</span>
            </div>

            <div class="card-footer">
              <div class="price-container">
                <div class="price-main">${formatINR(shoe.price)}</div>
                <div class="price-sub">
                  <span class="original-price">${formatINR(shoe.originalPrice)}</span>
                  <span class="discount-tag">-${discountPercent}%</span>
                </div>
              </div>

              <button
                  class="add-to-cart-btn"
                  ${Number(shoe.stock) <= 0 ? 'disabled' : ''}
                  onclick="handleShoeAddToCart(${shoe.id}, '${SIZES[3]}', event)"
                  aria-label="Add ${shoe.name} to cart"
                  title="${Number(shoe.stock) <= 0 ? 'Out of Stock' : 'Add to Bag'}"
              >
                  <svg class="cart-btn-icon" viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>

                  <span>
                      ${Number(shoe.stock) <= 0 ? 'Out of Stock' : 'Add'}
                  </span>
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  setupCard3DTilt();
}

// 4. Render Star Icons
function renderStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars += `<svg class="star full" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
    } else if (i - rating < 1) {
      stars += `<svg class="star half" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
    } else {
      stars += `<svg class="star empty" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
    }
  }
  return stars;
}

// 5. 3D Card Interactive Tilt Effect
function setupCard3DTilt() {
  if (!window.matchMedia("(hover: hover)").matches) return;

  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const inner = card.querySelector('.card-inner');
    if (!inner) return;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      inner.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      inner.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}

// ==========================================================================
// 6. Authentication System & Login Trigger on Shoe Choice
// ==========================================================================

function handleShoeChoose(shoeId) {
  const shoe = SNEAKERS_DATA.find(s => s.id === shoeId);
  if (!shoe) return;

  // Open Quick View directly, allowing customers to examine the sneaker
  openQuickView(shoeId);
}

function handleShoeAddToCart(shoeId, size = "UK 8", event = null) {
  if (event) event.stopPropagation();

  const shoe = SNEAKERS_DATA.find(s => s.id === shoeId);
  if (!shoe) return;

  // If user is not logged in, prompt Login Modal with the chosen shoe attached!
  if (!currentUser) {
    openAuthModal(shoe, () => {
      addToCart(shoeId, size);
      openCart();
    });
    return;
  }

  // If already logged in, directly add to cart
  addToCart(shoeId, size);
}

function openAuthModal(shoe = null, onAuthenticatedCallback = null) {
  if (onAuthenticatedCallback) {
    pendingAuthAction = onAuthenticatedCallback;
  } else {
    pendingAuthAction = null;
  }

  if (shoe && authShoeBanner) {
    authShoeThumb.src = shoe.image;
    authShoeName.textContent = shoe.name;
    authShoePrice.textContent = formatINR(shoe.price);
    authShoeBadge.textContent = `⚡ Selected: ${shoe.badge}`;
    authShoeBanner.style.display = 'flex';
  } else if (authShoeBanner) {
    authShoeBanner.style.display = 'none';
  }

  if (authModal && authOverlay) {
    authModal.classList.add('open');
    authOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeAuthModal() {
  if (authModal && authOverlay) {
    authModal.classList.remove('open');
    authOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function switchAuthTab(tab) {
  const tabSignIn = document.getElementById('tabSignIn');
  const tabRegister = document.getElementById('tabRegister');
  const signInForm = document.getElementById('signInForm');
  const registerForm = document.getElementById('registerForm');
  const authTitle = document.getElementById('authTitle');

  if (tab === 'signin') {
    tabSignIn.classList.add('active');
    tabRegister.classList.remove('active');
    signInForm.style.display = 'flex';
    registerForm.style.display = 'none';
    authTitle.textContent = 'Sign In to Continue';
  } else {
    tabRegister.classList.add('active');
    tabSignIn.classList.remove('active');
    registerForm.style.display = 'flex';
    signInForm.style.display = 'none';
    authTitle.textContent = 'Create VIP Account';
  }
}

function togglePasswordVisibility(inputId, toggleEl) {
  const input = document.getElementById(inputId);
  if (!input) return;
  if (input.type === 'password') {
    input.type = 'text';
    toggleEl.textContent = '🔒';
  } else {
    input.type = 'password';
    toggleEl.textContent = '👁️';
  }
}

async function handleSignInSubmit(e) {
  e.preventDefault();

  const email = document.getElementById('loginEmail')?.value.trim();
  const password = document.getElementById('loginPassword')?.value;

  if (!email || !password) {
    showToast('Please enter your email and password.', 'warn');
    return;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    }
    );

    const data = await response.json();

    if (!response.ok) {
      showToast(data.message || "Login failed.", "warn");
      return;
    }

    // Save JWT
    localStorage.setItem("sneaker_token", data.token);

    // Save logged-in user
    currentUser = data.user;

    localStorage.setItem(
      "sneaker_user",
      JSON.stringify(currentUser)
    );

    // Load this user's cart and wishlist from MongoDB
    await loadCartFromBackend();
    await loadWishlistFromBackend();

    updateAuthUI();
    closeAuthModal();

    showToast(
      `Welcome back, <strong>${currentUser.name}</strong>!`,
      'success'
    );

    // Continue pending action
    if (typeof pendingAuthAction === 'function') {
      const action = pendingAuthAction;
      pendingAuthAction = null;
      action();
    }

  } catch (error) {
    console.error("Login error:", error);

    showToast(
      "Unable to connect to the server.",
      "warn"
    );
  }
}

async function handleRegisterSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('regName')?.value.trim();
  const email = document.getElementById('regEmail')?.value.trim();
  const password = document.getElementById('regPassword')?.value;
  const preferredSize = document.getElementById('regSize')?.value || 'UK 8';

  // Basic validation
  if (!name || !email || !password) {
    showToast('Please fill in all required fields.', 'warn');
    return;
  }

  if (password.length < 6) {
    showToast('Password must be at least 6 characters.', 'warn');
    return;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        password,
        preferredSize
      })
    }
    );

    const data = await response.json();

    if (!response.ok) {
      showToast(data.message || "Registration failed.", "warn");
      return;
    }

    // Save JWT
    localStorage.setItem("sneaker_token", data.token);

    // Save logged-in user
    currentUser = data.user;

    localStorage.setItem(
      "sneaker_user",
      JSON.stringify(currentUser)
    );

    updateAuthUI();
    closeAuthModal();

    showToast(
      `Account created! Welcome, <strong>${currentUser.name}</strong>!`,
      'love'
    );

    // Continue the action that opened the login/register modal
    if (typeof pendingAuthAction === 'function') {
      const action = pendingAuthAction;
      pendingAuthAction = null;
      action();
    }

  } catch (error) {
    console.error("Registration error:", error);

    showToast(
      "Unable to connect to the server.",
      "warn"
    );
  }
}

function continueAsGuest() {
  currentUser = {
    name: "Guest Collector",
    email: "guest@sneakerstore.com",
    tier: "Guest Shopper",
    points: 0,
    size: "UK 8"
  };

  // Guest should not inherit another user's data
  wishlist = [];
  cart = [];

  updateWishlistUI();
  updateCartUI();
  updateAuthUI();
  renderSneakers();
  renderWishlistItems();

  closeAuthModal();

  showToast(
    `Continuing as Guest! You can browse smoothly.`,
    'info'
  );

  if (typeof pendingAuthAction === 'function') {
    const action = pendingAuthAction;
    pendingAuthAction = null;
    action();
  }
}

function logoutUser() {
  // Sign out the current user
  currentUser = null;

  // Remove authentication information
  localStorage.removeItem('sneaker_user');
  localStorage.removeItem('sneaker_token');

  // Clear user-specific frontend data
  wishlist = [];
  cart = [];

  // Update UI
  updateWishlistUI();
  updateCartUI();
  updateAuthUI();
  renderSneakers();
  renderWishlistItems();

  // Close user dropdown
  if (userDropdown) {
    userDropdown.classList.remove('show');
  }

  // Close wishlist if it is open
  closeWishlistDrawer();

  showToast(
    'You have signed out. See you next drop!',
    'info'
  );
}

function handleAuthClick() {
  if (currentUser) {
    if (userDropdown) userDropdown.classList.toggle('show');
  } else {
    openAuthModal();
  }
}

function updateAuthUI() {
  if (!authTriggerBtn) return;

  const dropdownUserAvatar = document.getElementById('dropdownUserAvatar');
  const dropdownUserName = document.getElementById('dropdownUserName');
  const dropdownUserTier = document.getElementById('dropdownUserTier');
  const dropdownWishlistCount = document.getElementById('dropdownWishlistCount');

  if (currentUser) {
    authTriggerBtn.classList.add('logged-in');
    const initials = currentUser.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'SN';
    const firstName = currentUser.name.split(' ')[0];

    authTriggerBtn.innerHTML = `
      <div class="auth-user-avatar">${initials}</div>
      <span class="auth-user-name">${firstName}</span>
    `;
    authTriggerBtn.setAttribute('title', `Logged in as ${currentUser.name}`);

    if (dropdownUserAvatar) dropdownUserAvatar.textContent = initials;
    if (dropdownUserName) dropdownUserName.textContent = currentUser.name;
    if (dropdownUserTier) dropdownUserTier.textContent = `⚡ ${currentUser.tier}`;
    if (dropdownWishlistCount) dropdownWishlistCount.textContent = wishlist.length;
  } else {
    authTriggerBtn.classList.remove('logged-in');
    authTriggerBtn.innerHTML = `
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    `;
    authTriggerBtn.setAttribute('title', 'Sign In / Profile');
  }
}

// Close dropdown on outside click
window.addEventListener('click', (e) => {
  if (userDropdown && !e.target.closest('#userProfileWrap')) {
    userDropdown.classList.remove('show');
  }
});

// ==========================================================================
// 7. Cart & Promo Code Management
// ==========================================================================

function getAuthToken() {
  return localStorage.getItem("sneaker_token");
}

async function addToCart(shoeId, size = "UK 8", event = null) {
  if (event) event.stopPropagation();

  const shoe = SNEAKERS_DATA.find(s => s.id === shoeId);

  if (!shoe) {
    console.error("Product not found:", shoeId);
    return;
  }

  // User must be logged in
  const token = getAuthToken();

  if (!token) {
    showToast(
      "Please sign in before adding items to your bag.",
      "warn"
    );

    openAuthModal("login");
    return;
  }

  try {
    const response = await fetch(
      `${API_BASE_URL}/api/cart`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },

        body: JSON.stringify({
          productId: shoe.id,
          size: size,
          quantity: 1
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Add to cart error:", data);

      showToast(
        data.message || "Unable to add item to cart.",
        "warn"
      );

      return;
    }

    // Convert backend cart format to frontend format
    cart = data.cart.items.map(item => ({
      id: item.productId,
      name: item.name,
      price: item.price,
      image: item.image,
      color: item.color,
      size: item.size,
      quantity: item.quantity,

      // Keep MongoDB cart item ID
      cartItemId: item._id
    }));

    updateCartUI();
    triggerBadgePop();

    showToast(
      `Added <strong>${shoe.name}</strong> (${size}) to your bag!`,
      "success"
    );

  } catch (error) {
    console.error("Cart connection error:", error);

    showToast(
      "Unable to connect to the cart server.",
      "warn"
    );
  }
}

async function loadCartFromBackend() {
  const token = getAuthToken();

  if (!token) {
    cart = [];
    updateCartUI();
    return;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/api/cart`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Failed to load cart:", data);
      return;
    }

    cart = data.items.map(item => ({
      id: item.productId,
      name: item.name,
      price: item.price,
      image: item.image,
      color: item.color,
      size: item.size,
      quantity: item.quantity,
      cartItemId: item._id
    }));

    updateCartUI();

    console.log("Cart loaded from MongoDB:", cart);

  } catch (error) {
    console.error("Cart loading error:", error);
  }
}

async function updateCartQuantity(index, delta) {
  const item = cart[index];

  if (!item) {
    console.error("Cart item not found at index:", index);
    return;
  }

  const token = getAuthToken();

  if (!token) {
    showToast("Please login first.", "warn");
    return;
  }

  const newQuantity = Number(item.quantity) + Number(delta);

  console.log("========== CART UPDATE ==========");
  console.log("Item:", item);
  console.log("Current quantity:", item.quantity);
  console.log("Delta:", delta);
  console.log("New quantity:", newQuantity);
  console.log("MongoDB item ID:", item.cartItemId);
  console.log("Token exists:", !!token);

  // Remove item when quantity reaches 0
  if (newQuantity <= 0) {
    await removeCartItem(index);
    return;
  }

  if (!item.cartItemId) {
    console.error("ERROR: cartItemId is missing!");
    showToast("Cart item ID is missing.", "warn");
    return;
  }

  try {
    const url = `${API_BASE_URL}/api/cart/${item.cartItemId}`;

    console.log("PUT URL:", url);
    console.log("PUT payload:", {
      quantity: newQuantity
    });

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        quantity: newQuantity
      })
    });

    const data = await response.json();

    console.log("Backend status:", response.status);
    console.log("Backend response:", data);

    if (!response.ok) {
      showToast(
        data.message || "Unable to update quantity.",
        "warn"
      );
      return;
    }

    cart = data.cart.items.map(cartItem => ({
      id: cartItem.productId,
      name: cartItem.name,
      price: cartItem.price,
      image: cartItem.image,
      color: cartItem.color,
      size: cartItem.size,
      quantity: cartItem.quantity,
      cartItemId: cartItem._id
    }));

    updateCartUI();

  } catch (error) {
    console.error("Quantity update error:", error);

    showToast(
      "Unable to connect to cart server.",
      "warn"
    );
  }
}


async function removeCartItem(index) {
  const item = cart[index];

  if (!item) {
    console.error("Cart item not found at index:", index);
    return;
  }

  const token = getAuthToken();

  if (!token) {
    showToast("Please login first.", "warn");
    return;
  }

  console.log("========== REMOVE CART ITEM ==========");
  console.log("Item:", item);
  console.log("MongoDB item ID:", item.cartItemId);

  if (!item.cartItemId) {
    console.error("ERROR: cartItemId is missing!");
    showToast("Cart item ID is missing.", "warn");
    return;
  }

  try {
    const url = `${API_BASE_URL}/api/cart/${item.cartItemId}`;

    console.log("DELETE URL:", url);

    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    const data = await response.json();

    console.log("Delete status:", response.status);
    console.log("Delete response:", data);

    if (!response.ok) {
      showToast(
        data.message || "Unable to remove item.",
        "warn"
      );
      return;
    }

    cart = data.cart.items.map(cartItem => ({
      id: cartItem.productId,
      name: cartItem.name,
      price: cartItem.price,
      image: cartItem.image,
      color: cartItem.color,
      size: cartItem.size,
      quantity: cartItem.quantity,
      cartItemId: cartItem._id
    }));

    updateCartUI();

    showToast(
      `Removed <strong>${item.name}</strong> from bag`,
      "info"
    );

  } catch (error) {
    console.error("Remove cart item error:", error);

    showToast(
      "Unable to connect to cart server.",
      "warn"
    );
  }
}

function saveCart() {
  localStorage.setItem('kicks_cart', JSON.stringify(cart));
}

function applyPromoCode() {
  const promoInput = document.getElementById('promoInput');
  if (!promoInput) return;
  const code = promoInput.value.trim().toUpperCase();

  if (code === 'SNEAKER20') {
    appliedPromo = { code: 'SNEAKER20', discountPercent: 20 };
    showToast('🎉 Promo code <strong>SNEAKER20</strong> applied! 20% discount added.', 'love');
  } else if (code === 'GRAIL10') {
    appliedPromo = { code: 'GRAIL10', discountPercent: 10 };
    showToast('🎉 Promo code <strong>GRAIL10</strong> applied! 10% discount added.', 'success');
  } else if (code === 'DROP500') {
    appliedPromo = { code: 'DROP500', flatDiscount: 500 };
    showToast('🎉 Promo code <strong>DROP500</strong> applied! ₹500 flat discount added.', 'success');
  } else {
    showToast('Invalid promo code. Try <strong>SNEAKER20</strong> or <strong>GRAIL10</strong>', 'warn');
    return;
  }

  updateCartUI();
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  let discount = 0;
  if (appliedPromo) {
    if (appliedPromo.discountPercent) {
      discount += Math.round(subtotal * (appliedPromo.discountPercent / 100));
    } else if (appliedPromo.flatDiscount) {
      discount += appliedPromo.flatDiscount;
    }
  }

  const total = Math.max(0, subtotal - discount);

  // Update badges
  if (cartBadge) {
    cartBadge.textContent = totalItems;
    cartBadge.classList.toggle('has-items', totalItems > 0);
  }

  if (cartCountSummary) {
    cartCountSummary.textContent = `(${totalItems} item${totalItems === 1 ? '' : 's'})`;
  }

  if (cartSubtotalEl) cartSubtotalEl.textContent = formatINR(subtotal);
  if (cartDiscountEl) cartDiscountEl.textContent = discount > 0 ? `-${formatINR(discount)}` : '₹0';
  if (cartTotalEl) cartTotalEl.textContent = formatINR(total);

  // Render items list
  if (cartItemsContainer) {
    if (cart.length === 0) {
      if (emptyCartView) emptyCartView.style.display = 'flex';
      cartItemsContainer.innerHTML = '';
      if (cartCheckoutBtn) cartCheckoutBtn.disabled = true;
    } else {
      if (emptyCartView) emptyCartView.style.display = 'none';
      if (cartCheckoutBtn) cartCheckoutBtn.disabled = false;

      cartItemsContainer.innerHTML = cart.map((item, idx) => `
        <div class="cart-item" style="animation-delay: ${idx * 40}ms">
          <div class="cart-item-img-wrapper">
            <img src="${item.image}" alt="${item.name}" />
          </div>
          <div class="cart-item-info">
            <h4 class="cart-item-title">${item.name}</h4>
            <div class="cart-item-meta">
              <span class="size-pill">${item.size}</span>
              <span class="color-text">${item.color.split('/')[0]}</span>
            </div>
            <div class="cart-item-price-row">
              <div class="cart-item-price">${formatINR(item.price * item.quantity)}</div>
              <div class="quantity-control">
                <button class="qty-btn" onclick="updateCartQuantity(${idx}, -1)" aria-label="Decrease quantity">−</button>
                <span class="qty-num">${item.quantity}</span>
                <button class="qty-btn" onclick="updateCartQuantity(${idx}, 1)" aria-label="Increase quantity">+</button>
              </div>
            </div>
          </div>
          <button class="cart-item-remove" onclick="removeCartItem(${idx})" aria-label="Remove item" title="Remove">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      `).join('');
    }
  }
}

function triggerBadgePop() {
  if (!cartBadge) return;
  cartBadge.classList.remove('pop-anim');
  void cartBadge.offsetWidth;
  cartBadge.classList.add('pop-anim');
}

function openCart() {
  if (!cartDrawer || !cartOverlay) return;
  cartDrawer.classList.add('open');
  cartOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  if (!cartDrawer || !cartOverlay) return;
  cartDrawer.classList.remove('open');
  cartOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ==========================================================================
// 8. Wishlist Management & Drawer
// ==========================================================================

async function toggleWishlist(shoeId, event = null) {
  if (event) event.stopPropagation();

  const shoe = SNEAKERS_DATA.find(s => s.id === shoeId);

  if (!shoe) {
    console.error("Product not found:", shoeId);
    return;
  }

  const token = getAuthToken();

  // User must be logged in
  if (!token) {
    showToast(
      "Please sign in to use your wishlist.",
      "warn"
    );

    openAuthModal();
    return;
  }

  const alreadyInWishlist = wishlist.includes(shoeId);

  try {

    // ==========================================
    // REMOVE FROM WISHLIST
    // ==========================================

    if (alreadyInWishlist) {

      const response = await fetch(`${API_BASE_URL}/api/wishlist/${shoeId}`, {
        method: "DELETE",

        headers: {
          "Authorization": `Bearer ${token}`
        }
      }
      );

      const data = await response.json();

      console.log("Remove wishlist response:", data);

      if (!response.ok) {
        showToast(
          data.message || "Unable to remove from wishlist.",
          "warn"
        );
        return;
      }

      // Remove from frontend wishlist
      wishlist = wishlist.filter(id => id !== shoeId);

      showToast(
        `Removed <strong>${shoe.name}</strong> from wishlist`,
        "info"
      );
    }


    // ==========================================
    // ADD TO WISHLIST
    // ==========================================

    else {

      const response = await fetch(`${API_BASE_URL}/api/wishlist`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },

        body: JSON.stringify({
          productId: shoeId
        })
      }
      );

      const data = await response.json();

      console.log("Add wishlist response:", data);

      if (!response.ok) {
        showToast(
          data.message || "Unable to add to wishlist.",
          "warn"
        );
        return;
      }

      // Add product ID to frontend wishlist
      if (!wishlist.includes(shoeId)) {
        wishlist.push(shoeId);
      }

      showToast(
        `Saved <strong>${shoe.name}</strong> to wishlist! ❤️`,
        "love"
      );
    }

    // Update UI
    updateWishlistUI();
    renderSneakers();
    renderWishlistItems();

  } catch (error) {

    console.error("Wishlist connection error:", error);

    showToast(
      "Unable to connect to wishlist server.",
      "warn"
    );
  }
}

async function loadWishlistFromBackend() {
  const token = getAuthToken();

  if (!token) {
    wishlist = [];
    updateWishlistUI();
    return;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/api/wishlist`, {
      method: "GET",

      headers: {
        "Authorization": `Bearer ${token}`
      }
    }
    );

    const data = await response.json();

    console.log(
      "Wishlist loaded from MongoDB:",
      data
    );

    if (!response.ok) {
      console.error(
        "Failed to load wishlist:",
        data
      );
      return;
    }

    // MongoDB returns populated Product objects
    wishlist = data.products.map(product => product.productId);

    updateWishlistUI();
    renderSneakers();
    renderWishlistItems();

  } catch (error) {

    console.error(
      "Wishlist loading error:",
      error
    );
  }
}

function updateWishlistUI() {
  if (wishlistCountBadge) {
    wishlistCountBadge.textContent = wishlist.length;
    wishlistCountBadge.classList.toggle('has-items', wishlist.length > 0);
  }
  const dropdownWishlistCount = document.getElementById('dropdownWishlistCount');
  if (dropdownWishlistCount) dropdownWishlistCount.textContent = wishlist.length;
}

function openWishlistDrawer() {
  renderWishlistItems();
  if (wishlistDrawer && wishlistOverlay) {
    wishlistDrawer.classList.add('open');
    wishlistOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  if (userDropdown) userDropdown.classList.remove('show');
}

function closeWishlistDrawer() {
  if (wishlistDrawer && wishlistOverlay) {
    wishlistDrawer.classList.remove('open');
    wishlistOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function renderWishlistItems() {
  if (!wishlistItemsContainer) return;
  const wishlistedShoes = SNEAKERS_DATA.filter(s => wishlist.includes(s.id));

  if (wishlistCountSummary) {
    wishlistCountSummary.textContent = `(${wishlistedShoes.length} item${wishlistedShoes.length === 1 ? '' : 's'})`;
  }

  if (wishlistedShoes.length === 0) {
    wishlistItemsContainer.innerHTML = `
      <div class="empty-cart-state" style="display: flex; padding: 40px 20px;">
        <div class="empty-cart-icon">❤️</div>
        <h3>No Saved Grails Yet</h3>
        <p style="color: var(--text-muted); font-size: 14px;">Tap the heart icon on any sneaker to save it to your personal wishlist.</p>
        <button class="btn btn-primary" onclick="closeWishlistDrawer()" style="margin-top: 10px;">Explore Drops</button>
      </div>
    `;
    return;
  }

  wishlistItemsContainer.innerHTML = wishlistedShoes.map(shoe => `
    <div class="cart-item">
      <div class="cart-item-img-wrapper" onclick="closeWishlistDrawer(); openQuickView(${shoe.id})">
        <img src="${shoe.image}" alt="${shoe.name}" />
      </div>
      <div class="cart-item-info">
        <h4 class="cart-item-title" onclick="closeWishlistDrawer(); openQuickView(${shoe.id})">${shoe.name}</h4>
        <div class="cart-item-meta">
          <span class="category-tag">${shoe.categoryLabel}</span>
          <span class="color-text">${shoe.color.split('/')[0]}</span>
        </div>
        <div class="cart-item-price-row">
          <div class="cart-item-price">${formatINR(shoe.price)}</div>
          <button class="btn btn-primary" style="padding: 6px 14px; font-size: 12px;" onclick="moveWishlistToBag(${shoe.id})">Move to Bag</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="toggleWishlist(${shoe.id})" aria-label="Remove item" title="Remove">
        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  `).join('');
}

async function moveWishlistToBag(shoeId) {
  const token = getAuthToken();

  if (!token) {
    showToast("Please login first.", "warn");
    return;
  }

  try {
    // 1. Add item to cart
    await handleShoeAddToCart(shoeId, "UK 8");

    // 2. Remove item from MongoDB wishlist
    const response = await fetch(`${API_BASE_URL}/api/wishlist/${shoeId}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }
    );

    const data = await response.json();

    console.log(
      "Move to bag - wishlist delete response:",
      data
    );

    if (!response.ok) {
      showToast(
        data.message ||
        "Item added to bag, but could not be removed from wishlist.",
        "warn"
      );
      return;
    }

    // 3. Remove item from frontend wishlist
    wishlist = wishlist.filter(id => id !== shoeId);

    // 4. Update UI
    updateWishlistUI();
    renderWishlistItems();
    renderSneakers();

    showToast(
      "Item moved from wishlist to bag! 🛍️",
      "success"
    );

    closeWishlistDrawer();
    openCart();

  } catch (error) {
    console.error(
      "Move wishlist item to bag error:",
      error
    );

    showToast(
      "Unable to move item to bag.",
      "warn"
    );
  }
}
// ==========================================================================
// 9. Quick View Interactive Modal
// ==========================================================================

function openQuickView(shoeId) {
  const shoe = SNEAKERS_DATA.find(s => s.id === shoeId);
  if (!shoe) return;

  currentModalShoe = shoe;
  selectedModalSize = currentUser?.preferredSize || SIZES[3]; // Default UK 8 or user pref

  const modalBody = document.getElementById('modalContent');
  if (!modalBody) return;

  const discountPercent = Math.round(((shoe.originalPrice - shoe.price) / shoe.originalPrice) * 100);

  modalBody.innerHTML = `
    <div class="modal-grid">
      <div class="modal-gallery">
        <div class="modal-main-img-wrap">
          <img id="modalMainImg" src="${shoe.image}" alt="${shoe.name}" />
          <div class="modal-badge badge-${shoe.badgeType}">${shoe.badge}</div>
        </div>
        <div class="modal-authenticity">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#10b981" stroke-width="2.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          <span>100% Verified Authentic • Deadstock Guarantee</span>
        </div>
      </div>

      <div class="modal-info">
        <div class="modal-category">${shoe.categoryLabel}</div>
        <h2 class="modal-title">${shoe.name}</h2>

        <div class="modal-rating-row">
          <div class="stars">${renderStars(shoe.rating)}</div>
          <span class="modal-rating-val">${shoe.rating}</span>
          <span class="modal-reviews-count">(${shoe.reviews} verified reviews)</span>
        </div>

        <div class="modal-price-box">
          <div class="modal-price-main">${formatINR(shoe.price)}</div>
          <span class="modal-orig-price">${formatINR(shoe.originalPrice)}</span>
          <span class="modal-discount-pill">Save ${discountPercent}%</span>
        </div>

        <p class="modal-desc">${shoe.description}</p>

        <div class="modal-meta-grid">
          <div class="meta-cell">
            <span class="meta-label">Colorway</span>
            <span class="meta-value">${shoe.color}</span>
          </div>
          <div class="meta-cell">
            <span class="meta-label">Best Use</span>
            <span class="meta-value">${shoe.bestFor}</span>
          </div>
          <div class="meta-cell">
            <span class="meta-label">Release</span>
            <span class="meta-value">2025 / 2026</span>
          </div>
          <div class="meta-cell">
            <span class="meta-label">Stock Status</span>
                ${Number(shoe.stock) <= 0
      ? `<span class="meta-value out-of-stock">
                          ● Out of Stock
                         </span>`
      : Number(shoe.stock) <= 3
        ? `<span class="meta-value low-stock">
                              ● Only ${shoe.stock} pairs left
                            </span>`
        : `<span class="meta-value in-stock">
                              ● ${shoe.stock} pairs available • Express Dispatch
                            </span>`
    }
            </div>
          </div>

          <div class="size-section">
          <div class="size-header">
            <span class="size-title">Select Size (UK)</span>
            <span class="size-guide-link" onclick="showToast('Jordan 1 fits true to size (TTS).', 'info')">Size Guide</span>
          </div>
          <div class="size-selector-grid">
            ${SIZES.map(s => `
              <button class="size-btn ${s === selectedModalSize ? 'active' : ''}" 
                      onclick="selectModalSize('${s}', this)">
                ${s}
              </button>
            `).join('')}
          </div>
        </div>

        <div class="modal-actions">
          <button
             class="btn btn-primary modal-cart-btn"
             onclick="addModalItemToCart()"
             ${Number(shoe.stock) <= 0 ? 'disabled' : ''}
            >
             <svg viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2">
                 <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                 <line x1="3" y1="6" x2="21" y2="6"></line>
                 <path d="M16 10a4 4 0 0 1-8 0"></path>
             </svg>
         
             ${Number(shoe.stock) <= 0
      ? "Out of Stock"
      : `Add to Bag • ${formatINR(shoe.price)}`
    }
         </button>
          
          <button class="modal-wishlist-btn ${wishlist.includes(shoe.id) ? 'active' : ''}" 
                  onclick="toggleWishlist(${shoe.id}); this.classList.toggle('active');" 
                  aria-label="Wishlist">
            <svg viewBox="0 0 24 24" width="22" height="22">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;

  if (quickViewModal && modalOverlay) {
    quickViewModal.classList.add('open');
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function selectModalSize(size, btnEl) {
  selectedModalSize = size;
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
}

function addModalItemToCart() {
  if (!currentModalShoe) return;
  const shoe = currentModalShoe;
  const size = selectedModalSize;
  closeQuickView();
  handleShoeAddToCart(shoe.id, size);
}

function closeQuickView() {
  if (!quickViewModal || !modalOverlay) return;
  quickViewModal.classList.remove('open');
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ==========================================================================
// 10. Checkout & Order Placement Workflow
// ==========================================================================

function openCheckoutModal() {
  if (cart.length === 0) {
    showToast('Your bag is empty! Add some grails first.', 'warn');
    return;
  }

  // If user not logged in, prompt Auth first
  if (!currentUser) {
    openAuthModal(cart[0], () => {
      openCheckoutModal();
    });
    return;
  }

  // Pre-fill user name if logged in
  const shipName = document.getElementById('shipName');
  if (shipName && currentUser) {
    shipName.value = currentUser.name;
  }

  // Update checkout calculation
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let discount = 0;
  if (appliedPromo) {
    if (appliedPromo.discountPercent) {
      discount += Math.round(subtotal * (appliedPromo.discountPercent / 100));
    } else if (appliedPromo.flatDiscount) {
      discount += appliedPromo.flatDiscount;
    }
  }
  const total = Math.max(0, subtotal - discount);

  const checkoutSubtotal = document.getElementById('checkoutSubtotal');
  const checkoutDiscount = document.getElementById('checkoutDiscount');
  const checkoutTotal = document.getElementById('checkoutTotal');

  if (checkoutSubtotal) checkoutSubtotal.textContent = formatINR(subtotal);
  if (checkoutDiscount) checkoutDiscount.textContent = discount > 0 ? `-${formatINR(discount)}` : '₹0';
  if (checkoutTotal) checkoutTotal.textContent = formatINR(total);

  closeCart();
  if (checkoutModal && checkoutOverlay) {
    checkoutModal.classList.add('open');
    checkoutOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeCheckoutModal() {
  if (checkoutModal && checkoutOverlay) {
    checkoutModal.classList.remove('open');
    checkoutOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function selectPaymentMethod(method, el) {
  selectedPayment = method;
  document.querySelectorAll('.payment-method-card').forEach(c => c.classList.remove('active'));
  if (el) el.classList.add('active');
}

async function handlePlaceOrder(e) {
  e.preventDefault();

  const token = getAuthToken();

  if (!token) {
    showToast("Please login before placing your order.", "warn");
    return;
  }

  if (cart.length === 0) {
    showToast("Your cart is empty.", "warn");
    return;
  }

  const placeOrderBtn = document.getElementById("placeOrderBtn");

  if (placeOrderBtn) {
    placeOrderBtn.disabled = true;
    placeOrderBtn.innerHTML =
      `<span>⏳ Processing Your Order...</span>`;
  }

  // ------------------------------------------
  // Get shipping information
  // ------------------------------------------

  const shippingAddress = {
    fullName:
      document.getElementById("shipName")?.value.trim() ||
      currentUser?.name ||
      "",

    phone:
      document.getElementById("shipPhone")?.value.trim() ||
      "",

    address:
      document.getElementById("shipAddress")?.value.trim() ||
      "",

    city:
      document.getElementById("shipCity")?.value.trim() ||
      "",

    state:
      document.getElementById("shipState")?.value.trim() ||
      "",

    pincode:
      document.getElementById("shipPincode")?.value.trim() ||
      ""
  };

  // ------------------------------------------
  // Basic validation
  // ------------------------------------------

  if (
    !shippingAddress.fullName ||
    !shippingAddress.phone ||
    !shippingAddress.address ||
    !shippingAddress.city ||
    !shippingAddress.state ||
    !shippingAddress.pincode
  ) {
    showToast(
      "Please complete your shipping address.",
      "warn"
    );

    if (placeOrderBtn) {
      placeOrderBtn.disabled = false;
      placeOrderBtn.innerHTML =
        `<span>🔒 Place Order & Pay Now</span>`;
    }

    return;
  }

  try {

    // ------------------------------------------
    // Determine payment method
    // ------------------------------------------

    const paymentMethod =
      selectedPayment === "cod"
        ? "COD"
        : "ONLINE";
    // ==========================================
    // STEP 1
    // CREATE OUR MONGODB ORDER
    // ==========================================

    const response = await fetch(`${API_BASE_URL}/api/orders`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },

      body: JSON.stringify({
        shippingAddress: shippingAddress,

        paymentMethod: paymentMethod,

        promoCode: appliedPromo?.code || ""
      })
    }
    );

    const data = await response.json();

    console.log("Order response:", data);


    // ------------------------------------------
    // Backend error
    // ------------------------------------------

    if (!response.ok) {

      showToast(
        data.message || "Unable to place order.",
        "warn"
      );

      if (placeOrderBtn) {
        placeOrderBtn.disabled = false;
        placeOrderBtn.innerHTML =
          `<span>🔒 Place Order & Pay Now</span>`;
      }

      return;
    }


    const order = data.order;

    console.log(
      "MongoDB Order Created:",
      order
    );


    // ==========================================
    // COD FLOW
    // ==========================================

    if (paymentMethod === "COD") {

      // Backend already:
      // 1. Deducted stock
      // 2. Cleared cart

      cart = [];

      appliedPromo = null;

      updateCartUI();

      await loadProductsFromBackend();
      await loadCartFromBackend();

      // ----------------------------------------
      // Reset button
      // ----------------------------------------

      if (placeOrderBtn) {
        placeOrderBtn.disabled = false;

        placeOrderBtn.innerHTML =
          `<span>🔒 Place Order & Pay Now</span>`;
      }


      // ----------------------------------------
      // Close checkout
      // ----------------------------------------

      closeCheckoutModal();


      // ----------------------------------------
      // Show success modal
      // ----------------------------------------

      showOrderSuccessModal(order);


      showToast(
        `🎉 Order <strong>#${order.id}</strong> placed successfully!`,
        "love"
      );

      return;
    }


    // ==========================================
    // ONLINE PAYMENT FLOW
    // ==========================================

    if (paymentMethod === "ONLINE") {

      if (typeof Razorpay === "undefined") {

        showToast(
          "Razorpay Checkout could not be loaded.",
          "warn"
        );

        if (placeOrderBtn) {
          placeOrderBtn.disabled = false;

          placeOrderBtn.innerHTML =
            `<span>🔒 Place Order & Pay Now</span>`;
        }

        return;
      }


      // ----------------------------------------
      // Create Razorpay Order
      // ----------------------------------------

      const razorpayResponse = await fetch(
        `${API_BASE_URL}/api/payment/create-order`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },

          body: JSON.stringify({
            orderId: order.id
          })
        }
      );


      const razorpayData =
        await razorpayResponse.json();


      console.log(
        "Razorpay order response:",
        razorpayData
      );


      if (!razorpayResponse.ok) {

        showToast(
          razorpayData.message ||
          "Unable to start online payment.",
          "warn"
        );

        if (placeOrderBtn) {
          placeOrderBtn.disabled = false;

          placeOrderBtn.innerHTML =
            `<span>🔒 Place Order & Pay Now</span>`;
        }

        return;
      }


      // ========================================
      // OPEN RAZORPAY CHECKOUT
      // ========================================

      const options = {

        key: "rzp_test_TUkhVVhJ1OIUxQ",

        amount:
          razorpayData.razorpayOrder.amount,

        currency:
          razorpayData.razorpayOrder.currency,

        name: "Sneaker Store",

        description: "Sneaker Store Order",

        order_id:
          razorpayData.razorpayOrder.id,


        // --------------------------------------
        // Successful payment
        // --------------------------------------

        handler: async function (paymentResponse) {

          try {

            console.log(
              "Razorpay payment response:",
              paymentResponse
            );


            // ----------------------------------
            // Verify payment on backend
            // ----------------------------------

            const verifyResponse = await fetch(`${API_BASE_URL}/api/payment/verify`, {
              method: "POST",

              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
              },

              body: JSON.stringify({

                orderId: order.id,

                razorpay_order_id:
                  paymentResponse.razorpay_order_id,

                razorpay_payment_id:
                  paymentResponse.razorpay_payment_id,

                razorpay_signature:
                  paymentResponse.razorpay_signature
              })
            }
            );


            const verifyData =
              await verifyResponse.json();


            console.log(
              "Payment verification response:",
              verifyData
            );


            if (!verifyResponse.ok) {

              showToast(
                verifyData.message ||
                "Payment verification failed.",
                "warn"
              );

              if (placeOrderBtn) {
                placeOrderBtn.disabled = false;

                placeOrderBtn.innerHTML =
                  `<span>🔒 Place Order & Pay Now</span>`;
              }

              return;
            }


            // ==================================
            // PAYMENT SUCCESS
            // ==================================

            const paidOrder =
              verifyData.order;


            // Backend has now:
            // 1. Marked payment PAID
            // 2. Deducted stock
            // 3. Cleared cart

            cart = [];

            appliedPromo = null;

            updateCartUI();


            // ----------------------------------
            // Refresh latest backend data
            // ----------------------------------

            await loadProductsFromBackend();
            await loadCartFromBackend();
            await loadOrdersFromBackend();


            // ----------------------------------
            // Reset button
            // ----------------------------------

            if (placeOrderBtn) {

              placeOrderBtn.disabled = false;

              placeOrderBtn.innerHTML =
                `<span>🔒 Place Order & Pay Now</span>`;
            }


            // ----------------------------------
            // Close checkout
            // ----------------------------------

            closeCheckoutModal();


            // ----------------------------------
            // Show success
            // ----------------------------------

            showOrderSuccessModal(paidOrder);


            showToast(
              `🎉 Payment successful! Order <strong>#${paidOrder._id}</strong> confirmed.`,
              "love"
            );

          } catch (error) {

            console.error(
              "Payment verification error:",
              error
            );

            showToast(
              "Payment was received but verification failed. Please check your orders.",
              "warn"
            );

            if (placeOrderBtn) {

              placeOrderBtn.disabled = false;

              placeOrderBtn.innerHTML =
                `<span>🔒 Place Order & Pay Now</span>`;
            }
          }
        },


        // --------------------------------------
        // Payment modal closed
        // --------------------------------------

        modal: {

          ondismiss: function () {

            console.log(
              "Razorpay checkout closed by user."
            );

            if (placeOrderBtn) {

              placeOrderBtn.disabled = false;

              placeOrderBtn.innerHTML =
                `<span>🔒 Place Order & Pay Now</span>`;
            }

            showToast(
              "Payment cancelled. Your order is still pending.",
              "warn"
            );
          }
        }
      };


      // ----------------------------------------
      // Open Razorpay
      // ----------------------------------------

      const razorpay =
        new Razorpay(options);

      razorpay.open();

      return;
    }

  } catch (error) {

    console.error(
      "Order placement error:",
      error
    );

    showToast(
      "Unable to connect to the order server.",
      "warn"
    );

    if (placeOrderBtn) {

      placeOrderBtn.disabled = false;

      placeOrderBtn.innerHTML =
        `<span>🔒 Place Order & Pay Now</span>`;
    }
  }
}

function showOrderSuccessModal(order) {

  const successOrderId =
    document.getElementById("successOrderId");

  const orderItemsSummary =
    document.getElementById("orderItemsSummary");

  // ------------------------------------------
  // Order ID
  // ------------------------------------------

  const orderId =
    order.id || order._id || "N/A";

  if (successOrderId) {
    successOrderId.textContent =
      `ORDER #${orderId}`;
  }


  // ------------------------------------------
  // Order items
  // ------------------------------------------

  if (orderItemsSummary) {

    const items =
      Array.isArray(order.items)
        ? order.items
        : [];

    orderItemsSummary.innerHTML = `

      <div style="
        font-weight: 700;
        margin-bottom: 8px;
        font-size: 13px;
      ">
        Items in this Drop:
      </div>

      ${items.map(item => `
          <div style="
            display: flex;
            justify-content: space-between;
            font-size: 12.5px;
            padding: 4px 0;
            border-bottom: 1px solid var(--border-subtle);
          ">

            <span>
              ${item.name || "Product"}
              (${item.size || "N/A"})
              × ${item.quantity || 1}
            </span>

            <strong>
              ${formatINR(
      Number(item.price || 0) *
      Number(item.quantity || 1)
    )}
            </strong>

          </div>
        `).join("")
      }

      <div style="
        display: flex;
        justify-content: space-between;
        font-size: 13px;
        font-weight: 800;
        margin-top: 8px;
        color: var(--accent-cyan);
      ">

        <span>Total</span>

        <span>
          ${formatINR(order.totalAmount || 0)}
        </span>

      </div>
    `;
  }


  // ------------------------------------------
  // Open success modal
  // ------------------------------------------

  if (orderSuccessModal && orderSuccessOverlay) {

    orderSuccessModal.classList.add("open");

    orderSuccessOverlay.classList.add("active");

    document.body.style.overflow = "hidden";
  }
}

function closeOrderSuccessModal() {
  if (orderSuccessModal && orderSuccessOverlay) {
    orderSuccessModal.classList.remove('open');
    orderSuccessOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

async function openOrdersModal() {

  if (userDropdown) {
    userDropdown.classList.remove('show');
  }

  const token = getAuthToken();

  if (!token) {
    showToast(
      "Please login to view your orders.",
      "warn"
    );
    return;
  }

  if (ordersModal && ordersOverlay) {

    ordersModal.classList.add('open');

    ordersOverlay.classList.add('active');

    document.body.style.overflow = 'hidden';
  }

  await loadOrdersFromBackend();
}

function closeOrdersModal() {
  if (ordersModal && ordersOverlay) {
    ordersModal.classList.remove('open');
    ordersOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}
async function loadOrdersFromBackend() {
  const token = getAuthToken();

  if (!token) {
    orderHistory = [];
    renderOrdersList();
    return;
  }
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/orders`,
      {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }
    );

    const data = await response.json();

    console.log("Orders loaded from MongoDB:", data);

    if (!response.ok) {
      console.error(
        "Failed to load orders:",
        data
      );

      orderHistory = [];
      renderOrdersList();
      return;
    }

    // Keep the MongoDB order structure intact
    orderHistory = Array.isArray(data)
      ? data
      : [];

    renderOrdersList();

  } catch (error) {

    console.error(
      "Orders loading error:",
      error
    );

    showToast(
      "Unable to load your orders.",
      "warn"
    );
  }
}

function renderOrdersList() {
  const container = document.getElementById('ordersListContainer');
  if (!container) return;

  if (orderHistory.length === 0) {
    container.innerHTML = `
      <div class="empty-cart-state" style="display: flex; padding: 30px 20px;">
        <div class="empty-cart-icon">📦</div>
        <h3>No Orders Placed Yet</h3>
        <p style="color: var(--text-muted); font-size: 14px;">
          Once you cop any kicks from our drops, your authenticated orders will appear here.
        </p>
        <button
          class="btn btn-primary"
          onclick="closeOrdersModal();"
          style="margin-top: 10px;"
        >
          Browse Drops
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = orderHistory.map(function (ord) {

    const items = Array.isArray(ord.items) ? ord.items : [];
    const shippingAddress = ord.shippingAddress || {};

    const fullName = shippingAddress.fullName || "N/A";
    const city = shippingAddress.city || "N/A";

    const date = ord.createdAt
      ? new Date(ord.createdAt).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric"
      })
      : "N/A";

    const productNames = items.map(function (item) {
      const name = item.name || "Unknown Product";
      const parts = name.split(" ");
      return parts.slice(0, 2).join(" ");
    }).join(", ");

    return `
      <div style="
        padding: 16px;
        background: var(--bg-tertiary);
        border: 1px solid var(--border-subtle);
        border-radius: var(--radius-sm);
      ">

        <div style="
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        ">
          <strong style="
            color: var(--accent-cyan);
            font-size: 14px;
          ">
            #${ord._id}
          </strong>

          <span style="
            font-size: 11px;
            color: var(--accent-emerald);
            font-weight: 700;
            background: rgba(16, 185, 129, 0.15);
            padding: 2px 8px;
            border-radius: 4px;
          ">
            ● ${ord.orderStatus || "UNKNOWN"}
          </span>
        </div>

        <div style="
          font-size: 12px;
          color: var(--text-muted);
          margin-bottom: 8px;
        ">
          Placed on: ${date}
          • Delivery to: ${fullName}, ${city}
        </div>

        <div style="
          font-size: 13px;
          font-weight: 700;
          color: var(--text-primary);
          display: flex;
          justify-content: space-between;
        ">

          <span>
            ${items.length}
            Pair${items.length === 1 ? "" : "s"}
            ${productNames ? `(${productNames})` : ""}
          </span>

          <span style="color: var(--accent-cyan);">
            ${formatINR(ord.totalAmount || 0)}
          </span>

        </div>

        <button
          class="order-details-btn"
          onclick="viewOrderDetails('${ord._id}')"
        >
          View Order Details →
        </button>

      </div>
    `;

  }).join("");
}

// ==========================================================================
// 11. Floating Toast Notifications
// ==========================================================================

function showToast(message, type = 'success') {
  if (!toastContainer) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  let icon = '✓';
  if (type === 'love') icon = '❤️';
  if (type === 'info') icon = 'ℹ️';
  if (type === 'warn') icon = '⚠️';

  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <div class="toast-msg">${message}</div>
    <button class="toast-close" onclick="this.parentElement.remove()" aria-label="Close">×</button>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-fade-out');
    toast.addEventListener('animationend', () => toast.remove());
  }, 3500);
}

// ==========================================================================
// 12. Event Listeners Setup
// ==========================================================================

function setupEventListeners() {
  // Search Input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      if (searchClearBtn) {
        searchClearBtn.style.display = searchQuery.length > 0 ? 'flex' : 'none';
      }
      renderSneakers();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      searchClearBtn.style.display = 'none';
      renderSneakers();
      searchInput.focus();
    });
  }

  // Filter Buttons
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter') || 'all';
      renderSneakers();
    });
  });

  // Sort Select
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderSneakers();
    });
  }

  // Cart Drawer
  if (cartTriggerBtn) cartTriggerBtn.addEventListener('click', openCart);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  // Modal
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeQuickView);
  if (modalOverlay) modalOverlay.addEventListener('click', closeQuickView);

  // Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart();
      closeQuickView();
      closeAuthModal();
      closeWishlistDrawer();
      closeCheckoutModal();
      closeOrderSuccessModal();
      closeOrdersModal();
    }
  });

  // Mobile Menu Toggle
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
      mobileMenuBtn.classList.toggle('active');
    });
  }
}

// 13. Reset All Filters
function resetFilters() {
  currentFilter = 'all';
  searchQuery = '';
  currentSort = 'featured';

  if (searchInput) searchInput.value = '';
  if (searchClearBtn) searchClearBtn.style.display = 'none';
  if (sortSelect) sortSelect.value = 'featured';

  filterButtons.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-filter') === 'all');
  });

  renderSneakers();
}

// 14. Theme Setup
function setupTheme() {
  const savedTheme = localStorage.getItem('kicks_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    updateThemeIcon(savedTheme);
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('kicks_theme', next);
      updateThemeIcon(next);
      showToast(`Switched to ${next.toUpperCase()} mode`, 'info');
    });
  }
}

function updateThemeIcon(theme) {
  if (!themeToggleBtn) return;
  if (theme === 'dark') {
    themeToggleBtn.innerHTML = `
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;
    themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
  } else {
    themeToggleBtn.innerHTML = `
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
    themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
  }
}

// 15. Scroll Animations
function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
}

// Start Application
document.addEventListener('DOMContentLoaded', initApp);

async function viewOrderDetails(orderId) {
  const token = getAuthToken();

  if (!token) {
    showToast("Please login to view order details.", "warn");
    return;
  }

  const container = document.getElementById("ordersListContainer");

  if (!container) return;

  container.innerHTML = `
        <div class="order-details-loading">
            Loading order details...
        </div>
    `;

  try {
    const response = await fetch(
      `${API_BASE_URL}/api/orders/${orderId}`,
      {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }
    );

    const order = await response.json();

    if (!response.ok) {
      showToast(
        order.message || "Unable to load order details.",
        "warn"
      );

      await loadOrdersFromBackend();
      return;
    }

    const orderDate = new Date(
      order.createdAt
    ).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });

    container.innerHTML = `
            <button
                class="order-back-btn"
                onclick="loadOrdersFromBackend()"
            >
                ← Back to Orders
            </button>

            <div class="order-details-header">

                <div>
                    <h3>Order #${order._id}</h3>

                    <p>
                        Placed on ${orderDate}
                    </p>
                </div>

                <span class="order-status-badge">
                    ● ${order.orderStatus}
                </span>

            </div>

            <div class="order-details-section">

                <h3>👟 Items</h3>

                <div class="order-items-list">

                    ${order.items.map(item => `
                        <div class="order-detail-item">

                            <img
                                src="${item.image}"
                                alt="${item.name}"
                            >

                            <div class="order-detail-item-info">

                                <h4>${item.name}</h4>

                                <p>
                                    Size: ${item.size}
                                    •
                                    Quantity: ${item.quantity}
                                </p>

                                <strong>
                                    ${formatINR(
      item.price * item.quantity
    )}
                                </strong>

                            </div>

                        </div>
                    `).join("")}

                </div>

                <div class="order-total-row">
                    <span>Total</span>

                    <strong>
                        ${formatINR(order.totalAmount)}
                    </strong>
                </div>

            </div>

            <div class="order-details-section">

                <h3>📍 Delivery Address</h3>

                <div class="order-address">

                    <strong>
                        ${order.shippingAddress.fullName}
                    </strong>

                    <span>
                        ${order.shippingAddress.phone}
                    </span>

                    <span>
                        ${order.shippingAddress.address}
                    </span>

                    <span>
                        ${order.shippingAddress.city},
                        ${order.shippingAddress.state}
                        -
                        ${order.shippingAddress.pincode}
                    </span>

                </div>

            </div>

            <div class="order-details-section">

                <h3>💳 Payment</h3>

                <div class="order-payment-row">
                    <span>Payment Method</span>

                    <strong>
                        ${order.paymentMethod}
                    </strong>
                </div>

                <div class="order-payment-row">
                    <span>Payment Status</span>

                    <strong style="
                        color: ${order.paymentStatus === "PAID"
        ? "var(--accent-emerald)"
        : order.paymentStatus === "FAILED"
          ? "#ef4444"
          : "var(--text-muted)"
      };
                    ">
                        ${order.paymentStatus === "PAID"
        ? "✓ PAID"
        : order.paymentStatus === "FAILED"
          ? "✕ FAILED"
          : "⏳ PENDING"
      }
                    </strong>
                </div>

            </div>
            ${order.orderStatus === "PLACED" ? `
    <button
        class="cancel-order-btn"
        onclick="openCancelConfirm('${order._id}')">
        Cancel Order
    </button>
` : ""}
        `;

  } catch (error) {

    console.error(
      "Order details error:",
      error
    );

    showToast(
      "Unable to connect to the order server.",
      "warn"
    );

    await loadOrdersFromBackend();
  }
}

async function cancelOrder(orderId) {
  const token = getAuthToken();

  if (!token) {
    showToast("Please login first.", "warn");
    return;
  }
  try {
    const response = await fetch(`${API_BASE_URL}/api/orders/${orderId}/cancel`, {
      method: "PATCH",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }
    );

    const data = await response.json();
    if (!response.ok) {
      showToast(
        data.message || "Unable to cancel order.",
        "warn"
      );
      return;
    }

    showToast(
      "Order cancelled successfully.",
      "success"
    );

    // Refresh latest product stock from MongoDB
    await loadProductsFromBackend();

    // Refresh orders list
    await loadOrdersFromBackend();

    // Refresh order details
    await viewOrderDetails(orderId);

  } catch (error) {
    console.error("Cancel order error:", error);

    showToast(
      "Unable to connect to the server.",
      "warn"
    );
  }
}

function openCancelConfirm(orderId) {
  window.pendingCancelOrderId = orderId;

  const overlay = document.getElementById(
    "cancelConfirmOverlay"
  );

  if (overlay) {
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}


function closeCancelConfirm() {
  const overlay = document.getElementById(
    "cancelConfirmOverlay"
  );

  if (overlay) {
    overlay.classList.remove("active");
  }

  window.pendingCancelOrderId = null;

  document.body.style.overflow = "";
}


async function confirmCancelOrder() {
  const orderId = window.pendingCancelOrderId;

  if (!orderId) {
    return;
  }

  closeCancelConfirm();

  await cancelOrder(orderId);
}