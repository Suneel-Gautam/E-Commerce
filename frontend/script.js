const profileBtn = document.querySelector('.btn')
const profileDropdown = document.querySelector('.profileDropdown')

let isOpen = false
profileBtn.addEventListener('click', () => {
  if (isOpen) {
    profileDropdown.style.display = 'none'
    isOpen = false
  } else {
    profileDropdown.style.display = 'flex'
    isOpen = true
  }
})

const mobileViewNavbarButton = document.querySelector('.mobileViewbutton')
const mobileViewNavbar = document.querySelector('.mobileview')
let isNavOpen = false
mobileViewNavbarButton.addEventListener('click', () => {
  if (isNavOpen) {
    mobileViewNavbar.style.display = 'none'
    isNavOpen = false
  } else {
    mobileViewNavbar.style.display = "flex"
    isNavOpen = true
  }

})




const selectFile = document.querySelector('#selectFile')
const chooseImage = document.querySelector('#chooseImage')

const products = [
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
  }
];
selectFile.style.display = 'none'
// feature product section 
const featureProductSection = document.querySelector('#featureProductsSection')
let featureProductHtml = ""
products.forEach((item) => (
  featureProductHtml += productCard(
    item.image,
    item.category,
    item.title,
    item.tags,
    item.description,
    item.price,
  )))
const featureListDiv = document.createElement("div")
featureListDiv.classList.add('featureProductList')
featureListDiv.innerHTML = featureProductHtml
featureProductSection.append(featureListDiv)
// productCard
function productCard(image, category, title, tags, description, price) {
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
}
function renderTags(tags = []) {
  return (
    tags.map((tag) => (
      `<span class="tag">${tag}</span>`
    )).join("")
  )
}



