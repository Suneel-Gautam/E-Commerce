export function productCard(image, category, title, tags, description, price) {
  return `
  <div class="CardConatiner">
    <div class="imageDiv">
      <img src=${image} alt="" />
      <div class="catagory">${category}</div>
    </div>
    <div class="contentArea">
      <div class="title">${title}</div>
      <div class="tags">
      ${renderTags(tags)}
      </div>
      <p>
        ${description}
      </p>

      <div class="bottomRow">
        <div>
          <div class="price">Price</div>
          <span> ${price} </span>
        </div>
        <div class="btn">Add to Cart</div>
      </div>
    </div>
  </div>
    `

  CardConatiner
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
    image: "./images/image.png",
    category: "Pizza",
    title: "Pepperoni Pizza",
    tags: ["Cheesy", "Hot", "Popular"],
    description: "Freshly baked pepperoni pizza with extra cheese and crispy crust.",
    price: "$12.99"
  },
  {
    image: "./images/image.png",
    category: "Burger",
    title: "Chicken Burger",
    tags: ["Spicy", "Grilled"],
    description: "Juicy grilled chicken burger served with fresh lettuce and cheese.",
    price: "$8.49"
  },
  {
    image: "./images/image.png",
    category: "Dessert",
    title: "Chocolate Cake",
    tags: ["Sweet", "Best Seller"],
    description: "Rich chocolate cake topped with creamy chocolate frosting.",
    price: "$6.99"
  },
  {
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
    name: "Shoes",
    color: "red"
  },
  {
    name: "Shoes",
    color: "red"
  },
  {
    name: "Shoes",
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