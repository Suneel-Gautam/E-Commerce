const isAuthenticated = false

function renderNavbar() {

  let login = `
      <div class="loggedIn ">
        <div class="btn">
          <i class="fa-solid fa-circle-user" style="font-size: 27px"></i>
        </div>
        <div class="profileDropdown">
          <div class="content">
            <span>
              Sunil Gautam
            </span>
            <span>
              gautamsunil917@gmail.com
            </span>
            <button>logout</button>
          </div>
        </div>
      </div>
  `

  let withoutLogin = `
    <div class="navbarButton ">
        <button id="getStarted">
          Get Started
        </button>
      </div>
  `

  let html = `<div class="navbarContainer container">
      <div class="logo" id="logo">Jhutta Bajar </div>

      <nav>
        <a href="/index.html">Home</a>
        <a href="/shop.html">Shop Now</a>
        <a href="/cart.html">Cart</a>
        <a href="/order.html">Order</a>
      </nav>

      ${isAuthenticated ?
      login
      : withoutLogin
    }

    
      <div class="mobileViewbutton">
        <i class="fa-solid fa-bars" style="font-size: 27px;"></i>
      </div>
    </div>
    <div class="mobileview">
      <nav>
         <a href="/index.html">Home</a>
        <a href="/shop.html">Shop Now</a>
        <a href="/cart.html">Cart</a>
        <a href="/order.html">Order</a>
      </nav>

    </div>`

  const navBarContainer = document.querySelector('#navBarContainer')

  navBarContainer.innerHTML = html

}

renderNavbar()




const profileBtn = document.querySelector('.btn')
const profileDropdown = document.querySelector('.profileDropdown')

if (profileBtn) {

  let isOpen = false
  profileBtn.addEventListener('click', () => {
    if (isOpen) {
      profileDropdown.style.display = 'none'
      isOpen = false
    } else {
      profileDropdown.style.display = 'flex'
      isOpen = true
    }
  })
}

const mobileViewNavbarButton = document.querySelector('.mobileViewbutton')
const mobileViewNavbar = document.querySelector('.mobileview')

if (mobileViewNavbarButton) {
  let isNavOpen = false
  mobileViewNavbarButton.addEventListener('click', () => {
    if (isNavOpen) {
      mobileViewNavbar.style.display = 'none'
      isNavOpen = false
    } else {
      mobileViewNavbar.style.display = "flex"
      isNavOpen = true
    }
  })
}

const logo = document.querySelector('#logo')

if (logo) {
  logo.addEventListener('click', () => {
    window.location.href = '/index.html'
  })
}

const getStarted = document.querySelector('#getStarted')

if(getStarted){
  getStarted.addEventListener('click',()=>{
    window.location.href = '/auth.html'
  })
}

