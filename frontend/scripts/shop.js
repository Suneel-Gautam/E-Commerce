import { productCard } from "../components/product.js";
import { category } from "../components/product.js";
import { size } from "../components/product.js";
import { productModal } from "../components/productModal.js";
import { detailOpen } from "../components/productModal.js";
import { products } from "../components/product.js";


const searchCategory = document.querySelectorAll('.searchCategory')

// working search feature
searchCategory.forEach(inputSearch => {
    inputSearch.addEventListener('input', (e) => {
        let searched = e.target.value
        const filteredProduct = products.filter(item => {
            return item.category.toLowerCase().includes(searched.toLowerCase())
        })
        renderProduct(filteredProduct)

    })
})

const catogeryFilter = document.querySelector('.catogeryFilter')
const categoryFilterCon = document.querySelector('#category-Filter')

let categoryHtml = ""

category.forEach((item) => {
    categoryHtml += `
      <div class="item">
       <input type="checkbox" id="${item.name}" value="${item.name}" />
       <label for="${item.name}">${item.name}</label>
       </div>
    `
})
catogeryFilter.innerHTML = categoryHtml
categoryFilterCon.innerHTML = categoryHtml

const inputCheckbox = document.querySelectorAll('.item')

inputCheckbox.forEach(inputbox => {
    inputbox.addEventListener('click', () => {


    })


})

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


// filter close for mobile screen
const filterClose = document.querySelector('.closeBtn')
const leftSideMobile = document.querySelector('.leftSideMobile')

filterClose.addEventListener('click', () => {
    leftSideMobile.style.display = 'none'
})

const filterOpen = document.querySelector('.filterOpen')

filterOpen.addEventListener('click', () => {
    leftSideMobile.style.display = 'block'
})


// card section start here 


const cards = document.querySelector('.cards')

function renderProduct(productsList) {
    const notFoundMessage = document.querySelector('.notFoundMessage')
    if (Array.isArray(productsList) && productsList.length === 0) {
        notFoundMessage.style.display = "flex"
    }
    let card = ""
    productsList.forEach((item) => (
        card += productCard(
            item
        )))

    cards.innerHTML = card
}

renderProduct(products)




const cardsContainer = document.querySelectorAll('.CardConatiner')


const shopContainer = document.querySelector('body')
cardsContainer.forEach((card) => {
    card.addEventListener('click', () => {
        let product = products.find(item => item._id === Number(card.dataset.id))
        detailOpen(product, shopContainer)
    })
})


















