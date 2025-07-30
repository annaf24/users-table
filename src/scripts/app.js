import { loadUsersData, loadUserPosts } from "./api.js";
import { renderPagination } from "./pagination.js";
import { renderSidebar } from "./sidebar.js";
import { renderTable } from "./table.js";

const LIMIT = 10;
let currentUsers = [];
let currentPage = 0;

async function initialization() {
    await renderData(currentPage);
}

async function renderData(page) {
    try {
        const SKIP = page * LIMIT;
        console.log("crbg"+SKIP);
        const data = await loadUsersData(SKIP, LIMIT);
        currentUsers = data.users;
        renderTable(currentUsers);
        console.log(LIMIT);
        renderPagination({total: data.total, limit: LIMIT, currentPage: page}, onPageChange);
    } catch (error) {
        console.error(error);
    }
}

function onPageChange(page) {
    currentPage = page;
    renderData(page);
}

initialization();