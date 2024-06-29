document.addEventListener('DOMContentLoaded', (event) => {
    const prices = {
        price1: 10000.00,
        price2: 5000.00,
        price3: 27000.00,
        price4: 37000.00,
        price5: 80000.00,
        price6: 90000.00
    };

    const qtyInputs = {
        qty1: document.getElementById('qty1'),
        qty2: document.getElementById('qty2'),
        qty3: document.getElementById('qty3'),
        qty4: document.getElementById('qty4'),
        qty5: document.getElementById('qty5'),
        qty6: document.getElementById('qty6')
    };

    const totalInput = document.getElementById('total');
    const cashInput = document.getElementById('cash');
    const changeInput = document.getElementById('change');
    const cartsTextarea = document.getElementById('carts');

    function formatCurrency(amount) {
        return '₱' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }

    function updateCart() {
        let total = 0;
        let cartText = '';

        for (let i = 1; i <= 6; i++) {
            const qty = parseInt(qtyInputs['qty' + i].value) || 0;
            const price = prices['price' + i];
            total += qty * price;

            if (qty > 0) {
                const productName = document.getElementById('product' + i).innerText;
                cartText += `${productName} - Quantity: ${qty}, Price: ${formatCurrency(qty * price)}\n`;
            }
        }

        totalInput.value = formatCurrency(total);
        cartsTextarea.value = cartText.trim();
        calculateChange(); // Call calculateChange whenever the cart is updated
    }

    function calculateChange() {
        const total = parseFloat(totalInput.value.replace(/[₱,]/g, '')) || 0;
        const cash = parseFloat(cashInput.value) || 0;
        const change = cash - total;
        changeInput.value = formatCurrency(change);
    }

    for (let i = 1; i <= 6; i++) {
        qtyInputs['qty' + i].addEventListener('input', updateCart);
    }

    cashInput.addEventListener('input', calculateChange);
});
