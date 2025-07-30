const API = 'https://dummyjson.com/users'

export async function loadUsersData(skip = 0, limit = 10) {
    try {
        const url = `${API}?limit=${limit}&skip=${skip}&select=id,firstName,lastName,age,email`;

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