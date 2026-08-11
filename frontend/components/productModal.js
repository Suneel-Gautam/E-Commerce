
export function productModal(product) {
    return `
        <div class="productDetailsModal">
            <button class="closeBtn" id="close-Btn">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <div class="productImage">
                <img src="${product.image}" alt="Chicken Burger">
            </div>
            <div class="productInfo">
                <span class="category">${product.category}</span>
                <h1>${product.title}</h1>
                <p class="description">
                   ${product.description}
                </p>
                <div class="price">
                    ${product.price}
                </div>
                <div class="quantityWrapper">
                    <span>Quantity</span>
                    <div class="quantity">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                </div>
                <div class="buttons">
                    <button class="addToCart">
                        <i class="fa-solid fa-cart-shopping"></i>
                        Add to cart
                    </button>
                    <button class="buyNow">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    `
}

export function detailOpen(product, container) {
    const modalDiv = document.createElement('div')
    modalDiv.classList.add('modalOverlay')
    modalDiv.innerHTML = productModal(product)
    container.appendChild(modalDiv)

    const closeBtn = document.querySelector('#close-Btn')

    closeBtn.addEventListener('click', () => {
        modalDiv.remove()
    })

}


