const sliderButton = document.querySelector('#sliderButton')
const leftSide = document.querySelector('#leftSide')
const closebutton = document.querySelector("#closebutton")

sliderButton.addEventListener('click', () => {
    leftSide.style.display = 'block'
    sliderButton.style.display = 'none'
})
closebutton.addEventListener('click', () => {
    leftSide.style.display = 'none'
    sliderButton.style.display = 'flex'
})

///user listing modal
const addUserConatiner = document.querySelector('#addUserModal')
const addUserButton = document.querySelector('#addUserButton')
const modalCloseButton = document.querySelector('#modalCloseButton')

addUserButton.addEventListener('click', () => {
    addUserConatiner.style.display = "flex"
})
modalCloseButton.addEventListener('click', () => {
    addUserConatiner.style.display = "none"
})

/// product listing modal 
const addProductButton = document.querySelector('#addProductButton')
const AddProductModal = document.querySelector("#AddProductModal")
const closeProductModal = document.querySelector('#closeProductModal')

addProductButton.addEventListener('click', () => {
    AddProductModal.style.display = 'flex'
})

closeProductModal.addEventListener('click', () => {
    AddProductModal.style.display = "none"
})

