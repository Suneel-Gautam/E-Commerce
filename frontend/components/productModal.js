const closebtn = document.querySelector('#closeBtn')
const modalOverlay = document.querySelector('.modalOverlay')

closebtn.addEventListener('click', () => {
    modalOverlay.style.display = 'none'
})