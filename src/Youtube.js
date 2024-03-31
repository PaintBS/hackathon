import axios from 'axios';

const KEY = 'AIzaSyCYQ1JuvCXnAB3h9D4F_Ij0LNNpoTg5Chc'; // Replace 'YOUR_API_KEY' with your actual YouTube API key

// Create and export a function that returns the Axios instance
const youtubeApi = () => {
  return axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet',
      maxResults: 15,
      key: KEY,
    },
  });
};

export default youtubeApi;
