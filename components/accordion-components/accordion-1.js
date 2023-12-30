let accordion = document.querySelectorAll('.accordion');

accordion.forEach(function(item) {
    const accordionHeader = item.querySelector('.accordionHeader');
    const accordionContent = item.querySelector('.accordionContent');
    const accordionIcon = item.querySelector('.accordionHeader i');

    accordionHeader.onclick = function() {
        if(accordionContent.classList.contains('active')) {
            accordionContent.classList.remove('active');
            accordionIcon.style.transform = 'rotate(0deg)';
        } else {
            accordionContent.classList.add('active');
            accordionIcon.style.transform = 'rotate(180deg)';
        }
    }
});