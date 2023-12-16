let headerIcon = document.querySelector('.headerIcon');
let navLinks = document.querySelector('.navLinks');
let background = document.querySelector('.background');
let icon = headerIcon.querySelector('i');

headerIcon.addEventListener('click', () => {
    if(navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        icon.classList.replace('ri-close-line', 'ri-menu-line');
        background.classList.remove('active');
    } else {
        navLinks.classList.add('active');
        icon.classList.replace('ri-menu-line', 'ri-close-line');
        background.classList.add('active');
    }
});

document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !headerIcon.contains(e.target)) {
        navLinks.classList.remove('active');
        icon.classList.replace('ri-close-line', 'ri-menu-line');
        background.classList.remove('active');
    }
});