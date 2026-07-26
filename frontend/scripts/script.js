import { productCard } from "../components/product.js";
import { products } from "../components/product.js";
const selectFile = document.querySelector('#selectFile')
const chooseImage = document.querySelector('#chooseImage')


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





