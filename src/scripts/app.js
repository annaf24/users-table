import { loadUsersData } from "./api.js";
import { renderPagination } from "./pagination.js";
import { getSortedUsers, renderTable, sortTable } from "./table.js";

const LIMIT = 10;
let allUsers = [];
let currentPage = 0;

async function initialization() {
    try {
        const dataTotal = await loadUsersData(0,0);
        const total = dataTotal.total;

        const data = await loadUsersData(0, total);
        allUsers = data.users;

        sortTable(allUsers, onSortChange);
        renderPagination({
            total: allUsers.length,
            limit: LIMIT,
            currentPage,
        }, onPageChange);
        renderPage();

    } catch (error) {
        console.error(error);
    }
}

function renderPage() {
    const startOfPage = currentPage * LIMIT;
    const endOfPage = startOfPage + LIMIT;
    const sortedUsers = getSortedUsers();
    renderTable(sortedUsers.slice(startOfPage, endOfPage));
}

function onPageChange(page) {
    currentPage = page;
    renderPage();
    renderPagination({
            total: allUsers.length,
            limit: LIMIT,
            currentPage,
    }, onPageChange);
}

function onSortChange() {
    renderPage();
}

initialization();