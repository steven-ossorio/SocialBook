export const fetchPosts = currentUser => {
  return $.ajax({
    method: 'get',
    url: `api/users/${currentUser.id}/posts`
  });
};

export const createPost = (currentUser, post) => {
  return $.ajax({
    method: 'post',
    url: `api/users/${currentUser.id}/posts`,
    data: { post }
  });
};
