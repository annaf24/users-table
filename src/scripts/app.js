import { loadUsersData, loadUserPosts } from "./api.js";
import { renderTable } from "./table.js";

const data = await loadUsersData();

let currentUsers = [];
currentUsers = data.users;
console.log(currentUsers)

// loadUsersData();
// loadUserPosts(2);

renderTable(currentUsers);