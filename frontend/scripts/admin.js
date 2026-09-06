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
const addUserConatiner = document.querySelector('#addUserModal')
const AddProductModal = document.querySelector("#AddProductModal")

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

const userContainer = `
            <section class="userContainer">
                <button class="btn" id="addUserButton">Add User</button>
                <table>
                    <tr>

                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </section>
            `
mainConatiner.innerHTML = dashboardSection

navItem.forEach((item) => {
    item.addEventListener('click', () => {
        const page = item.dataset.page

        if (page === "dashboard") {
            mainConatiner.innerHTML = dashboardSection
        } else if (page === "product") {
            mainConatiner.innerHTML = productContainer

            const addProductButton = document.querySelector('#addProductButton')
            addProductButton.addEventListener('click', () => {
                AddProductModal.style.display = 'flex'
            })


        } else if (page === "user") {
            mainConatiner.innerHTML = userContainer

            const addUserButton = document.querySelector('#addUserButton')
            addUserButton.addEventListener('click', () => {
                addUserConatiner.style.display = "flex"
            })

        } else if (page === "order") {
            mainConatiner.innerHTML = dashboardSection
        }


    })

})





const modalCloseButton = document.querySelector('#modalCloseButton')
const closeProductModal = document.querySelector('#closeProductModal')


if (modalCloseButton) {
    modalCloseButton.addEventListener('click', () => {
        addUserConatiner.style.display = "none"
    })
}

if (closeProductModal) {
    closeProductModal.addEventListener('click', () => {
        AddProductModal.style.display = "none"
    })
}