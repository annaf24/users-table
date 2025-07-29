import { loadUserPosts } from "./api.js";

const sidebar = document.querySelector('.sidebar');
const sidebarHeading = sidebar.querySelector('.sidebar__heading');
const sidebarContent = sidebar.querySelector('.sidebar__content');

export async function renderSidebar(userId) {
    try {
        const posts = await loadUserPosts(userId)
        sidebarContent.innerHTML = '';

        posts.forEach(post => {
            const article = document.createElement('article');
            article.className = 'sidebar__post';

            const title = document.createElement('h3');
            title.className = 'sidebar__post-title';
            title.textContent = post.title;

            const body = document.createElement('p');
            body.className = 'sidebar__post-body';
            body.textContent = post.body;

            article.appendChild(title);
            article.appendChild(body);
            sidebarContent.appendChild(article);
        })
    } catch (error) {
        console.error(error);
    }

}