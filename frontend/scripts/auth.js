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

// register button click
registerButton.addEventListener('click', async () => {
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

    registerButton.disable = "true"
    registerButton.innerHTML = "Registering..."

    try {

        const formData = new FormData()

        formData.append("username", payload.username)
        formData.append("email", payload.email)
        formData.append("phone", payload.phoneNumber)
        formData.append("password", payload.password)
        const response = await fetch(`${url}/auth/register`, {
            method: "POST",
            body: formData
        })
        const data = await response.json()

        if (!response.ok) {
            registerError.innerHTML = "Registration failed"
            return
        }


    } catch (error) {
        console.error("Register error:", error)
        registerError.innerHTML = "Something went wrong"
    } finally {
        registerButton.disabled = false
        registerButton.innerHTML = "Sign Up"
    }

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
const loginError = document.querySelector('#loginError')

let loginPayload = {
    username: "",
    password: ""
}

const loginInputField = document.querySelectorAll('.login-inputBox')
const loginButton = document.querySelector('#loginButton')
loginInputField.forEach((loginInput, index) => {
    const inputbox = loginInput.lastElementChild
    inputbox.addEventListener('input', () => {
        let userInput = inputbox.value.trim()
        if (inputbox.name === "password") {
            loginPayload.password = userInput
        } else {
            const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInput)

            if (isEmail) {
                loginPayload.email = userInput
                delete loginPayload.username
            } else {
                loginPayload.username = userInput
                delete loginPayload.email
            }
        }
        loginError.innerHTML = ""
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

// login button click 
loginButton.addEventListener('click', () => {
    for (const key in loginPayload) {
        if (!loginPayload[key]) {
            loginError.innerHTML = `${key} can't be empty`
            return
        }
    }

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

