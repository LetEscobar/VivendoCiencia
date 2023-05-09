window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    // showNavOnScroll()
    showBackToTopButtonOnScroll()
    // turnBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
    // console.log(scrollY)
}

function activateMenuAtCurrentSection(section) {
    // criando a linha alvo
    const targetLine = scrollY + innerHeight / 2

    // verificar se a sessão passou da linha
    // capturando os dados que são necessários

    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

    // informações dos dados e da l�gica

    // verificar se a base está abaix a liha alvo
    // quais dados vou precisar?
    const sectionEndsAt = sectionTop + sectionHeight
    const sectionEndPassedTargetline = sectionEndsAt <= targetLine

    // limites da sessão
    const sectionBoundaries =
        sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }
}

function showBackToTopButtonOnScroll() {
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

const cards = document.querySelectorAll('.card')
const cardsContainer = document.querySelector('.cards')
cards.forEach(card => {
    card.addEventListener('click', () => {
        // verifica se já tá selecionado e remove a classe
        if (card.classList.contains('selected')) {
            card.classList.remove('selected')
            card.style.backgroundColor = '#ffffff'
            card.style.border = '1px solid hsl(calc(var(--hue) - 22), 23%, 89%)'
        } else {
            // se não tiver selecionado, adiciona a classe
            card.classList.add('selected')
            card.style.backgroundColor = '#56f86c'
            card.style.border = '1px solid #008b00'
        }
    })
})

//a leticia é muito linda <3

const selectedCards = []
// guarda em selectedCards os cards que estão selecionados
function getSelectedCards() {
    const cards = document.querySelectorAll('.card.selected')
    cards.forEach(card => {
        selectedCards.push(card)
    })
}

// Obtém o botão e o modal
var modal = document.getElementById('myModal')
var btn = document.getElementsByClassName('open-modal-btn')[0]

// Obtém o elemento <span> que fecha o modal
var span = document.getElementsByClassName('close')[0]

// Quando o botão é clicado, o modal é exibido
btn.onclick = function () {
    modal.style.display = 'block'
}

// Quando o usuário clica no <span> (x), o modal é fechado
span.onclick = function () {
    modal.style.display = 'none'
}

// Quando o usuário clica fora do modal, ele é fechado
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none'
    }
}
