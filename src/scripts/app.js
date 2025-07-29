import { loadUsersData, loadUserPosts } from "./api.js";
import { renderSidebar } from "./sidebar.js";
import { renderTable } from "./table.js";

const data = await loadUsersData();

let currentUsers = [];
currentUsers = data.users;
// console.log(currentUsers)

// loadUsersData();

console.log(loadUserPosts(2));
renderTable(currentUsers);
renderSidebar(1);