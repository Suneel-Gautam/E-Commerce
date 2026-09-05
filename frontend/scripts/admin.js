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

if (addProductButton) {
    addProductButton.addEventListener('click', () => {
        AddProductModal.style.display = 'flex'
    })

}

if (closeProductModal) {
    closeProductModal.addEventListener('click', () => {
        AddProductModal.style.display = "none"
    })
}


// <span class="errormessage">username is required*</span> 



const navItem = document.querySelectorAll('.item')
const mainConatiner = document.querySelector('#mainConatiner')

const dashboardSection = `
            <section class="dashboardContainer" id="dashboardContainer">
                <div class="infoSection">
                    <div class="dashboardbox">
                        <span>10</span>
                        <div>User</div>
                    </div>
                    <div class="dashboardbox">
                        <span>10</span>
                        <div>User</div>
                    </div>
                </div>
            </section>
`

const productContainer = `
            <!-- product listing section   -->
            <section class="productContainer " id="productContainer">
                <button class="btn" id="addProductButton">Add Product</button>
            </section>

`

navItem.forEach((item) => {
    item.addEventListener('click', () => {
        const page = item.dataset.page

        if (page === "dashboard") {
            console.log("dashboard selected")
            mainConatiner.innerHTML = dashboardSection
        } else if (page === "product") {
            console.log("product selected")
        } else if (page === "user") {
            console.log("user selected")
        } else if (page === "order") {
            console.log("order selected")
        }


    })

})

function changePage(page) {

}
