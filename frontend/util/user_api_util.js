export const fetchUsers = () => {
  return $.ajax({
    method: "get",
    url: `/api/users`
  });
};

export const fetchUser = id => {
  return $.ajax({
    method: "get",
    url: `/api/users/${id}`
  });
};

export const updateUser = (formData, id) => {
  return $.ajax({
    method: "patch",
    processData: false,
    contentType: false,
    dataType: 'json',
    url: `/api/users/${id}`,
    data: formData
  });
};

export const newsFeed = () => {
  return $.ajax({
    method: "get",
    url: `/api/newsfeed`
  });
};

// user.friendIds.map((id) => state.users[id])
// user.postIds.map((id) => state.posts[id])
