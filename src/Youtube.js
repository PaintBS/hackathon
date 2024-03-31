import axios from 'axios';

const KEY = 'AIzaSyDLFRm8YtoDxtAOXdNmfkIeGAiA1i8f66A'; // Replace 'YOUR_API_KEY' with your actual YouTube API key

// Create and export the Axios instance directly
const youtubeApi = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 15,
    key: KEY,
  },
});

export default youtubeApi;
