// منتجات افتراضية
const productsList = [
    { id: 1, name: "حذاء رياضي", price: 3500, img: "https://via.placeholder.com/300" },
    { id: 2, name: "ساعة يد", price: 5500, img: "https://via.placeholder.com/300" },
    { id: 3, name: "سماعات بلوتوث", price: 2500, img: "https://via.placeholder.com/300" },
];

// عرض المنتجات
const productsContainer = document.getElementById("products");
productsList.forEach(product => {
    productsContainer.innerHTML += `
        <div class="product">
            <img src="${product.img}">
            <h3>${product.name}</h3>
            <p>${product.price} دج</p>
            <button onclick="addToCart(${product.id})">إضافة للسلة</button>
        </div>
    `;
});

let cart = [];
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

function addToCart(id) {
    const item = productsList.find(p => p.id === id);
    cart.push(item);
    updateCart();
}

function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        cartItems.innerHTML += `<li>${item.name} - ${item.price} دج</li>`;
        total += item.price;
    });

    cartCount.textContent = cart.length;
    cartTotal.textContent = total;
}

function toggleCart() {
    const cartBox = document.getElementById("cart");
    cartBox.style.display = cartBox.style.display === "block" ? "none" : "block";
}
