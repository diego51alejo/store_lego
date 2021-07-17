const modal = document.querySelector('.modal')


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

// closeButton.addEventListener('click', () => {
//     CloseModal(modal, 'hidden', 'visible')
//     CloseModal(modal_2, 'hidden', 'visible')
// })

// closeButton.forEach((closeButton, index) => {
//     closeButton.addEventListener('click', CloseModal(index, 'hidden', 'visible'))
// })






