import { renderSidebar } from "./sidebar.js";

const table = document.querySelector('.table__user');
const tbody = table.querySelector('tbody');
const theaders = table.querySelectorAll('th');

const fields = ['id', 'firstName', 'lastName', 'age', 'email'];

let currentSort = { field: '', direction: 'asc'};
let allUsers = [];
let sortCallback = null;

export function sortTable(users, callback) {
    allUsers = users;
    sortCallback = callback;

    theaders.forEach(theader => {
        theader.addEventListener('click', () => {
            const field = theader.dataset.field;

            if (currentSort.field === field) {
                currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
            } else {
                currentSort = { field, direction: 'asc' };
            }
            
            // Удаляем старые стрелки
            theaders.forEach(h => {
                const arrow = h.querySelector('.sort-arrow');
                if (arrow) { 
                    arrow.remove();
                }
            });
            
            // Добавляем новую стрелку
            const arrow = document.createElement('span');
            arrow.className = 'sort-arrow';
            arrow.textContent = currentSort.direction === 'asc' ? ' ▲' : ' ▼';
            theader.appendChild(arrow);

            if (sortCallback) {
                sortCallback();
            }
        })
    })
}

export function getSortedUsers() {
    if (!allUsers || !currentSort.field) return allUsers;

    return [...allUsers].sort((a, b) => {
        const field = currentSort.field;
        if (a[field] > b[field]) return currentSort.direction === 'asc' ? 1 : -1;
        if (a[field] < b[field]) return currentSort.direction === 'asc' ? -1 : 1;
        return 0;
    });
}

export function renderTable(users) {
    tbody.innerHTML = '';

    users.forEach(user => {
        const tr = document.createElement('tr');
        fields.forEach(field => {
            const td = document.createElement('td');
            td.textContent = user[field];
            tr.appendChild(td);
        })
        tr.addEventListener('click', () => renderSidebar(user.id));
        tbody.appendChild(tr); 
    });
}