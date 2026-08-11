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
                        <button id="decreaseBtn">-</button>
                        <span id="quantity">1</span>
                        <button id="increaseBtn">+</button>
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
    quantityButton()
}


function quantityButton() {
    const decreaseBtn = document.querySelector('#decreaseBtn')
    const increaseBtn = document.querySelector('#increaseBtn')
    const quantityCount = document.querySelector('#quantity')

    let count = 1
    if (decreaseBtn) {
        decreaseBtn.addEventListener('click', () => {
            if (count > 1) {
                count --
                quantityCount.innerHTML = count
                console.log(count)

            }
        })
    }
    if (increaseBtn) {
        increaseBtn.addEventListener('click', () => {
            count++
            quantityCount.innerHTML = count
            console.log(count)

        })
    }
}





