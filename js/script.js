document.addEventListener("DOMContentLoaded", function() {
    var dropdown = document.querySelector('.dropdown');
    var dropdownContent = document.querySelector('.dropdown-content');

    // Открытие меню при наведении на кнопку "Каталог"
    dropdown.addEventListener('mouseenter', function() {
        dropdownContent.style.display = 'block';
    });

    // Закрытие меню при уходе курсора с кнопки "Каталог" или выпадающего меню
    dropdown.addEventListener('mouseleave', function() {
        setTimeout(function() {
            if (!dropdown.matches(':hover') && !dropdownContent.matches(':hover')) {
                dropdownContent.style.display = 'none';
            }
        }, 100);
    });

    dropdownContent.addEventListener('mouseenter', function() {
        dropdownContent.style.display = 'block';
    });

    dropdownContent.addEventListener('mouseleave', function() {
        setTimeout(function() {
            if (!dropdown.matches(':hover') && !dropdownContent.matches(':hover')) {
                dropdownContent.style.display = 'none';
            }
        }, 100);
    });
});



// Попытка создать сохранение данных в локал хранищиле.
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('[data-action="add-to-cart"]');
    const addToWishlistButtons = document.querySelectorAll('[data-action="add-to-wishlist"]');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = button.getAttribute('data-product-id');
            addToCart(productId);
        });
    });

    addToWishlistButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = button.getAttribute('data-product-id');
            addToFavorites(productId);
        });
    });

    function addToCart(productId) {
        // Сохранение productId в локальное хранилище
        localStorage.setItem('cartProduct', productId);
    }

    function addToFavorites(productId) {
        // Сохранение productId в локальное хранилище
        localStorage.setItem('favoritesProduct', productId);
    }

    // Восстанавливаем данные из локального хранилища
    const cartProduct = localStorage.getItem('cartProduct');
    const favoritesProduct = localStorage.getItem('favoritesProduct');

    if (cartProduct) {
        console.log("Товар в корзине: " + cartProduct);
    }

    if (favoritesProduct) {
        console.log("Товар в избранном: " + favoritesProduct);
    }
});

