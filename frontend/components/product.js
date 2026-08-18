export function productCard(product) {
  return `
  <div class="CardConatiner"  data-id="${product._id}">
    <div class="imageDiv">
      <img src=${product.image} alt="" />
      <div class="catagory">${product.category}</div>
    </div>
    <div class="contentArea">
      <div class="title">${product.title}</div>
      <div class="tags">
      ${renderTags(product.tags)}
      </div>
      <p>
        ${product.description}
      </p>

      <div class="bottomRow">
        <div>
          <div class="price">Price</div>
          <span>Rs ${product.price} </span>
        </div>
        <button class="btn" id="buyButton" data-id="${product._id}">Buy Now</div>
      </div>
    </div>
  </div>
    `
}

export function buttonClick() {
  const buyButton = document.querySelectorAll('.btn')
  buyButton.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation()
    })
  })
}

function renderTags(tags = []) {
  return (
    tags.map((tag) => (
      `<span class="tag">${tag}</span>`
    )).join("")
  )
}

export const products = [
  {
    _id: 1,
    image: "./images/image.png",
    category: "Sneakers",
    title: "Nike Air Max 270",
    size: [6, 7, 8, 9, 10, 11],
    tags: ["Sporty", "Popular", "Comfortable"],
    description: "Comfortable everyday sneakers with a lightweight design.",
    price: 129.99
  },
  {
    _id: 2,
    image: "./images/image.png",
    category: "Running",
    title: "Adidas Ultraboost",
    size: [7, 8, 9, 10, 11, 12],
    tags: ["Running", "Lightweight", "Comfortable"],
    description: "High-performance running shoes with responsive cushioning.",
    price: 149.99
  },
  {
    _id: 3,
    image: "./images/image.png",
    category: "Casual",
    title: "Converse Chuck Taylor",
    size: [6, 7, 8, 9, 10, 11],
    tags: ["Classic", "Casual", "Popular"],
    description: "Classic casual sneakers with a timeless canvas design.",
    price: 79.99
  },
  {
    _id: 4,
    image: "./images/image.png",
    category: "Basketball",
    title: "Jordan Basketball Shoes",
    size: [8, 9, 10, 11, 12, 13],
    tags: ["Basketball", "Sporty", "Premium"],
    description: "High-performance basketball shoes designed for stability and grip.",
    price: 179.99
  },
  {
    _id: 5,
    image: "./images/image.png",
    category: "Formal",
    title: "Classic Leather Oxford",
    size: [7, 8, 9, 10, 11, 12],
    tags: ["Formal", "Leather", "Elegant"],
    description: "Premium leather Oxford shoes perfect for formal occasions.",
    price: 119.99
  },
  {
    _id: 6,
    image: "./images/image.png",
    category: "Boots",
    title: "Timberland Classic Boots",
    size: [7, 8, 9, 10, 11, 12],
    tags: ["Boots", "Outdoor", "Durable"],
    description: "Durable outdoor boots designed for comfort and all-weather use.",
    price: 159.99
  }
];
export const category = [
  {
    name: "Sneakers",
    color: "red"
  },
  {
    name: "Running",
    color: "red"
  },
  {
    name: "Casual",
    color: "red"
  },
  {
    name: "Basketball",
    color: "red"
  },
  {
    name: "Formal",
    color: "red"
  },
  {
    name: "Boots",
    color: "red"
  }
];




export const cardItem = [
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

