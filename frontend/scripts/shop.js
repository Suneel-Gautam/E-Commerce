import { productCard } from "../components/product.js";
import { products } from "../components/product.js";
import { category } from "../components/product.js";
import { size } from "../components/product.js";

const cards = document.querySelector('.cards')

let card = ""
products.forEach((item) => (
    card += productCard(
        item.image,
        item.category,
        item.title,
        item.tags,
        item.description,
        item.price,
    )))

cards.innerHTML = card

const catogeryFilter = document.querySelector('.catogeryFilter')
const categoryFilterCon = document.querySelector('#category-Filter')

let categoryHtml = ""

category.forEach((item) => {
    categoryHtml += `
      <div class="item">
       <input type="checkbox" />
       <p>${item.name}</p>
       </div>
    `
})
catogeryFilter.innerHTML = categoryHtml
categoryFilterCon.innerHTML = categoryHtml


const sizeItems = document.querySelector('.sizeItems')
const sizeItemsCon = document.querySelector('#size-Items')

let sizeHtml = ""

size.forEach((item) => {
    sizeHtml += `
    <span class="">
     ${item}
     </span>
    `
})
sizeItems.innerHTML = sizeHtml
sizeItemsCon.innerHTML = sizeHtml

const filterClose = document.querySelector('.closeBtn')
const leftSideMobile = document.querySelector('.leftSideMobile')

filterClose.addEventListener('click', () => {
    leftSideMobile.style.display = 'none'
})

const filterOpen = document.querySelector('.filterOpen')

filterOpen.addEventListener('click', () => {
    leftSideMobile.style.display = 'block'
})










