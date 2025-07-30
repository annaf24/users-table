export function renderPagination({total, limit, currentPage}, onPageChange) {
    const pagination = document.querySelector('.pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(total / limit);
    const maxVisiblePages = 5;

    const createButton = (text, index, isActive = false) => {
        const button = document.createElement('button');
        button.textContent = text;
        button.className = 'pagination__button';
        if (isActive) {
            button.classList.add('active');
        }
        button.addEventListener('click', () => onPageChange(index));
        return button;
    }

     const createDots = () => {
        const span = document.createElement('span');
        span.textContent = '...';
        span.className = 'pagination__dots';
        return span;
    };

    let start = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 0);
    let end = start + maxVisiblePages;

    if (end > totalPages) {
        end = totalPages;
        start = Math.max(end - maxVisiblePages, 0);
    }

    if (currentPage > 1) {
        const toFirstPageButton = createButton('<<', 0)
        pagination.appendChild(toFirstPageButton);
    }

    if (currentPage > 0) {
        const prevButton = createButton('<', currentPage - 1)
        pagination.appendChild(prevButton);
    }

    for (let i = start; i < end; i++) {
        const button = createButton(i + 1, i, i === currentPage);
        pagination.appendChild(button);
    }

    if (end < totalPages) {
        if (end < totalPages - 1) {
            pagination.appendChild(createDots());
        }
        pagination.appendChild(createButton(totalPages, totalPages - 1));
    }

    if (currentPage < totalPages - 1) {
        const nextButton = createButton('>', currentPage + 1)
        pagination.appendChild(nextButton);
    }
}


