const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modalContent = document.querySelector('.modal-content')


for (let card of cards) {
    card.addEventListener("click", function(){
        const videoId = card.getAttribute('id');
        window.location.href = `/video?id=${videoId}`
       
    })
}

