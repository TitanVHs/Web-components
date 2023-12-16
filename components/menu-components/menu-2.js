let menuButton = document.querySelector('.menuButton');
let navLinks = document.querySelector('.navLinks');
let icon = menuButton.querySelector('i');

menuButton.addEventListener('click', () => {
    if(navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        icon.classList.replace('ri-close-line', 'ri-menu-2-line');
    } else {
        navLinks.classList.add('active');
        icon.classList.replace('ri-menu-2-line', 'ri-close-line');
    }
});