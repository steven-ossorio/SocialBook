// export const fetchPosts = () => {
//   return $.ajax({
//     method: 'get',
//     url: `api/posts`
//   });
// };
//
// export const createPost = (currentUser, post) => {
//   return $.ajax({
//     method: 'post',
//     url: `api/users/${currentUser.id}/posts`,
//     data: { post }
//   });
// };


export const fetchPosts = () => {
  return $.ajax({
    method: 'get',
    url: `api/posts`
  });
};

export const createPost = post => {
  return ({
    method: 'post',
    url: `api/posts`,
    data: { posts }
  });
};

export const updatePost = post => {
  return ({
    method: 'patch',
    url: `api/posts/${post.id}`,
    data: { post }
  });
};
