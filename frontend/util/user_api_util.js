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

export const updateUser = user => {
  return $.ajax({
    method: "patch",
    processData: false,
    contentType: false,
    dataType: 'json',
    url: `/api/users/${user.id}/edit`,
    data: { user }
  });
};

// user.friendIds.map((id) => state.users[id])
// user.postIds.map((id) => state.posts[id])
