import { url } from "../api/fetchApi.js"

export function productCard(product) {
  return `
  <div class="CardConatiner"  data-id="${product._id}">
    <div class="imageDiv">
      <img src=${product.productImage} alt="" />
      <div class="catagory">${product.category.name}</div>
    </div>
    <div class="contentArea">
      <div class="title">${product.name}</div>
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

export let products = []

const getProduct = async () => {
  try {
    const response = await fetch(`${url}/product`)
    const data = await response.json()
    if (!response.ok) {
      console.log(data.message)
      return
    }

    products = data.data || []

  } catch (error) {
    console.log(error)
  }
}

await getProduct()

console.log("products:", products)
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

