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



document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.filter-scroll-bar');
    const minValue = document.querySelector('.filter-text-frame');
    const maxValue = document.querySelectorAll('.filter-text-frame')[1];
  
    slider.addEventListener('input', function() {
      const value = this.value;
      minValue.value = value;
      maxValue.value = 10001;
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    const filterButton = document.querySelector('.filter-button');
    const products = document.querySelectorAll('.p2-product-block');

    filterButton.addEventListener('click', function() {
        const minPrice = parseFloat(document.querySelector('.filter-text-frame:nth-of-type(1)').value);
        const maxPrice = parseFloat(document.querySelector('.filter-text-frame:nth-of-type(2)').value);

        products.forEach(function(product) {
            const productPrice = parseFloat(product.querySelector('.price').innerText.replace('$', ''));
            
            if (productPrice >= minPrice && productPrice <= maxPrice) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});

// удаление товара
document.addEventListener('DOMContentLoaded', function() {
    const deleteButtons = document.querySelectorAll('.delete-button');

    deleteButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const productBlock = this.closest('.p2-product-block');
            productBlock.remove();
        });
    });
});


// Попытка принять файл из локал хранилища.
document.addEventListener('DOMContentLoaded', function() {
    let selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
    if (selectedProduct && selectedProduct.page === 'favorites.html') {
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