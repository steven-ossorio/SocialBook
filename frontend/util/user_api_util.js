export const fetchUsers = () => {
  return $.ajax({
    method: "get",
    url: `/api/users`
  });
};

export const updateUser = user => {
  return $.ajax({
    method: "patch",
    url: `/api/users/${user.id}/edit`,
    data: { user }
  });
};

export const fetchUser = id => {
  return $.ajax({
    method: "get",
    url: `/api/users/${id}`
  });
};
