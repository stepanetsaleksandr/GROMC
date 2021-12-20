const fetchUser = async userId => {
  return fetch(`https://api.github.com/users/${userId}`).then(response => response.json());
};

// in arr
// out promise
const getUsersBlogs = async arrUsers => {
  try {
    const blogs = await Promise.all(
      arrUsers.map(async id => {
        return fetchUser(id).then(user => user.blog);
      }),
    );
    return blogs;
  } catch (err) {
    throw new Error('Error');
  }
};

getUsersBlogs(['google', 'facebook', 'gaearon']).then(linksList => console.log(linksList));
