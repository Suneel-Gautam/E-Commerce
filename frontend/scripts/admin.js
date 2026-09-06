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
let page = localStorage.getItem("setActive") || "dashboard"

const pagechange = () => {
    if (page === "dashboard") {
        mainConatiner.innerHTML = dashboardSection
        localStorage.setItem("setActive", "dashboard")
    } else if (page === "product") {
        mainConatiner.innerHTML = productContainer
        localStorage.setItem("setActive", "product")

        const addProductButton = document.querySelector('#addProductButton')
        addProductButton.addEventListener('click', () => {
            AddProductModal.style.display = 'flex'
        })

    } else if (page === "user") {
        mainConatiner.innerHTML = userContainer
        localStorage.setItem("setActive", "user")

        const addUserButton = document.querySelector('#addUserButton')
        addUserButton.addEventListener('click', () => {
            addUserConatiner.style.display = "flex"
        })

    } else if (page === "order") {
        mainConatiner.innerHTML = dashboardSection
        localStorage.setItem("setActive", "order")

    }
}
pagechange()


// navbar

navItem.forEach((item) => {
    item.addEventListener('click', () => {
        page = item.dataset.page

        pagechange()


    })

})

// modal close 
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


// product form javascript goes here 




const inputBox = document.querySelectorAll('.productInput')

inputBox.forEach((item, index) => {
    item.addEventListener('input', () => {

    })
    item.addEventListener('keydown', (e) => {
        if (e.key === "Enter") {
            if (index !== inputBox.length - 1) {
                let nextInput = inputBox[index + 1]
                nextInput.focus()

            }
        }
    })
    item.addEventListener('keydown', (e) => {
        if (e.key === "Backspace") {
            if (index !== 0 && item.value == "") {
                let nextInput = inputBox[index - 1]
                nextInput.focus()
            }
        }
    })

})

// select options for catagory 

const catagoryOptions = [
    {
        id: "shoes",
        name: "Shoes"
    },
    {
        id: "others",
        name: "others"
    }

]

const selectCatagory = document.querySelector('#Catagory')

catagoryOptions.forEach((item) => {
    selectCatagory.innerHTML += ` 
       <option value="${item.id}">${item.name}</option>
    `
})

selectCatagory.addEventListener('change', () => {
    const selectedValue = selectCatagory.value
    console.log(selectedValue)
})

const radioItem = document.querySelectorAll(".radioItem")


radioItem.forEach(item => {
    const element = item.children[0]
    element.addEventListener('click', () => {
        if (element.checked) {

            console.log(element.id)

        }

    })
})

// product description 

const productDescription = document.querySelector('#productDescription')


productDescription.addEventListener('input', () => {
    console.log(productDescription.value.trim())
})

// image 

const image = document.querySelector('#image')
const imgdiv = document.querySelector('.img')

image.addEventListener('change', () => {
    const file = image.files[0]

    const img = document.createElement('img')
    img.setAttribute('src', URL.createObjectURL(file))
    img.classList.add('productEnteredImage')
    imgdiv.appendChild(img)

})


const addProductButton = document.querySelector('#addProductButton')


addProductButton.addEventListener('click', () => {

    console.log("Button Clicked!!!")
})
