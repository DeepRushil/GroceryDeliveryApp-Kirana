let cart = [];

function addToCart(id, name, price) {
    const product = { id, name, price };
    cart.push(product);
    alert(`${name} added to cart!`);
}

function showCart() {
    const cartElement = document.getElementById('cart');
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';

    let total = 0;
    cart.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₹${100*item.price.toFixed(2)}`;
        cartItemsElement.appendChild(li);
        total += item.price;
    });

    document.getElementById('total-price').textContent = `Total: ₹${100*total.toFixed(2)}`;
    cartElement.classList.remove('hidden');
}

function hideCart() {
    document.getElementById('cart').classList.add('hidden');
}

function proceedToPayment() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    document.getElementById('payment').classList.remove('hidden');
    document.getElementById('cart').classList.add('hidden');

    // Display the total price on the payment screen
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('payment-total').textContent = `₹${100*total.toFixed(2)}`;
}

function hidePayment() {
    document.getElementById('payment').classList.add('hidden');
}

function makePayment() {
    alert('Payment Successful!');
    document.getElementById('payment').classList.add('hidden');
    showTracker();
}

function showTracker() {
    document.getElementById('tracker').classList.remove('hidden');
}

function hideTracker() {
    document.getElementById('tracker').classList.add('hidden');
}

function completeOrder() {
    alert('Order Completed! Thank you for shopping with us.');
    document.getElementById('tracker').classList.add('hidden');
    cart = []; // Clear the cart after order completion
}
