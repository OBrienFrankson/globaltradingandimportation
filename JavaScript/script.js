 function displayCart() {
            const cart = JSON.parse(localStorage.getItem("cart")) || [];
            const cartItemsContainer = document.getElementById("cartItems");
            const totalAmountElement = document.getElementById("totalAmount");

            cartItemsContainer.innerHTML = "";

            if (cart.length === 0) {
                cartItemsContainer.innerHTML = "<p>Your cart is empty</p>";
                totalAmountElement.innerText = "0";
                return;
            }

            let total = 0;

            cart.forEach(item => {
                const cartItem = document.createElement("div");
                cartItem.classList.add("cart-item");

                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>Price: ₵${item.price}</p>
                    </div>
                `;

                cartItemsContainer.appendChild(cartItem);
                total += parseFloat(item.price);
            });

            totalAmountElement.innerText = total.toFixed(2);
        }

        document.getElementById("clearCart").addEventListener("click", function() {
            localStorage.removeItem("cart");
            displayCart();
        });

        displayCart();