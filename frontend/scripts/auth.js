import { url } from "../api/fetchApi.js"

const registerInputFeild = document.querySelectorAll('.registerinputBox')

const payload = {
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
}
const registerButton = document.querySelector('#registerButton')

registerButton.addEventListener('click', () => {
    console.log(payload)
})

registerInputFeild.forEach((box, index) => {
    const input = box.lastElementChild

    input.addEventListener('keydown', (e) => {
        if (e.key === "Enter") {
            if (registerInputFeild.length - 1 !== index) {
                let nextInput = registerInputFeild[index + 1].lastElementChild
                nextInput.focus()
            } else {
                registerButton.click()
            }
            if (!payload.username) {
                console.log("username Empty")
            }
        }
    })


    input.addEventListener('input', () => {
        payload[input.classList[0]] = input.value

    })
})





const loginContainer = document.querySelector('#login-container')
const registerContainer = document.querySelector('#register-container')

const gotoregisterPage = document.querySelector('#gotoregisterPage')
const gotologin = document.querySelector('#gotologin')

let currentPage = localStorage.getItem('page')

if (currentPage === "register") {
    registerContainer.classList.remove('hideContainer')
    loginContainer.classList.add('hideContainer')
} else {
    loginContainer.classList.remove('hideContainer')
    registerContainer.classList.add('hideContainer')
}


gotoregisterPage.addEventListener('click', () => {
    registerContainer.classList.remove('hideContainer')
    loginContainer.classList.add('hideContainer')
    localStorage.setItem('page', "register")
})

gotologin.addEventListener('click', () => {
    loginContainer.classList.remove('hideContainer')
    registerContainer.classList.add('hideContainer')
    localStorage.setItem('page', "login")
})

