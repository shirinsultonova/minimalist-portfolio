var elOpenBody = document.querySelector(".site-body")
var elOpen = document.querySelector(".site-header")
var elOpenBtn = document.querySelector(".nav-open-btn")


elOpenBtn.addEventListener("click", function () {
    elOpen.classList.toggle("site-dropdown")
    elOpenBody.classList.toggle("site-scroll")
}
)