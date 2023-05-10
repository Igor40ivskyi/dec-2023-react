const baseURL = 'https://jsonplaceholder.typicode.com';

const posts = '/posts';

const urls = {
    posts: {
        getById: (id) => `${posts}/${id}`,
    },
    albums: '/albums',
    comments: '/comments',
    todos: '/todos'
};

export {
    baseURL,
    posts,
    urls
};

