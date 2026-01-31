const products = document.querySelectorAll('.product');

products.forEach(product => {
    const decBtn = product.querySelector('.product__quantity-control_dec');
    const incBtn = product.querySelector('.product__quantity-control_inc');
    const valueEl = product.querySelector('.product__quantity-value');
    const addBtn = product.querySelector('.product__add');

    decBtn.addEventListener('click', () => {
        let value = parseInt(valueEl.textContent);
        if (value > 1) {
            valueEl.textContent = value - 1;
        }
    });

    incBtn.addEventListener('click', () => {
        let value = parseInt(valueEl.textContent);
        valueEl.textContent = value + 1;
    });

    addBtn.addEventListener('click', () => {
        const cartProducts = document.querySelector('.cart__products');

        const productId = product.dataset.id;
        const productImage = product.querySelector('.product__image').src;
        const productCount = parseInt(valueEl.textContent);

        let cartProduct = cartProducts.querySelector(
            `.cart__product[data-id="${productId}"]`
        );

        if (cartProduct) {
            const countEl = cartProduct.querySelector('.cart__product-count');
            countEl.textContent =
                parseInt(countEl.textContent) + productCount;
        } else {
            cartProduct = document.createElement('div');
            cartProduct.className = 'cart__product';
            cartProduct.dataset.id = productId;

            cartProduct.innerHTML = `
                <img class="cart__product-image" src="${productImage}">
                <div class="cart__product-count">${productCount}</div>
            `;

            cartProducts.appendChild(cartProduct);
        }
    });
});