const API = 'https://dummyjson.com/users'

const SKIP = 0;
const LIMIT = 10;

export async function loadUsersData() {
    try {
        const url = `${API}?limit=${LIMIT}&skip=${SKIP}&select=id,firstName,lastName,age,email`;

        const responce = await fetch(url);
        const data = await responce.json();

        return {
            users: data.users,
            total: data.total,
        }
    } catch (error) {
        console.error(error);
    }
}

export async function loadUserPosts(userId) {
    try {
        const responce = await fetch(`${API}/${userId}/posts`);
        const data = await responce.json();
        
        return data.posts;
    } catch (error) {
        console.error(error);
    }
    
}