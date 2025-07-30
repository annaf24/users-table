export function renderPagination({total, limit, currentPage}, onPageChange) {
    const pagination = document.querySelector('.pagination');
    pagination.innerHTML = '';
    const totalPages = Math.ceil(total / limit);

    for (let i = 0; i < totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i + 1;
        button.className = 'pagination__button';

        if (i === currentPage) {
            button.classList.add('active');
        }
        button.addEventListener('click', () => onPageChange(i));
        pagination.appendChild(button);
    }

}

