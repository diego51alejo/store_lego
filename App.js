const modal = document.querySelector('.modal')

const closeMenu = document.querySelector('#close-menu-mobile')
const Menu_Mobile = document.querySelector('.navbar-mobile')
const Icon_Menu_Mobile = document.querySelector('.buguer-icon') 

const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
const button3 = document.querySelector('#button3')


const closeSpider = document.querySelector('#modal__content--close-spider')



const ShowModal = (elemento, classToRemove, classToAdd) => {
    elemento.classList.remove(classToRemove)
    elemento.classList.add(classToAdd)
}

const CloseModal = (elemento, classToAdd, classToRemove) => {
    elemento.classList.add(classToAdd)
    elemento.classList.remove(classToRemove)
}



closeMenu.addEventListener('click', () => {
    CloseModal(Menu_Mobile, 'hidden-mobile', 'visible-mobile')
})

Icon_Menu_Mobile.addEventListener('click', () => {
    ShowModal(Menu_Mobile, 'hidden-mobile', 'visible-mobile')
})

closeSpider.addEventListener('click', () => {
    CloseModal(modal, 'hidden', 'visible')
})


button1.addEventListener('click', () => {
    ShowModal(modal, 'hidden', 'visible')
})

button2.addEventListener('click', () => {
    
    ShowModal(modal, 'hidden', 'visible')
})

button3.addEventListener('click', () => {
    
    modal.classList.remove('hidden')
    modal.classList.add('visible')
})


// let height = window.outerHeight

// let height_container = document.querySelector('body')
// height_container.setAttribute('style', `height: ${height}px`)


// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });






