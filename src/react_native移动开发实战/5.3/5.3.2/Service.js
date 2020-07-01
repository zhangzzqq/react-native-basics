/// 查询正在上映的电影
export function queryMovies(city, start, count) {
  return "https://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&city=" + city + "&start=" + start + "&count=" + count
}

/// 查询即将上映的电影
export function comingMovies(city, start, count) {
  return "https://api.douban.com/v2/movie/coming_soon?apikey=0df993c66c0c636e29ecbb5344252a4a&city=" + city + "&start=" + start + "&count=" + count
}