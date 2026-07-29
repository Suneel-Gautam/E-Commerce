const cardItem = [
    {
        productImage: '../images/image.png',
        name: "Shoes Caliber 250",
        price: "1500",
        size: "M",
        quantity: 2,
    },
    {
        productImage: '../images/image.png',
        name: "Shoes Caliber 250",
        price: "1500",
        size: "M",
        quantity: 2,
    },
]

const cardItems = document.querySelector('.cardItems')

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
                                    Shoes Caliber 250
                                </h1>
                                <div class="another">
                                    <p>Rs : 1500 </p>
                                    <p>Size : M</p>
                                </div>
                            </div>
                        </div>
                        <div class="buttons">
                            <div class="quantity">
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                            <div class="deleteBtn"><i class="fa-solid fa-trash-can"></i></div>
                        </div>
                    </div>
                </div>
    `

})
cardItems.innerHTML = cardHtml