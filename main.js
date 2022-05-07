// PAREI NA AULA 5 - TEMPO: 1:30

window.addEventListener('scroll', onScroll)

function onScroll() {
    showNavOnScroll()
    showBackToButtonOnScroll()
}

function showNavOnScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function showBackToButtonOnScroll() {
    if (scrollY > 550) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700
}).reveal(
    `#home, 
    #home img, 
    #home .stats, 
    #services,
    #services header,
    #services .card,
    #about,
    #about header
    #about .content`
)
