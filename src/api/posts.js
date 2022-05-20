import axios from "axios";

const api_url = "https://dummyjson.com";

export default {
  getPosts(page = 1) {
    const start = page === 1 ? 0 : (page - 1) * 10;
    const url = `${api_url}/posts?limit=10&skip=${start}`;

    return axios.get(url).then((res) => {
      return res.data.posts;
    });
  },

  searchPosts(query) {
    const url = `${api_url}/posts/search?q=${query}`;

    return axios.get(url).then((res) => {
      return res.data.posts;
    });
  },

  getCommentsById(id) {
    const url = `${api_url}/posts/${id}/comments`;

    return axios.get(url).then((res) => {
      return res.data.comments;
    });
  },
};
