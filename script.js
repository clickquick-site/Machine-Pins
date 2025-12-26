const products = [
    {
        id: 1,
        name: "آلة صنع الشارات (Machine Pin's)",
        price: 24000,
        oldPrice: 25000,
        image: "https://raw.githubusercontent.com/editeurbatna-droid/Click-Quick/main/1000024039.jpg"
    }
];

function displayProducts() {
    const productsSection = document.getElementById('products');
    if(!productsSection) return;
    
    productsSection.innerHTML = "";
    products.forEach(product => {
        productsSection.innerHTML += `
            <div class="product-card" style="border: 1px solid #ddd; padding: 15px; border-radius: 10px; text-align: center; margin: 10px;">
                <img src="${product.image}" alt="${product.name}" style="width:100%; max-width: 300px; border-radius: 8px;">
                <h3>${product.name}</h3>
                <div class="price-container">
                    <span style="color: red; font-weight: bold; font-size: 1.2em;">${product.price} دج</span>
                    <span style="text-decoration: line-through; color: #888; margin-right: 10px;">${product.oldPrice} دج</span>
                </div>
                <button onclick="addToCart(${product.id})" style="background-color: #007bff; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 10px;">إضافة للسلة</button>
            </div>
        `;
    });
}

// تشغيل الدالة
displayProducts();

let cart = [];
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    document.getElementById('cart-count').innerText = cart.length;
    updateCartUI();
}

function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    if(!cartItems || !cartTotal) return;
    
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        cartItems.innerHTML += `<li>${item.name} - ${item.price} دج</li>`;
        total += item.price;
    });
    cartTotal.innerText = total;
}
