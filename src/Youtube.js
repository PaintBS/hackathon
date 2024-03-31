import axios from 'axios';

const KEY = 'AIzaSyCalLZ8FTnLyegO5fTo8syLUsyd9miPjYU'; // Replace 'YOUR_API_KEY' with your actual YouTube API key

// Create and export a function that returns the Axios instance
const youtubeApi = () => {
  return axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
      part: 'snippet',
      maxResults: 5,
      key: KEY,
    },
  });
};

export default youtubeApi;
