window.addEventListener('scroll',  function(){
    var header = document.querySelector("header")
    header.classList.toggle('stiky', window.scrollY > 0)
})
const hamburger = document.querySelector(".hamburger")
const main_nav = document.querySelector(".main_navigation")
const main_btn = document.querySelector(".main_btns")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    main_nav.classList.toggle("active")
    main_btn.classList.toggle("active")
})
document.querySelectorAll(".main_navigation", ".main_btns").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    main_nav.classList.remove("active")
    main_btn.classList.remove("active")
}))