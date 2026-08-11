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
          <span> ${product.price} </span>
        </div>
        <div class="btn">Add to Cart</div>
      </div>
    </div>
  </div>
    `
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
    category: "Pizza",
    title: "Pepperoni Pizza",
    tags: ["Cheesy", "Hot", "Popular"],
    description: "Freshly baked pepperoni pizza with extra cheese and crispy crust.",
    price: "$12.99"
  },
  {
    _id: 2,
    image: "./images/image.png",
    category: "Burger",
    title: "Chicken Burger",
    tags: ["Spicy", "Grilled"],
    description: "Juicy grilled chicken burger served with fresh lettuce and cheese.",
    price: "$8.49"
  },
  {
    _id: 3,
    image: "./images/image.png",
    category: "Dessert",
    title: "Chocolate Cake",
    tags: ["Sweet", "Best Seller"],
    description: "Rich chocolate cake topped with creamy chocolate frosting.",
    price: "$6.99"
  },
  {
    _id: 4,
    image: "./images/image.png",
    category: "Dessert",
    title: "Chocolate Cake",
    tags: ["Sweet", "Best Seller"],
    description: "Rich chocolate cake topped with creamy chocolate frosting.",
    price: "$6.99"
  },
];

export const category = [
  {
    name: "Pizza",
    color: "red"
  },
  {
    name: "Burger",
    color: "red"
  },
  {
    name: "Dessert",
    color: "red"
  },
]

export const size = [
  "S",
  "M",
  "L",
  "XL",
  "2XL",
  "3XL"
]


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

