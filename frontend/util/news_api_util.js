export const fetchNews = () => {
  return $.ajax({
    method: 'get',
    url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=63a44ccf0d904c129d190571906d8d3c'
  });
};
