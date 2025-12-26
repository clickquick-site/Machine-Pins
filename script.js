const products = [
    {
        id: 1,
        name: "آلة صنع الشارات (Machine Pin's)",
        price: 5500,
        image: "https://raw.githubusercontent.com/editeurbatna-droid/Click-Quick/main/1000024039.jpg"
    }
];

function displayProducts() {
    const productsSection = document.getElementById('products');
    productsSection.innerHTML = "";
    products.forEach(product => {
        productsSection.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" style="width:100%">
                <h3>${product.name}</h3>
                <p>السعر: ${product.price} دج</p>
                <button onclick="addToCart(${product.id})">إضافة للسلة</button>
            </div>
        `;
    });
}

// تشغيل الدالة عند فتح الصفحة
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
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        cartItems.innerHTML += `<li>${item.name} - ${item.price} دج</li>`;
        total += item.price;
    });
    cartTotal.innerText = total;
}
