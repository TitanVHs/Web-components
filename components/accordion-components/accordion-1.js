let accordion = document.querySelectorAll('.accordion');

accordion.forEach(function(item) {
    const accordionHeader = item.querySelector('.accordionHeader');
    const accordionContent = item.querySelector('.accordionContent');
    const accordionIcon = item.querySelector('.accordionHeader i');

    item.onclick = function() {
        accordion.forEach(function(otherItem) {
            const otherAccordionHeader = otherItem.querySelector('.accordionHeader');
            const otherAccordionContent = otherItem.querySelector('.accordionContent');
            const otherAccordionIcon = otherItem.querySelector('.accordionHeader i');
            
            if (item !== otherItem) {
                if (otherAccordionHeader.classList.contains('open')) {
                    otherAccordionHeader.classList.remove('open');
                    otherAccordionContent.style.height = '0px';
                    otherAccordionContent.style.padding = '0px';
                    otherAccordionIcon.classList.remove('active');
                }
            }
        });

        accordionHeader.classList.toggle('open');

        if(accordionHeader.classList.contains('open')) {
            accordionContent.style.height = `${accordionContent.scrollHeight}px`;
            accordionContent.style.padding = '16px';
            accordionIcon.classList.add('active');
        } else {
            accordionContent.style.height = '0px';
            accordionContent.style.padding = '0px';
            accordionIcon.classList.remove('active');
        }
    }
});