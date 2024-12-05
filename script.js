document.addEventListener('DOMContentLoaded', () => {
    const currentPage = document.querySelector('.current');
    if (currentPage) {
        currentPage.style.fontWeight = 'bold';
        currentPage.style.backgroundColor = '#d4d4d4';
        currentPage.style.color = '#000';
        currentPage.style.cursor = 'default';
    }
});