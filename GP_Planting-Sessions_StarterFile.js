/*
    Author:
    Date:
    Purpose:
*/

/* =========================================
     GLOBAL VARIABLES
========================================= */

// STEP 2

// Plant Data
const plants = [

    {
        id: 1,
        name: "Monstera Deliciosa",
        description: "Large tropical leaves perfect for bright interiors.",
        price: 34.99,
        image: "images/monsteradeliciosa.png",
        alt: "Monstera Deliciosa",
        sun: "☀️"
    },

    {
        id: 2,
        name: "Snake Plant",
        description: "Low-maintenance plant with upright leaves.",
        price: 14.99,
        image: "images/snakeplant.png",
        alt: "Snake Plant",
        sun: "🌙"
    },

    {
        id: 3,
        name: "Bird of Paradise",
        description: "Bold tropical foliage with dramatic appearance.",
        price: 49.99,
        image: "images/paradiseplant.png",
        alt: "Paradise Plant",
        sun: "🌤"
    },

    {
        id: 4,
        name: "Peace Lily",
        description: "Elegant indoor plant with beautiful white blooms.",
        price: 29.99,
        image: "images/peacelily.png",
        alt: "Peace Lily",
        sun: "🌤"
    }
];

// DOM References

// STEP 3


/* =========================================
   SESSION STORAGE
========================================= */
// Retrieve cart data from session storage
// If no cart exists yet, create an empty array instead.

// STEP 4



/* =========================================
   RENDER PLANTS
========================================= */

// STEP 5


/* =========================================
   SAVE CART
========================================= */

// STEP 6


/* =========================================
   ADD TO CART
========================================= */

// STEP 7


/* =========================================
  UPDATE QUANTITY
========================================= */

// STEP 8


/* =========================================
   RENDER CART
========================================= */

// STEP 9


/* =========================================
   TOGGLE CART
========================================= */
function toggleCart() {

    // Toggle open state of cart
    cartPanel.classList.toggle("open");

    // Change arrow direction
    if (cartPanel.classList.contains("open")) {
        collapseCart.innerHTML = "❯";
    } else {
        collapseCart.innerHTML = "❮";
    }
}

// Open/Close Main cart button
cartToggle.addEventListener("click", () => { toggleCart(); });

// Open/Close Side arrow button
collapseCart.addEventListener("click", () => { toggleCart(); });


/* =========================================
   CLICK EVENTS
========================================= */

// STEP 10


/* =========================================
   CHECKOUT
========================================= */

// STEP 11


/* =========================================
   CART BUTTON ANIMATION
========================================= */
function animateCartButton() {
    cartToggle.classList.add("bounce");
    setTimeout(() => { cartToggle.classList.remove("bounce"); }, 500);
}

/* =========================================
   INITIALIZE
========================================= */

// Set initial arrow direction and load product & cart data
collapseCart.innerHTML = "❮";
renderPlants();
renderCart();