const table = document.querySelector('.table__user');
const tbody = table.querySelector('tbody');

const fields = ['id', 'firstName', 'lastName', 'age', 'email']

export function sortTable() {

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