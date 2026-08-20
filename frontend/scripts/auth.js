import { url } from "../api/fetchApi.js"

const registerInputFeild = document.querySelectorAll('.registerinputBox')

/// register functions here 
const payload = {
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
}
const registerButton = document.querySelector('#registerButton')

const registerError = document.querySelector('#registerError')
registerButton.addEventListener('click', () => {
    for (const item in payload) {
        if (!payload[item]) {
            registerError.innerHTML = `${item} can't be empty`
            return
        }
    }
    if (payload.password !== payload.confirmPassword) {
        registerError.innerHTML = "Password and confirmPassword doesnt match"
        return
    }
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
        }
        if (e.key === "Backspace") {
            if (!input.value && index !== 0) {
                let prevInput = registerInputFeild[index - 1].lastElementChild
                prevInput.focus()
            }
        }
    })


    input.addEventListener('input', () => {
        payload[input.name] = input.value
        registerError.innerHTML = " "
    })
})


// login functions 

let loginPayload = {
    email: "",
    username: "",
    password: ""
}

const loginInputField = document.querySelectorAll('.login-inputBox')
const loginButton = document.querySelector('#loginButton')
loginInputField.forEach((loginInput, index) => {
    const inputbox = loginInput.lastElementChild

    inputbox.addEventListener('input', () => {

    })

    inputbox.addEventListener('keydown', (e) => {
        if (e.key === "Enter") {
            if (index !== loginInputField.length - 1) {
                let nextInput = loginInputField[index + 1].lastElementChild
                nextInput.focus()
            } else {
                loginButton.click()
            }
        }
        if (e.key === "Backspace") {
            if (!inputbox.value && index !== 0) {
                let prevInput = loginInputField[index - 1].lastElementChild
                prevInput.focus()
            }
        }
    })
})

loginButton.addEventListener('click', () => {
    console.log('Button clicked!!')
})


////  login register container display and hide 
const loginContainer = document.querySelector('#login-container')
const registerContainer = document.querySelector('#register-container')

const gotoregisterPage = document.querySelector('#gotoregisterPage')
const gotologin = document.querySelector('#gotologin')

let currentPage = localStorage.getItem('page')
if (!currentPage) {
    loginContainer.classList.remove('hideContainer')
    registerContainer.classList.add('hideContainer')
}

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

