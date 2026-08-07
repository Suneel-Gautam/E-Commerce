const loginContainer = document.querySelector('#login-container')
const registerContainer = document.querySelector('#register-container')

const gotoregisterPage = document.querySelector('#gotoregisterPage')
const gotologin = document.querySelector('#gotologin')

gotoregisterPage.addEventListener('click', () => {
    registerContainer.classList.remove('hideContainer')
    loginContainer.classList.add('hideContainer')
})

gotologin.addEventListener('click', () => {
    loginContainer.classList.remove('hideContainer')
    registerContainer.classList.add('hideContainer')

})

