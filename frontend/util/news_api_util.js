export const fetchNews = () => {
  return $.ajax({
    method: "get",
    url:
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=63a44ccf0d904c129d190571906d8d3c"
  });
};

export const fetchScienceNews = () => {
  return $.ajax({
    method: "get",
    url:
      "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=63a44ccf0d904c129d190571906d8d3c"
  });
};

export const fetchSportNews = () => {
  return $.ajax({
    method: "get",
    url:
      "https://newsapi.org/v2/top-headlines?country=us&category=sport&apiKey=63a44ccf0d904c129d190571906d8d3c"
  });
};

export const fetchTechnologyNews = () => {
  return $.ajax({
    method: "get",
    url:
      "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=63a44ccf0d904c129d190571906d8d3c"
  });
};

export const fetchBusinessNews = () => {
  return $.ajax({
    method: "get",
    url:
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=63a44ccf0d904c129d190571906d8d3c"
  });
};
