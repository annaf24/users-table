const API = 'https://dummyjson.com'

export async function loadUsersData(skip = 0, limit = 10) {
    try {
        const url = `${API}/users?limit=${limit}&skip=${skip}&select=id,firstName,lastName,age,email`;

        const response = await fetch(url);
        if (!response.ok) throw new Error('Error loading data');
        const data = await response.json();

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
        const response = await fetch(`${API}/users/${userId}/posts`);
        if (!response.ok) throw new Error('Error loading posts');
        const data = await response.json();

        return data.posts;
    } catch (error) {
        console.error(error);
    }
    
}

export async function loadUserById(userId) {
    try {
        const response = await fetch(`${API}/users/${userId}`);
        if (!response.ok) throw new Error('User not found');
        const user = await response.json();
        return user;
    } catch (error) {
        console.error(error);
    }
}