export const createFriendship = friend => {
  return $.ajax({
    method: 'post',
    url: `/api/friends`,
    data: { friend }
  });
};

export const deleteFriendship = id => {
  return $.ajax({
    method: 'delete',
    url: `/api/friends/${id}`
  });
};
