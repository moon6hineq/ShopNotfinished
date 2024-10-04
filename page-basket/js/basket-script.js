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


// Попытка принять файл из локал хранилища

document.addEventListener('DOMContentLoaded', function() {
    let selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
    if (selectedProduct && selectedProduct.page === 'basket.html') {

    }
});

document.addEventListener('DOMContentLoaded', function() {
    let selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
    if (selectedProduct && selectedProduct.page === 'favorites.html') {
        const selectedProductContainer = document.getElementById('selected-product');
        selectedProductContainer.innerHTML = `
            <div class="selected-product">
                <img src="${selectedProduct.image}" alt="Selected Product Image">
                <h3>${selectedProduct.name}</h3>
                <p>${selectedProduct.price}</p>
            </div>
        `;
    }
});