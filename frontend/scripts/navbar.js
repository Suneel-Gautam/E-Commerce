import { url } from "../api/fetchApi.js"

export let isAuthenticated
let profileinfo


// =========================
// CHECK LOGIN
// =========================

export async function checkLogin() {
  try {

    const response = await fetch(`${url}/auth/getme`, {
      credentials: "include"
    })

    const data = await response.json()

    // User is NOT logged in
    if (!response.ok) {

      isAuthenticated = false
      profileinfo = null
      return
    }

    // User IS logged in
    isAuthenticated = true
    profileinfo = data.data


  } catch (error) {

    console.log(error)

    isAuthenticated = false
    profileinfo = null
  }
}


// =========================
// RENDER NAVBAR
// =========================

function renderNavbar() {

  let login = ""

  if (isAuthenticated) {
    login = `
      <div class="loggedIn">

        <div class="btn">
          <i class="fa-solid fa-circle-user" style="font-size: 27px"></i>
        </div>

        <div class="profileDropdown">

          <div class="content">

            <span>
              ${profileinfo.username}
            </span>

            <span>
              ${profileinfo.email}
            </span>

            <button id="logoutButton">
              logout
            </button>

          </div>

        </div>

      </div>
    `
  }


  let withoutLogin = `
    <div class="navbarButton">

      <button id="getStarted">
        Get Started
      </button>

    </div>
  `


  let html = `
    <div class="navbarContainer container">

      <div class="logo" id="logo">
        Jhutta Bajar
      </div>

      <nav>
        <a href="/index.html">Home</a>
        <a href="/shop.html">Shop Now</a>
        <a href="/cart.html">Cart</a>
        <a href="/order.html">Order</a>
      </nav>

      ${isAuthenticated ? login : withoutLogin}

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

    </div>
  `


  const navBarContainer =
    document.querySelector("#navBarContainer")

  navBarContainer.innerHTML = html
}


// =========================
// INITIALIZE
// =========================

async function init() {

  // First check authentication
  await checkLogin()


  // Then render navbar
  renderNavbar()


  // =========================
  // LOGOUT
  // =========================

  const logoutButton =
    document.querySelector("#logoutButton")


  if (logoutButton) {

    logoutButton.addEventListener("click", async () => {

      try {

        const response = await fetch(`${url}/auth/logout`, {
          method: "POST",
          credentials: "include"
        })


        const data = await response.json()

        console.log(data)


        if (response.ok) {

          window.location.href = "/auth.html"

        }

      } catch (error) {

        console.log(error)

      }

    })

  }


  // =========================
  // PROFILE DROPDOWN
  // =========================

  const profileBtn =
    document.querySelector(".btn")

  const profileDropdown =
    document.querySelector(".profileDropdown")


  if (profileBtn) {

    let isOpen = false


    profileBtn.addEventListener("click", () => {

      if (isOpen) {

        profileDropdown.style.display = "none"

        isOpen = false

      } else {

        profileDropdown.style.display = "flex"

        isOpen = true

      }

    })

  }


  // =========================
  // MOBILE NAVBAR
  // =========================

  const mobileViewNavbarButton =
    document.querySelector(".mobileViewbutton")

  const mobileViewNavbar =
    document.querySelector(".mobileview")


  if (mobileViewNavbarButton) {

    let isNavOpen = false


    mobileViewNavbarButton.addEventListener("click", () => {

      if (isNavOpen) {

        mobileViewNavbar.style.display = "none"

        isNavOpen = false

      } else {

        mobileViewNavbar.style.display = "flex"

        isNavOpen = true

      }

    })

  }


  // =========================
  // LOGO
  // =========================

  const logo =
    document.querySelector("#logo")


  if (logo) {

    logo.addEventListener("click", () => {

      window.location.href = "/index.html"

    })

  }


  // =========================
  // GET STARTED
  // =========================

  const getStarted =
    document.querySelector("#getStarted")


  if (getStarted) {

    getStarted.addEventListener("click", () => {

      window.location.href = "/auth.html"

    })

  }

}


// =========================
// START
// =========================

init()