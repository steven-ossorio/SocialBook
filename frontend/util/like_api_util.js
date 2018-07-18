export const like = data => {
  return $.ajax({
    method: "post",
    url: `api/likes`,
    data: { data }
  });
};

export const unlike = id => {
  return $.ajax({
    method: "delete",
    url: `api/likes/${id}`
  });
};
