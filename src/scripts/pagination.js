export function renderPagination({total, limit, currentPage}, onPageChange) {
    const pagination = document.querySelector('.pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(total / limit);
    const DEFAULT_VISIBLE_PAGES = 5;

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
    
    const addButton = (text, index, isActive = false) => {
        pagination.appendChild(createButton(text, index, isActive));
    }

     const createDots = () => {
        const span = document.createElement('span');
        span.textContent = '...';
        span.className = 'pagination__dots';
        return span;
    };

    let startPage = Math.max(currentPage - Math.floor(DEFAULT_VISIBLE_PAGES / 2), 0);
    const endPage = Math.min(Math.max(startPage + DEFAULT_VISIBLE_PAGES, DEFAULT_VISIBLE_PAGES), totalPages);

    if (currentPage > 1) addButton('<<', 0);
    if (currentPage > 0) addButton('<', currentPage - 1);
    

    for (let i = startPage; i < endPage; i++) {
        const button = createButton(i + 1, i, i === currentPage);
        pagination.appendChild(button);
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            pagination.appendChild(createDots());
        }
        addButton(totalPages, totalPages - 1);
    }

    if (currentPage < totalPages - 1) addButton('>', currentPage + 1);
}


