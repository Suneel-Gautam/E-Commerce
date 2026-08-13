import { productCard } from "../components/product.js";
import { products } from "../components/product.js";
const selectFile = document.querySelector('#selectFile')
const chooseImage = document.querySelector('#chooseImage')
import { detailOpen } from "../components/productModal.js";


selectFile.style.display = 'none'
// feature product section 
const featureProductSection = document.querySelector('#featureProductsSection')
let featureProductHtml = ""
products.splice(0,4).forEach((item) => (
  featureProductHtml += productCard(
    item
  )))
const featureListDiv = document.createElement("div")
featureListDiv.classList.add('featureProductList')
featureListDiv.innerHTML = featureProductHtml
featureProductSection.append(featureListDiv)



const cardsContainer = document.querySelectorAll('.CardConatiner')
const mainConatiner = document.querySelector('body')

cardsContainer.forEach(card => {
  card.addEventListener('click', () => {
    let product = products.find(item => item._id === Number(card.dataset.id))
    console.log(product)
    detailOpen(product, mainConatiner)
  })
})







