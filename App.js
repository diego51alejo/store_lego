const modal = document.querySelector('.modal')

const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
const button3 = document.querySelector('#button3')


const closeButton = document.querySelector('.modal__content--close')


const ShowModal = (elemento, classToRemove, classToAdd) => {
    elemento.classList.remove(classToRemove)
    elemento.classList.add(classToAdd)
}


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

closeButton.addEventListener('click', () => {
    
    modal.classList.remove('visible')
    modal.classList.add('hidden')
})