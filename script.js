let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function addCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCount();
    alert(name + " Added to Cart");
}

function addWishlist() {
    wishlist.push("item");
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    updateCount();
    alert("Added to Wishlist");
}

function updateCount() {
    let cartCount = document.getElementById("cart-count");
    let wishCount = document.getElementById("wish-count");

    if (cartCount) cartCount.innerText = cart.length;
    if (wishCount) wishCount.innerText = wishlist.length;
}

function searchProduct() {
    let input = document.getElementById("search").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let name = card.querySelector("h2").innerText.toLowerCase();
        if (name.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

updateCount();
