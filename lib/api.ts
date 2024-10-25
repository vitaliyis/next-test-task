const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const getPosts = async () => {
    const res = await fetch(BASE_URL);
    return await res.json()
}

export const getPost = async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`);
    return await res.json()
}