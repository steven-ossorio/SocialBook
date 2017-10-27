export const fetchPosts = () => {
  return $.ajax({
    method: 'get',
    url: `api/posts`
  });
};

export const createPost = post => {
  return $.ajax({
    method: 'post',
    url: `api/posts`,
    data: { posts }
  });
};

export const updatePost = post => {
  return $.ajax({
    method: 'patch',
    url: `api/posts/${post.id}`,
    data: { post }
  });
};

export const deletePost = id => {
  return $.ajax({
    method: 'delete',
    url: `api/posts/${id}`
  });
};
