let burger = document.querySelector('.burger-menu')
let nav = document.querySelector('.main-nav')
let list = document.querySelector('.nav-list')
burger.addEventListener('click', function() {
    burger.classList.toggle('active')
    nav.classList.toggle('active')
    list.classList.toggle('active')
})
