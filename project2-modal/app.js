const openButton = document.getElementById('open-btn')
const closeButton = document.getElementById('close-btn')
const modalContainer = document.getElementById('modal-container')

openButton.addEventListener('click', () => {
    modalContainer.style.display = 'block'
})

closeButton.addEventListener('click', () => {
    modalContainer.style.display = 'none'
})

window.addEventListener('click', (evt) => {
    if(evt.target === modalContainer) {
        modalContainer.style.display = 'none'
    }
})