let cardItem = [
    {
        id: 1,
        productImage: '../images/image.png',
        name: "Shoes Caliber 250",
        price: "1500",
        size: "M",
        quantity: 1,
    },
    {
        id: 2,
        productImage: '../images/image.png',
        name: "Shoes Caliber1 250",
        price: "1500",
        size: "M",
        quantity: 1,
    },
]

const cardItems = document.querySelector('.cardItems')

function renderCart() {
    let cardHtml = ""
    cardItem.forEach((item) => {
        cardHtml += `
      <div class="item">
                    <input type="checkbox" name="" id="">
                    <div class="content">
                        <div class="leftSideArea">
                            <div class="image">
                                <img src="${item.productImage}" alt="">
                            </div>
                            <div class="content-items">
                                <h1>
                                    ${item.name}
                                </h1>
                                <div class="another">
                                    <p>Rs : ${item.price} </p>
                                    <p>Size : ${item.size}</p>
                                </div>
                            </div>
                        </div>
                        <div class="buttons">
                            <div class="quantity">
                                <button class="decreaseId" data-id="${item.id}">-</button>
                                <span>${item.quantity}</span>
                                <button class="increaseId" data-id="${item.id}">+</button>
                            </div>
                            <div class="deleteBtn" data-id="${item.id}"><i class="fa-solid fa-trash-can"></i></div>
                        </div>
                    </div>
                </div>
    `

    })
    cardItems.innerHTML = cardHtml
    addCart()
}

function addCart() {
    const decreaseBtn = document.querySelectorAll('.decreaseId')
    decreaseBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            const id = Number(btn.dataset.id)
            const product = cardItem.find(item => item.id === id)

            if (product.quantity > 1) {
                product.quantity--
            }
            renderCart()
        })
    })
    const increaseBtn = document.querySelectorAll('.increaseId')
    increaseBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            const id = Number(btn.dataset.id)
            const product = cardItem.find(item => item.id === id)
            product.quantity++
            renderCart()
        })
    })

    const deleteBtn = document.querySelectorAll('.deleteBtn')

    deleteBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            const id = Number(btn.dataset.id)
            cardItem = cardItem.filter(item => item.id !== id)
            renderCart()

        })
    })

}


renderCart()
