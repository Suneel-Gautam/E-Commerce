

import { url } from "../api/fetchApi.js"

let cardItem = []
const getCardData = async () => {
    try {
        const response = await fetch(`${url}/cart`, {
            credentials: "include"
        })
        const data = await response.json()
        if (!response.ok) {
            console.log(data)
        } else {
            cardItem = data.data
        }

    } catch (error) {
        console.log(error)
    }

}

getCardData()
import { isAuthenticated, checkLogin } from "./navbar.js"

const loginModal = document.querySelector('#loginModal')

async function init() {
    await checkLogin()

    if (!isAuthenticated) {
        loginModal.style.display = "flex"

        const loginButton = document.querySelector('#loginButton')
        loginButton.addEventListener('click', () => {
            window.location.href = "/auth.html"
        })
    }
}
init()
const cardItems = document.querySelector('.cardItems')

function renderCart(cartProduct) {

    if (cardItem.length === 0) {
        cardItems.innerHTML = "<span>No Cart Item found</span>"
        return
    }
    let cardHtml = ""
    cartProduct.forEach((item) => {
        cardHtml += `
      <div class="item">
                    <input type="checkbox" name="" id="">
                    <div class="content">
                        <div class="leftSideArea">
                            <div class="image">
                                <img src="${item.productImage}" alt="">
                            </div>
                            <div class="content-items">
                                <h1>
                                    ${item.name}
                                </h1>
                                <div class="another">
                                    <p>Rs : ${item.price} </p>
                                    <p>Size : ${item.size}</p>
                                </div>
                            </div>
                        </div>
                        <div class="buttons">
                            <div class="quantity">
                                <button class="decreaseId" data-id="${item.id}">-</button>
                                <span>${item.quantity}</span>
                                <button class="increaseId" data-id="${item.id}">+</button>
                            </div>
                            <div class="deleteBtn" data-id="${item.id}"><i class="fa-solid fa-trash-can"></i></div>
                        </div>
                    </div>
                </div>
    `
    })
    cardItems.innerHTML = cardHtml
    addCart()
}


function addCart() {
    const decreaseBtn = document.querySelectorAll('.decreaseId')
    decreaseBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            const id = Number(btn.dataset.id)
            const product = cardItem.find(item => item.id === id)

            if (product.quantity > 1) {
                product.quantity--
            }
            renderCart(cardItem)
        })
    })
    const increaseBtn = document.querySelectorAll('.increaseId')
    increaseBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            const id = Number(btn.dataset.id)
            const product = cardItem.find(item => item.id === id)
            product.quantity++
            renderCart(cardItem)
        })
    })

    const deleteBtn = document.querySelectorAll('.deleteBtn')

    deleteBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            const id = Number(btn.dataset.id)
            cardItem = cardItem.filter(item => item.id !== id)
            renderCart(cardItem)
        })
    })

}


renderCart(cardItem)
