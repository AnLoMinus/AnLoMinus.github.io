document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion-header');

    accordions.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;

            if (content.style.display === 'block') {
                content.style.display = 'none';
                header.classList.remove('active');
            } else {
                content.style.display = 'block';
                header.classList.add('active');
            }
        });
    });
});