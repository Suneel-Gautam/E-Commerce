import { url } from "../api/fetchApi.js"

const registerInputFeild = document.querySelectorAll('.registerinputBox')

const payload = {
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
}

registerInputFeild.forEach(box => {
    const input = box.lastElementChild
    input.addEventListener('input', () => {
        payload[input.classList[0]] = input.value
        console.log(payload)
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

