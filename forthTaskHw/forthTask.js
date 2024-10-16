async function fetchUsersWithPosts() {
    try {
        // 1)Fetch a list of users using an API (e.g., https://jsonplaceholder.typicode.com/users)
        const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!usersResponse.ok) throw new Error('Failed to fetch users');

        const users = await usersResponse.json();

        // 2)For each user, fetch their posts using another API request (https://jsonplaceholder.typicode.com/posts?userId={id})
        const usersWithPosts = await Promise.all(users.map(async user => {
            const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
            if (!postsResponse.ok) throw new Error(`Failed to fetch posts for user ${user.id}`);

            const posts = await postsResponse.json();
            return {
                id: user.id,   //3)Return an array of objects where each object contains:id: the user’s ID 
                name: user.name,  //4) name: the user’s name 
                posts: posts.map(post => post.title) // 5)posts: an array of post titles (title) for that user 
            };
        }));

        // Return the result
        return usersWithPosts;

    } catch (error) {
        // 7) Handle any request failure
        return Promise.reject(`Error: ${error.message}`);
    }
}

fetchUsersWithPosts()
    .then(data => console.log(data))
    .catch(err => console.error(err));
