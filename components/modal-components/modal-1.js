let modal = document.querySelector('.modal');
let modalButton = document.querySelector('.modalButton');
let closeModal = document.querySelector('.closeModal');
let background = document.querySelector('.background');

modalButton.addEventListener('click', function() {
    modal.classList.add('active');
    background.classList.add('active');
});

closeModal.addEventListener('click', function() {
    modal.classList.remove('active');
    background.classList.remove('active');
});

document.body.addEventListener('click', function(e) {
    if(!modal.contains(e.target) && !modalButton.contains(e.target)) {
        modal.classList.remove('active');
        background.classList.remove('active');
    }
});