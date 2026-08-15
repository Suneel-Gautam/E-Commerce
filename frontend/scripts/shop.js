import { productCard } from "../components/product.js";
import { category } from "../components/product.js";
import { productModal } from "../components/productModal.js";
import { detailOpen } from "../components/productModal.js";
import { products } from "../components/product.js";
import { buttonClick } from "../components/product.js";

const resetButton = document.querySelector('#resetButton')

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


const inputCheckbox = document.querySelectorAll('input[type="checkbox"]')

inputCheckbox.forEach(inputbox => {
    inputbox.addEventListener('change', (e) => {
        const selectedCatgory = [...inputCheckbox]
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value)

        if (selectedCatgory.length === 0) {
            renderProduct(products)
            return
        }
        const filterProducts = products.filter(item =>
            selectedCatgory.includes(item.category)
        )

        renderProduct(filterProducts)
    })


})

///price filter
const inputMin = document.querySelector('#min')
const inputMax = document.querySelector('#max')

function filterPrices() {
    let minPrice = Number(inputMin.value)
    let maxPrice = Number(inputMax.value)

    let filerPriceProduct = products.filter(item => {

        if (inputMin.value && item.price < minPrice) {
            return false
        }
        if (inputMax.value && item.price > maxPrice) {
            return false
        }
        return true
    })
    renderProduct(filerPriceProduct)


}
inputMin.addEventListener('input', filterPrices)
inputMax.addEventListener('input', filterPrices)


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
    if (productsList.length === 0) {
        notFoundMessage.style.display = "flex"
    } else {
        notFoundMessage.style.display = "none"
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
        buttonClick()
        let product = products.find(item => item._id === Number(card.dataset.id))
        detailOpen(product, shopContainer)
    })
})


resetButton.addEventListener('click', () => {
    searchCategory.forEach(inputbox => {
        inputbox.value = ''
    });
    inputCheckbox.forEach(checkbox => {
        checkbox.checked = false

    })
    inputMax.value = "";
    inputMin.value = "";
    renderProduct(products)


})















